export class Cuenta {
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: string;
  
    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
      this.nombre = nombre;
      this.cantidad = cantidad;
      this.tipoCuenta = tipoCuenta;
      this.numeroCuenta = numeroCuenta;
    }
  
    // Método para depositar
    depositar(deposito: number): string {
      if (deposito < 5) {
        return 'El valor a depositar debe ser mayor a $5.00';
      } else {
        this.cantidad += deposito;
        return `Se ha depositado correctamente: $${deposito.toFixed(2)}`;
      }
    }
  
    // Método para retirar
    retirar(valor: number): string {
      if (valor > this.cantidad) {
        return 'No hay suficiente saldo en la cuenta';
      } else if (valor < 5) {
        return 'El monto a retirar debe ser mayor a $5.00';
      } else {
        this.cantidad -= valor;
        return `Ha retirado: $${valor.toFixed(2)}. Le queda: $${this.cantidad.toFixed(2)} en su cuenta.`;
      }
    }
  
    
    mostrarDatos(): string {
      return `Nombre: ${this.nombre}<br>
              Tipo de cuenta: ${this.tipoCuenta}<br>
              Número de cuenta: ${this.numeroCuenta}<br>
              Saldo actual: $${this.cantidad.toFixed(2)}`;
    }
  }