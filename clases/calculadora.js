/**
 * ZEDMOUS.DEV — Laboratorio de Control de Versiones con Git
 * Módulo: Clase Calculadora (Práctica de Ramas, Fusiones y Resolución de Conflictos)
 * Autor: Ing. Eduardo Nieves (Zedmous)
 */

class Calculadora {
  constructor(propietario = "Zedmous") {
    this.propietario = propietario;
    this.historial = [];
    console.log(`[Calculadora] Instancia inicializada para: ${this.propietario}`);
  }

  registrar(operacion, a, b, resultado) {
    const entrada = `${a} ${operacion} ${b} = ${resultado}`;
    this.historial.push(entrada);
    return resultado;
  }

  sumar(a, b) {
    return this.registrar("+", a, b, a + b);
  }

  restar(a, b) {
    return this.registrar("-", a, b, a - b);
  }

  multiplicar(a, b) {
    return this.registrar("*", a, b, a * b);
  }

  dividir(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return this.registrar("/", a, b, a / b);
  }

  potencia(base, exponente) {
    return this.registrar("**", base, exponente, base ** exponente);
  }

  modulo(a, b) {
    if (b === 0) {
      throw new Error("No se puede calcular el módulo entre cero");
    }
    return this.registrar("%", a, b, a % b);
  }

  obtenerHistorial() {
    return [...this.historial];
  }
}

module.exports = {
  Calculadora,
};
