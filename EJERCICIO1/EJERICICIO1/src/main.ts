import './style.css'
import { cabecera } from './cabecera';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <form id="Form">
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" name="titulo" required><br><br>

        <label for="color">Color:</label>
        <input type="color" id="color" name="color" required><br><br>

        <label for="fuente">Fuente:</label>
        <input type="text" id="fuente" name="fuente" required><br><br>

        <label for="alineacion">Alineación:</label>
        <select id="alineacion" name="alineacion">
            <option value="izquierda">Izquierda</option>
            <option value="centrado">Centro</option>
            <option value="derecha">Derecha</option>
        </select><br><br>

        <button type="submit">Enviar</button>

        <div id= "resultado">
        </div>
    </form>
  </div>
`


const form = document.getElementById("Form") as HTMLFormElement;
const resultado = document.getElementById("resultado") as HTMLElement;

form.addEventListener('submit', (e:SubmitEvent) => {
  e.preventDefault();

  const titulo = (document.getElementById('titulo') as HTMLInputElement).value;
  const color = (document.getElementById('color') as HTMLInputElement).value;
  const fuente = (document.getElementById('fuente') as HTMLInputElement).value;
  const alineacion = (document.getElementById('alineacion') as HTMLSelectElement).value as "Centro" | "Derecha" | "Izquierda";
  
  const editar = new cabecera(titulo,color,fuente);
  editar.alinearTitulo(alineacion);
  resultado.innerHTML = editar.imprimirPropiedades();
})



