/**
 * ZEDMOUS.DEV — Verificador Automatizado del Laboratorio Git
 * Ejecuta: npm test
 */

const assert = require("assert");
const { sumar, restar, multiplicar, dividir } = require("./app");
const { Calculadora } = require("./clases/calculadora");

console.log("\n[TEST] Verificando integridad del repositorio después de git merge...");

assert.strictEqual(sumar(5, 3), 8, "Error en sumar(5, 3)");
assert.strictEqual(restar(5, 3), 2, "Error en restar(5, 3)");
assert.strictEqual(multiplicar(5, 3), 15, "Error en multiplicar(5, 3)");
assert.strictEqual(dividir(10, 2), 5, "Error en dividir(10, 2)");
assert.throws(() => dividir(5, 0), /No se puede dividir por cero/, "Debe validar división entre cero");

const calc = new Calculadora("TestRunner");
assert.strictEqual(calc.potencia(2, 5), 32, "Error en calc.potencia(2, 5)");
assert.strictEqual(calc.modulo(10, 3), 1, "Error en calc.modulo(10, 3)");
assert.strictEqual(calc.obtenerHistorial().length, 2, "El historial debe registrar 2 operaciones");

console.log("✅ [OK] Todas las pruebas pasaron correctamente. El repositorio está libre de conflictos.");

