import { Uso } from "./uso";

export interface Silla {
  id: number;
  nombre: string;
  marca: string;
  precio: number;
  uso: Uso;
}
