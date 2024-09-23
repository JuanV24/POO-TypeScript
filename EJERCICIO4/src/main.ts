import './style.css'
import { Cuenta } from './cuenta';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
 <form id="cuentaForm">
      <label>Nombre:</label>
      <input type="text" id="nombre" required><br><br>

      <label>Cantidad inicial:</label>
      <input type="number" id="cantidad" required><br><br>

      <label>Tipo de cuenta:</label>
      <input type="text" id="tipoCuenta" required><br><br>

      <label>Número de cuenta:</label>
      <input type="text" id="numeroCuenta" required><br><br>

      <button type="submit">Crear Cuenta</button>
    </form>
  </div>

  <div id="opcionesCuenta" style="display:none;">
    <h2>Operaciones</h2>
    <button id="mostrarDatos">Mostrar Datos</button><br><br>

    <label>Depósito:</label>
    <input type="number" id="deposito"><br>
    <button id="depositar">Depositar</button><br><br>

    <label>Retiro:</label>
    <input type="number" id="retiro"><br>
    <button id="retirar">Retirar</button><br><br>
  </div>

  <div id="resultado"></div>
  </div>
`


let cuenta: Cuenta;


const form = document.getElementById('cuentaForm') as HTMLFormElement;
const resultado = document.getElementById('resultado') as HTMLElement;
const opcionesCuenta = document.getElementById('opcionesCuenta') as HTMLElement;

form.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault();

 
  const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
  const cantidad = parseFloat((document.getElementById('cantidad') as HTMLInputElement).value);
  const tipoCuenta = (document.getElementById('tipoCuenta') as HTMLInputElement).value;
  const numeroCuenta = (document.getElementById('numeroCuenta') as HTMLInputElement).value;

  
  cuenta = new Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta);

  // Mostrar las opciones de cuenta y ocultar el formulario
  opcionesCuenta.style.display = 'block';
  form.style.display = 'none';
  resultado.innerHTML = `Cuenta creada exitosamente para ${nombre}`;
});


document.getElementById('mostrarDatos')!.addEventListener('click', () => {
  resultado.innerHTML = cuenta.mostrarDatos();
});


document.getElementById('depositar')!.addEventListener('click', () => {
  const deposito = parseFloat((document.getElementById('deposito') as HTMLInputElement).value);
  resultado.innerHTML = cuenta.depositar(deposito);
});


document.getElementById('retirar')!.addEventListener('click', () => {
  const retiro = parseFloat((document.getElementById('retiro') as HTMLInputElement).value);
  resultado.innerHTML = cuenta.retirar(retiro);
});


