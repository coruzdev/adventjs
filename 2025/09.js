/* 
  🦌 El reno robot aspirador

  Nivel: DIFÍCIL

  Instrucciones:
    Los elfos han construido un reno 🦌 robot aspirador (@) para limpiar un poco el taller de cara a las navidades.

    El reno se mueve sobre un tablero para recoger cosas del suelo (*) y debe evitar obstáculos (#).

    Recibirás dos parámetros:

      - board: un string que representa el tablero.
      - moves: un string con los movimientos: 'L' (izquierda), 'R' (derecha), 'U' (arriba), 'D' (abajo).

    Reglas del movimiento:

      - Si el reno recoge algo del suelo (*) durante los movimientos → devuelve 'success'.
      - Si el reno se sale del tablero o choca contra un obstáculo (#) → devuelve 'crash'.
      - Si el reno no recoge nada ni se estrella → devuelve 'fail'.
    
    Ten en cuenta que si el reno recoge algo del suelo, ya es 'success', indepentientemente de si en movimientos posteriores se chocase con un obstáculo o saliese del tabler.

    Importante: Ten en cuenta que en el board la primera y última línea están en blanco y deben descartarse.
*/

/* ---------- SOLUCIÓN ---------- */

function moveReno(board, moves) {
  // Mapeo los caracteres de movimiento a su acción correspondiente para modificar las coordenadas del robot.
  const ACTIONS = {
    L: (bot) => bot.x--, // Movimiento a la izquierda (restar en eje X).
    R: (bot) => bot.x++, // Movimiento a la derecha (sumar en eje X).
    U: (bot) => bot.y--, // Movimiento hacia arriba (restar en eje Y).
    D: (bot) => bot.y++, // Movimiento hacia abajo (sumar en eje Y).
  };

  // Convierto el tablero en un array de líneas, eliminando espacios innecesarios.
  const lines = board.trim().split("\n");

  // Localizo la fila (y) donde se encuentra el robot representado por '@'.
  const y = lines.findIndex((line) => line.includes("@"));

  // Creo un objeto para rastrear la posición actual del robot en el plano.
  const botPosition = {
    y,
    x: lines[y].search("@"), // Buscamos la columna (x) del robot.
  };

  // Defino los límites del tablero.
  const limits = {
    y: lines.length - 1,
    x: lines[0].length - 1,
  };

  // Itero sobre cada carácter de movimiento.
  for (let move of moves) {
    // Ejecuto la acción de movimiento sobre la posición actual del bot.
    ACTIONS[move](botPosition);

    // Obtengo el elemento presente en la nueva posición (uso optional chaining para los casos en que sale del tablero).
    const element = lines[botPosition.y]?.[botPosition.x];

    // Si la posición es indefinida (fuera del tablero) o hay un obstáculo '#', el reno choca.
    if (!element || element === "#") return "crash";

    // Si el reno llega a la posición del regalo '*', la misión es un éxito.
    if (element === "*") return "success";
  }

  // Si se terminan los movimientos y no se ha chocado ni llegado al objetivo, la misión falló.
  return "fail";
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const board = `
.....
.*#.*
.@...
.....
`;

const result1 = moveReno(board, "D");
console.log(result1);
// ➞ 'fail'

const result2 = moveReno(board, "U");
console.log(result2);
// ➞ 'success'

const result3 = moveReno(board, "RU");
console.log(result3);
// ➞ 'crash'

const result4 = moveReno(board, "RRRUU");
console.log(result4);
// ➞ 'success'

const result5 = moveReno(board, "DD");
console.log(result5);
// ➞ 'crash'

const result6 = moveReno(board, "UUU");
console.log(result6);
// ➞ 'success'

const result7 = moveReno(board, "RR");
console.log(result7);
// ➞ 'fail'

/* -------------------------------------- */
