/* 
  🗃️ Encuentra el camino al regalo

  Nivel: FÁCIL

  Instrucciones:
    En el Polo Norte, los elfos han simplificado su sistema de almacenamiento para evitar errores.
    Ahora guardan los regalos en un objeto mágico con profundidad limitada, donde cada valor aparece una sola vez.

    Santa necesita una forma rápida de saber qué camino de claves debe seguir para encontrar un regalo concreto.

    Tu tarea es escribir una función que, dado un objeto y un valor, devuelva el array de claves que hay que recorrer para llegar a ese valor.

    Reglas:

      - El objeto tiene como máximo 3 niveles de profundidad.
      - El valor a buscar aparece como mucho una vez.
      - El objeto solo contiene otros objetos y valores primitivos (strings, numbers, booleans).
      - Si el valor no existe, devuelve un array vacío.
*/

/* ---------- SOLUCIÓN ---------- */

function findGiftPath(workshop, gift) {
  // Defino una función recursiva que rastrea la ubicación del regalo.
  // 'obj' representa el nivel actual del objeto y 'currentPath' la ruta acumulada como string.
  function search(obj, currentPath) {
    // Itero por cada propiedad (llave y valor) del objeto actual.
    for (const [key, value] of Object.entries(obj)) {
      // Construyo la ruta actual: si ya hay un prefijo, añado un punto y la llave; si no, solo la llave.
      const path = currentPath ? `${currentPath}.${key}` : key;

      // Si el valor actual coincide exactamente con el regalo buscado lo devuelvo convertido en array de niveles.
      if (value === gift) {
        return path.split(".");
      }

      // Si el valor es un objeto válido (no nulo, no array), sigo buscando en el siguiente nivel.
      if (value && typeof value === "object" && !Array.isArray(value)) {
        // Llamada recursiva pasando el sub-objeto y la ruta actualizada hasta ese punto.
        const found = search(value, path);
        // Si la búsqueda en niveles inferiores tuvo éxito, propago el resultado hacia arriba.
        if (found) return found;
      }
    }
    // Si recorro todo el objeto actual sin éxito, devuelvo null.
    return null;
  }

  return search(workshop, "") || [];
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const workshop = {
  storage: {
    shelf: {
      box1: "train",
      box2: "switch",
    },
    box: "car",
  },
  gift: "doll",
};

const route1 = findGiftPath(workshop, "train");
console.log(route1);
// ➜ ['storage', 'shelf', 'box1']

const route2 = findGiftPath(workshop, "switch");
console.log(route2);
// ➜ ['storage', 'shelf', 'box2']

const route3 = findGiftPath(workshop, "car");
console.log(route3);
// ➜ ['storage', 'box']

const route4 = findGiftPath(workshop, "doll");
console.log(route4);
// ➜ ['gift']

const route5 = findGiftPath(workshop, "plane");
console.log(route5);
// ➜ []

/* -------------------------------------- */
