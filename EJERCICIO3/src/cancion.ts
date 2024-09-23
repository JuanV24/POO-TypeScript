export class cancion{
    titulo: string;
    genero: string;
    private _autor: string = "";
   

    constructor(titulo: string, genero: string)
    {
        this.titulo = titulo;
        this.genero = genero;

    }
 

    public get autor(): string {
        return this._autor;
    }
    public set autor(value: string) {
        this._autor = value;
    }

    mostrarDatos(){
        return ` <br> Titulo: ${this.titulo} <br>
        Genero: ${this.genero} <br>
        Autor: ${this._autor} <br>` 
    }

}