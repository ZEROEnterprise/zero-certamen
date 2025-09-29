import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { procesarPedidos } from "./index.js"; // asegúrate que exportes procesarPedidos en index.js

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pedidosPath = path.join(__dirname, "pedidos.json");

const data = fs.readFileSync(pedidosPath, "utf-8");
const { clientes, productos, pedidos } = JSON.parse(data);

// Medidor de tiempo
function measureExecutionTime(fn, input) {
  const start = performance.now();
  const result = fn(input, clientes, productos);
  const end = performance.now();
  return { result, time: (end - start).toFixed(3) };
}

console.log("===== Test de procesarPedidos =====");
const { result, time } = measureExecutionTime(procesarPedidos, pedidos);

console.log(`✅ Aprobados: ${result.aprobados.length}`);
console.log(`❌ Rechazados: ${result.rechazados.length}`);
console.log(`⏱️ Tiempo total: ${time}ms`);


