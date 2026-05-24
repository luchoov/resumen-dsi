import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

interface EntradaGlosario {
  termino: string;
  archivos: string[];
}

const base = join(process.cwd(), "src", "content", "secciones");
const salida = join(process.cwd(), "src", "data", "glosario.json");
const regex = /<strong>([^<]+)<\/strong>|<Definicion\s+termino="([^"]+)"/g;
const entradas = new Map<string, EntradaGlosario>();

for (const archivo of await readdir(base)) {
  if (!archivo.endsWith(".mdx")) continue;
  const contenido = await readFile(join(base, archivo), "utf8");
  for (const match of contenido.matchAll(regex)) {
    const termino = (match[1] ?? match[2] ?? "").replace(/:$/, "").trim();
    if (!termino || termino.length > 90) continue;
    const key = termino.toLowerCase();
    const existente = entradas.get(key) ?? { termino, archivos: [] };
    if (!existente.archivos.includes(archivo)) existente.archivos.push(archivo);
    entradas.set(key, existente);
  }
}

await mkdir(join(process.cwd(), "src", "data"), { recursive: true });
await writeFile(
  salida,
  `${JSON.stringify(Array.from(entradas.values()).sort((a, b) => a.termino.localeCompare(b.termino, "es")), null, 2)}\n`,
  "utf8"
);

console.log(`Glosario generado: ${entradas.size} términos`);

