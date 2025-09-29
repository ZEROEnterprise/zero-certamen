# 🚀 Reto 2: Gestión de pedidos

## 🎯 Objetivo

Procesar una lista de pedidos y **aprobar la mayor cantidad posible** de ellos, respetando las reglas de negocio de la empresa.

---

## 📜 Reglas de negocio

1. Cada **pedido** tiene:
   - Un cliente (con límite de crédito disponible).
   - Una lista de productos con sus cantidades.

2. La empresa debe validar:
   - Que el cliente tenga **crédito suficiente** para cubrir el pedido.
   - Que los productos solicitados tengan **stock disponible**.

3. El pedido solo puede ser **aprobado** si cumple ambas condiciones.  
   Si no, será **rechazado**.

---

## 📂 Archivos

- `pedidos.json` → contiene la lista de pedidos inicial.
- `index.js` → archivo donde deberás implementar la lógica en la función `procesarPedidos`.

---

## 📌 Tu tarea

Completar la función:

✅ Ejemplo esperado (salida)
⏱️ Tiempo de procesamiento: 3.421ms
✅ Aprobados: 12
❌ Rechazados: 8
