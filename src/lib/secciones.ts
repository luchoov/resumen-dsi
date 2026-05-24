import type { CollectionEntry } from "astro:content";

export type Seccion = CollectionEntry<"secciones">;

export function ordenarSecciones(secciones: Seccion[]) {
  return [...secciones].sort((a, b) => a.data.numero - b.data.numero);
}

export function seccionUrl(seccion: Pick<Seccion, "data">) {
  return `/seccion/${seccion.data.slug}`;
}

export function obtenerPrevNext(secciones: Seccion[], slug: string) {
  const ordenadas = ordenarSecciones(secciones);
  const index = ordenadas.findIndex((seccion) => seccion.data.slug === slug);
  return {
    previa: index > 0 ? ordenadas[index - 1] : undefined,
    siguiente: index >= 0 && index < ordenadas.length - 1 ? ordenadas[index + 1] : undefined
  };
}

export function crearIndiceBusqueda(secciones: Seccion[]) {
  return ordenarSecciones(secciones).map((seccion) => ({
    titulo: seccion.data.titulo,
    numero: seccion.data.numero,
    slug: seccion.data.slug,
    resumen: seccion.data.resumen,
    keywords: seccion.data.keywords.join(" "),
    url: seccionUrl(seccion)
  }));
}

export function extraerEncabezados(markdown: string) {
  return markdown
    .split("\n")
    .filter((linea) => /^#{3,4}\s+/.test(linea))
    .map((linea) => {
      const nivel = linea.startsWith("####") ? 4 : 3;
      const texto = linea.replace(/^#{3,4}\s+/, "").trim();
      const id = texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return { nivel, texto, id };
    });
}

