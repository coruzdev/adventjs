/* 
  🎄 Luces en línea con diagonales

  Nivel: MEDIO

  Instrucciones:
    El panel de luces navideñas 🎄✨ del taller ha sido un éxito total. Pero los elfos quieren ir un paso más allá: ahora quieren detectar si hay una línea de 4 luces del mismo color también en diagonal.

    El panel sigue siendo una matriz donde cada celda puede ser:

      - '.' → luz apagada
      - 'R' → luz roja
      - 'G' → luz verde

    Ahora tu función debe devolver true si existe una línea de 4 luces del mismo color encendidas y alineadas, ya sea horizontal ↔, vertical ↕ o diagonal ↘↙.

    Nota: El panel puede ser de cualquier tamaño.
*/

/* ---------- SOLUCIÓN ---------- */

function hasFourInARow(board) {
  // Obtengo el número total de filas y columnas del panel.
  const rows = board.length;
  const cols = board[0].length;

  // Recorro cada fila del panel.
  for (let row = 0; row < rows; row++) {
    // Recorro cada columna de la fila actual.
    for (let col = 0; col < cols; col++) {
      // Obtengo el valor de la luz actual.
      const currentLight = board[row][col];
      // Si la luz está apagada ".", saltamos a la siguiente.
      if (currentLight === ".") continue;

      // Defino las 4 direcciones posibles para buscar una línea de 4:
      // [0, 1] ↔️, [1, 0] ↕️, [1, 1] ↘️, [1, -1] ↙️.
      const directions = [
        [0, 1],
        [1, 0],
        [1, 1],
        [1, -1],
      ];

      // Para cada dirección, cuento cuántos elementos iguales hay en línea.
      for (const [dirRow, dirCol] of directions) {
        let count = 1; // La celda actual ya cuenta como el primer elemento.

        // Busco los siguientes 3 elementos en la dirección actual.
        for (let i = 1; i < 4; i++) {
          const newRow = row + dirRow * i;
          const newCol = col + dirCol * i;

          // Verifico que la nueva posición esté dentro de los límites del panel y que el contenido sea igual al de la luz inicial.
          if (
            newRow >= 0 &&
            newRow < rows &&
            newCol >= 0 &&
            newCol < cols &&
            board[newRow][newCol] === currentLight
          ) {
            count++;
          } else {
            // Si la secuencia se rompe o sale del panel, dejo de buscar en esta dirección.
            break;
          }
        }

        // Si logro contar 4 elementos seguidos termina la búsqueda exitosamente.
        if (count === 4) return true;
      }
    }
  }

  // Si termino de recorrer todo el panel y no hay ninguna línea de 4, la búsqueda falla.
  return false;
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const test1 = hasFourInARow([
  ["R", ".", ".", "."],
  [".", "R", ".", "."],
  [".", ".", "R", "."],
  [".", ".", ".", "R"],
]);
console.log(test1);
// true

const test2 = hasFourInARow([
  [".", ".", ".", "G"],
  [".", ".", "G", "."],
  [".", "G", ".", "."],
  ["G", ".", ".", "."],
]);
console.log(test2);
// true

const test3 = hasFourInARow([
  ["R", "R", "R", "R"],
  ["G", "G", ".", "."],
  [".", ".", ".", "."],
  [".", ".", ".", "."],
]);
console.log(test3);
// true

const test4 = hasFourInARow([
  ["R", "G", "R"],
  ["G", "R", "G"],
  ["G", "R", "G"],
]);
console.log(test4);
// false

/* -------------------------------------- */
