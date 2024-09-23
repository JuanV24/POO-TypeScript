import './style.css'
import { calculo } from './calculo';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <form id="Padre">

  <label>Ingrese un numero</label>
    <input type="text" id="numero1" name="num1"><br><br>
    
  <label>Ingrese un segundo numero</label>
    <input type="text" id="numero2" name="num2"><br><br>

    <button type="submit">Enviar</button>

    <div id="resultado">
    </div>
  </div>
`
const form = document.getElementById("Padre") as HTMLFormElement;
const resultado = document.getElementById("resultado") as HTMLElement;

form.addEventListener('submit', (e:SubmitEvent) => {
  e.preventDefault();

const num1 = parseFloat((document.getElementById("numero1") as HTMLInputElement).value);
const num2 = parseFloat((document.getElementById("numero2") as HTMLInputElement).value);

const calculos = new calculo(num1, num2);
resultado.innerHTML = "<br>"+calculos.suma(num1, num2) +"<br>";
resultado.innerHTML += calculos.resta(num1, num2)+"<br>";
resultado.innerHTML += calculos.multiplicacion(num1, + "<br>");
resultado.innerHTML += calculos.division(num1, num2) + "<br>";
resultado.innerHTML += calculos.potencia(num1, num2) + "<br>";
resultado.innerHTML += calculos.factorial(num1);
})
