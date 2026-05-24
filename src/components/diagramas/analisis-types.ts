export interface NodoAnalisis {
  id: string;
  tipo: "boundary" | "control" | "entity" | "actor";
  etiqueta: string;
  x?: number;
  y?: number;
}

export interface ConexionAnalisis {
  from: string;
  to: string;
  etiqueta?: string;
  numero?: number;
}

