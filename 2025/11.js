/* 
  📹 Regalos sin vigilancia

  Nivel: FÁCIL

  Instrucciones:
    El grinch quiere robar los regalos de Navidad del almacén. Para ello necesita saber qué regalos no tienen vigilancia.

    El almacén se representa como un array de strings (string[]), donde cada regalo (*) está protegido si su posición está junto a una cámara (#). Cada espacio vacío se representa con un punto (.).

    Tu tarea es contar cuántos regalos están sin vigilancia, es decir, que no tienen ninguna cámara adyacente (arriba, abajo, izquierda o derecha).

    Ten en cuenta: solo se considera como "adyacente" las 4 direcciones cardinales, no en diagonal.

    Los regalos en las esquinas o bordes pueden estar sin vigilancia, siempre que no tengan cámaras directamente al lado.
*/

/* ---------- SOLUCIÓN ---------- */

function findUnsafeGifts(warehouse) {
  let unsafeGifts = 0;

  // Recorro cada línea (fila) del almacén.
  warehouse.forEach((line, row) => {
    // Recorro cada columna (carácter) de la línea actual.
    for (let col = 0; col < line.length; col++) {
      // Si el carácter actual no es un regalo '*', salto a la siguiente posición.
      if (line[col] !== "*") continue;

      // Un regalo se considera seguro si tiene al menos una cámara '#' junto a él, sin considerar las esquinas.
      const isSafe =
        warehouse[row - 1]?.[col] === "#" || // Cámara en la fila superior.
        warehouse[row + 1]?.[col] === "#" || // Cámara en la fila inferior.
        line[col - 1] === "#" || // Cámara a la izquierda.
        line[col + 1] === "#"; // Cámara a la derecha.

      // Si ninguna de las condiciones anteriores se cumple, el regalo está sin vigilancia.
      if (!isSafe) unsafeGifts++;
    }
  });

  return unsafeGifts;
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const unsafeGifts1 = findUnsafeGifts([".*.", "*#*", ".*."]);
console.log(unsafeGifts1);
// 0

const unsafeGifts2 = findUnsafeGifts(["...", ".*.", "..."]);
console.log(unsafeGifts2);
// 1

const unsafeGifts3 = findUnsafeGifts(["*.*", "...", "*#*"]);
console.log(unsafeGifts3);
// 2

const unsafeGifts4 = findUnsafeGifts([
  ".....",
  ".*.*.",
  "..#..",
  ".*.*.",
  ".....",
]);
console.log(unsafeGifts4);
// 4

/* -------------------------------------- */
