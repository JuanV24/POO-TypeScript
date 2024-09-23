import { cancion } from './cancion';
import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <form id="Padre">

  <label>Ingrese el titulo de la cancion</label>
    <input type="text" id="cancion" name="num1"><br><br>
    
  <label>Ingrese el genero de la cancion</label>
    <input type="text" id="genero" name="num2"><br><br>

    <label>Ingrese el autor</label>
    <input type="text" id="autor" name="num2"><br><br>

    <button type="submit">Enviar</button>

    <div id="resultado">
    </div>
  </div>
`
const form = document.getElementById("Padre") as HTMLFormElement;
const resultado = document.getElementById("resultado") as HTMLElement;

form.addEventListener('submit', (e:SubmitEvent)=> {
e.preventDefault();

let titulo= (document.getElementById("cancion") as HTMLInputElement).value;
let genero = (document.getElementById("genero") as HTMLInputElement).value;
let autor = (document.getElementById("autor") as HTMLInputElement).value;


const mostrar = new cancion(titulo, genero);
mostrar.autor = autor; //aqui es donde se ocupa el set para añadir el autor 

resultado.innerHTML = mostrar.mostrarDatos();

})