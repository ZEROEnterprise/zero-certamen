import { validSequences } from "./index.js";

const testCases = [
  { input: [2, 1, 2], expected: 0 }, // repetido → no válido
  { input: [1], expected: 0 }, // solo un elemento → no válido
  { input: [4, 5, 6], expected: 1 }, // válido
  { input: [1, 3, 4, 12], expected: 0 },
  { input: [6, 7, 8, 9], expected: 1 }, // válido
  { input: [5, 6, 7], expected: 1 }, // válido
  { input: [9, 10, 11, 12], expected: 1 },
  { input: [7, 9, 11], expected: 0 },
  { input: [1, 3, 4, 7], expected: 0 },
];

function measureExecutionTime(fn, input) {
  const start = performance.now();
  const result = fn(input);
  const end = performance.now();
  return { result, time: end - start };
}

let totalTime = 0;

console.log("===== Test de validSequences =====");
testCases.forEach(({ input, expected }, index) => {
  const { result, time } = measureExecutionTime(validSequences, input);
  const passed = result === expected ? "✅ PASA" : "❌ FALLA";
  console.log(
    `Test ${index}: input=${JSON.stringify(input)} | esperado=${expected} | obtenido=${result} | tiempo=${time.toFixed(3)}ms → ${passed}`
  );
  totalTime += time;
});

console.log(`\nTiempo total transcurrido: ${totalTime.toFixed(3)}ms`);
