/* 
  🧤 Emparejando guantes

  Nivel: FÁCIL

  Instrucciones:
    En el taller de Santa, los elfos han encontrado una montaña de guantes mágicos totalmente desordenados. Cada guante viene descrito por dos valores:

      - hand: indica si es un guante izquierdo (L) o derecho (R)
      - color: el color del guante (string)
        
    Tu tarea es ayudarles a emparejar guantes: Un par válido es un guante izquierdo y uno derecho del mismo color.

    Debes devolver una lista con los colores de todos los pares encontrados. Ten en cuenta que puede haber varios pares del mismo color. El orden se determina por el que se pueda hacer primero el par.
*/

/* ---------- SOLUCIÓN ---------- */

function matchGloves(gloves) {
  let pairs = [];
  let inventory = new Map();

  // Itero a través de cada objeto del array 'gloves' usando desestructuración para obtener 'hand' y 'color'.
  for (const { hand, color } of gloves) {
    // Si el color no existe en el inventario, lo inicializo con contadores en cero para ambas manos.
    if (!inventory.has(color)) inventory.set(color, { L: 0, R: 0 });

    // Obtengo la referencia del objeto de conteo para el color actual.
    const counts = inventory.get(color);
    // Incremento el contador de la mano correspondiente.
    counts[hand]++;

    // Verifico si hay al menos un guante de cada mano para el color actual.
    if (counts["L"] !== 0 && counts["R"] !== 0) {
      // Si hay un par, añado el color al array de pares.
      pairs.push(color);
      // Resto un guante de cada mano del inventario para marcar que ese par ya fue contado.
      counts["L"]--;
      counts["R"]--;
    }
  }

  return pairs;
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const pairs1 = matchGloves([
  { hand: "L", color: "red" },
  { hand: "R", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
  { hand: "L", color: "green" },
]);
console.log(pairs1);
// ["red", "green"]

const pairs2 = matchGloves([
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
]);
console.log(pairs2);
// ["gold", "gold"]

const pairs3 = matchGloves([
  { hand: "L", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
]);
console.log(pairs3);
// []

const pairs4 = matchGloves([
  { hand: "L", color: "green" },
  { hand: "L", color: "red" },
  { hand: "R", color: "red" },
  { hand: "R", color: "green" },
]);
console.log(pairs4);
// ['red', 'green']

/* -------------------------------------- */
