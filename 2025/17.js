/* 
  🎄 El panel de luces navideñas

  Nivel: FÁCIL

  Instrucciones:
    En el Polo Norte han montado un panel de luces navideñas 🎄✨ para decorar el taller. Cada luz puede estar encendida con un color o apagada.

    El panel se representa como una matriz donde cada celda puede ser:

      - '.' → luz apagada
      - 'R' → luz roja
      - 'G' → luz verde
    
    Los elfos quieren saber si en el panel existe una línea de 4 luces del mismo color encendidas y alineadas (solo horizontal ↔ o vertical ↕). Las luces apagadas ('.') no cuentan.

    Nota: El tablero puede ser de cualquier tamaño. No hay diagonales.
*/

/* ---------- SOLUCIÓN ---------- */

function hasFourLights(board) {
  // Función interna para verificar si un string contiene cuatro luces consecutivas del mismo color.
  function check(current) {
    // Compruebo si existen cuatro 'R' (Rojo) o cuatro 'G' (Verde) seguidas.
    const condition = current.includes("RRRR") || current.includes("GGGG");
    // Si se cumple la condición, devuelvo verdadero.
    if (condition) return true;
    return false;
  }

  // Convierto cada fila del tablero en un string para facilitar la búsqueda.
  const originalBoard = board.map((row) => row.join(""));

  // Creo una versión transpuesta del tablero (convertimos las columnas en filas).
  // Esto me permite reutilizar la lógica de búsqueda horizontal para verificar las verticales.
  const boardTransposed = board[0]
    .map((col, i) => board.map((row) => row[i])) // Agrupo los elementos de la misma columna 'i'.
    .map((row) => row.join("")); // Convierto cada nueva fila transpuesta en un string.

  // Recorro las filas del tablero original para buscar combinaciones horizontales de cuatro luces.
  for (let i = 0; i < originalBoard.length; i++)
    if (check(originalBoard[i])) return true;

  // Recorro las filas del tablero transpuesto para buscar combinaciones verticales de cuatro luces.
  for (let i = 0; i < boardTransposed.length; i++)
    if (check(boardTransposed[i])) return true;

  // Si después de revisar todas las filas y columnas no se encontró ninguna combinación, devuelvo falso.
  return false;
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const test1 = hasFourLights([
  [".", ".", ".", ".", "."],
  ["R", "R", "R", "R", "."],
  ["G", "G", ".", ".", "."],
]);
console.log(test1);
// true

const test2 = hasFourLights([
  [".", "G", ".", "."],
  [".", "G", ".", "."],
  [".", "G", ".", "."],
  [".", "G", ".", "."],
]);
console.log(test2);
// true

const test3 = hasFourLights([
  ["R", "G", "R"],
  ["G", "R", "G"],
  ["G", "R", "G"],
]);
console.log(test3);
// false

/* -------------------------------------- */
