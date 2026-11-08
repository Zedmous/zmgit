/**
 * ZEDMOUS.DEV — Laboratorio Práctico de Git y Control de Versiones
 * Archivo principal para prácticas de:
 *   - git status / git status -s
 *   - git add / git commit -m / git commit -a -m
 *   - git branch / git switch / git merge (Fast-Forward y 3-Way Merge)
 *   - Simulación y resolución de conflictos (UU)
 */

const { Calculadora } = require("./clases/calculadora");

console.log("=== ZEDMOUS.DEV | Laboratorio de Control de Versiones con Git ===");

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
  if (b === 0) {
    throw new Error("No se puede dividir por cero");
  }
  return a / b;
};

console.log("Operaciones funcionales básicas:");
console.log(`  Suma (5 + 3):           ${sumar(5, 3)}`);
console.log(`  Resta (5 - 3):          ${restar(5, 3)}`);
console.log(`  Multiplicación (5 * 3): ${multiplicar(5, 3)}`);
console.log(`  División (5 / 3):       ${dividir(5, 3).toFixed(4)}`);

console.log("\nOperaciones orientadas a objetos con clase Calculadora:");
const calc = new Calculadora("Estudiante IUJO");
console.log(`  Potencia (2 ** 8):      ${calc.potencia(2, 8)}`);
console.log(`  Módulo (17 % 5):        ${calc.modulo(17, 5)}`);
console.log("  Historial registrado:", calc.obtenerHistorial());

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
};
