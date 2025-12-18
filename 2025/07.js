/* 
  🎄 Montando el árbol

  Nivel: MEDIO

  Instrucciones:
    ¡Es hora de decorar el árbol de Navidad 🎄! Escribe una función que reciba:

      - height → la altura del árbol (número de filas).
      - ornament → el carácter del adorno (por ejemplo, "o" o "@").
      - frequency → cada cuántas posiciones de asterisco aparece el adorno.

    El árbol se dibuja con asteriscos *, pero cada frequency posiciones, el asterisco se reemplaza por el adorno.

    El conteo de posiciones empieza en 1, desde la copa hasta la base, de izquierda a derecha. Si frequency es 2, los adornos aparecen en las posiciones 2, 4, 6, etc.

    El árbol debe estar centrado y tener un tronco # de una línea al final. Cuidado con los espacios en blanco, nunca hay al final de cada línea.
*/

/* ---------- SOLUCIÓN ---------- */

function drawTree(height, ornament, frequency) {
  let tree = "";
  let counter = 1;

  // Recorro cada nivel del árbol hasta la altura definida.
  for (let row = 1; row <= height; row++) {
    // Añado al inicio de cada fila los espacios en blanco necesarios para darle forma al árbol.
    tree += " ".repeat(height - row);

    // Recorro cada fila del árbol para dibujar los caracteres de la fila actual.
    for (let col = 1; col <= 2 * row - 1; col++) {
      // Verifico si el residuo de la división entre el contador y la frecuencia es 0.
      // Si el residuo es 0, pongo un adorno, si no, pongo un asterisco.
      tree += counter % frequency === 0 ? ornament : "*";
      // Incremento el contador para la siguiente posición.
      counter++;
    }
    // Añado un salto de línea al final de cada fila.
    tree += "\n";
  }

  // Añado los espacios necesarios para alinear el tronco debajo de la punta del árbol.
  tree += " ".repeat(height - 1) + "#";

  return tree;
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const tree1 = drawTree(5, "o", 2);
console.log(tree1);
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

const tree2 = drawTree(3, "@", 3);
console.log(tree2);
//   *
//  *@*
// *@**@
//   #

const tree3 = drawTree(4, "+", 1);
console.log(tree3);
//    +
//   +++
//  +++++
// +++++++
//    #

/* -------------------------------------- */
