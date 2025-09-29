# 🐦 Reto 1: Desfile de los Pájaros Cantores

En una competencia anual de aves, los pájaros cantores desfilan uno tras otro.
Cada pájaro canta una nota representada por un **número entero**.

El jurado solo se interesa en las **secuencias consecutivas** en las que:

1. Las notas **no se repiten**.
2. La secuencia contiene **todos los enteros entre el mínimo y el máximo** de esa subsecuencia, sin que falte ninguno.
3. La secuencia tiene al menos **2 pájaros**.

   👉 Tu tarea es implementar una función que **cuente cuántas subsecuencias consecutivas válidas existen** en el desfile.
   No se puede usar el metodo sort de javascript.

---

## ✨ Ejemplo

### Entrada:

```js
notas = [1, 2, 3];
```

### Secuencias posibles:

- `[1, 2]` ✅ (válida: contiene 1 y 2, sin repetidos, cubre rango min=1, max=2)
- `[2, 3]` ✅
- `[1, 2, 3]` ✅
- `[1, 3]` ❌ (no consecutiva en rango: falta el 2)
- `[1, 3, 3]` ❌ (no valida: se repite el 3)

---

## 🎯 Desafío adicional

- Intenta resolverlo en **O(n²)** primero para entender la lógica.
- Luego piensa en cómo optimizarlo para mejorar el performance.

---
