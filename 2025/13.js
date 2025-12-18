/* 
  🏭 La cadena de montaje

  Nivel: MEDIO

  Instrucciones:
    Simula el recorrido de un regalo dentro de una fábrica y devuelve cómo termina. Para ello debes crear una función runFactory(factory).

    factory es un string[] donde cada celda puede ser:

      - > < ^ v movimientos
      - . salida correcta

    Ten en cuenta que todas las filas tienen la misma longitud y que no habrá otros símbolos.

    El regalo siempre empieza en la posición (0,0) (arriba a la izquierda). En cada paso lee la celda actual y se mueve según la dirección. Si llega a una celda con un punto (.) significa que ha salido correctamente de la fábrica.

    Resultado

    Devuelve uno de estos valores:

      - 'completed' si llega a un .
      - 'loop' si visita una posición dos veces
      - 'broken' si sale fuera del tablero
*/

/* ---------- SOLUCIÓN ---------- */

function runFactory(factory) {
  // Mapeo cada carácter a la acción correspondiente.
  const ACTIONS = {
    ">": () => position.col++, // Mover a la derecha.
    "<": () => position.col--, // Mover a la izquierda.
    "^": () => position.row--, // Mover hacia arriba.
    v: () => position.row++, // Mover hacia abajo.
  };

  // Posición inicial del regalo.
  let position = { row: 0, col: 0 };

  let positions = new Set();

  // Obtengo el símbolo en la posición inicial.
  let current = factory[position.row][position.col];

  // Sigo los movimientos hasta que llegue a la salida ('.').
  while (current !== ".") {
    // Genero una clave única para la posición actual combinando fila y columna.
    const currentPosition = position.row.toString() + position.col.toString();

    // Si la clave ya existe en el Set, significa que el regalo entró en un bucle infinito.
    if (positions.has(currentPosition)) return "loop";

    // Registro la posición actual como visitada en el Set.
    positions.add(currentPosition);
    // Ejecuto la acción de movimiento correspondiente al símbolo actual.
    ACTIONS[current]();

    // Actualizo el símbolo actual con la nueva posición.
    current = factory[position.row]?.[position.col];

    // Si salgo de los límites del tablero (es decir, current es undefined) no puedo continuar.
    if (!current) return "broken";
  }

  // Si el bucle termina porque encontramos la salida '.', el proceso se completó con éxito.
  return "completed";
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const result1 = runFactory([">>."]);
console.log(result1);
// 'completed'

const result2 = runFactory([">>>"]);
console.log(result2);
// 'broken'

const result3 = runFactory([">><"]);
console.log(result3);
// 'loop'

const result4 = runFactory([">>v", "..<"]);
console.log(result4);
// 'completed'

const result5 = runFactory([">>v", "<<<"]);
console.log(result5);
// 'broken'

const result6 = runFactory([">v.", "^.."]);
console.log(result6);
// 'completed'

const result7 = runFactory(["v.", "^."]);
console.log(result7);
// 'loop'

/* -------------------------------------- */
