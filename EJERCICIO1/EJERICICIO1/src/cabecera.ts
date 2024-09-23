export class cabecera{
  titulo: string;
  color:string;
  fuente: string;
  alineacion : string;

  constructor(titulo : string, color: string, fuente:string, ){
    this.titulo = titulo;
    this.color = color; 
    this.fuente = fuente;
    this.alineacion = "Izquierda";
  }

  obtenerPropiedades(titulo:string, color: string, fuente: string){
    this.titulo = titulo;
    this.color = color; 
    this.fuente = fuente;
  }

  alinearTitulo(alineacion:"Izquierda" | "Derecha" | "Centro"): void{
    if (["centrado", "derecha", "izquierda"].includes(alineacion)) {
      this.alineacion = alineacion;
  } else {
      throw new Error("Alineación no válida. Usa 'centrado', 'derecha' o 'izquierda'.");
  }
  }

  imprimirPropiedades(): string{
    return `
    Título: ${this.titulo}<br>
    Color: ${this.color}<br>
    Fuente: ${this.fuente}<br>
    Alineación: ${this.alineacion}
`
  }





}