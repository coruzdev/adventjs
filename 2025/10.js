/* 
  📨 Profundidad de la magia navideña

  Nivel: FÁCIL

  Instrucciones:
    🎄 Profundidad de Magia Navideña
    En el Polo Norte, Santa Claus está revisando las cartas mágicas 📩✨ que recibe de los niños de todo el mundo. Estas cartas usan un antiguo lenguaje navideño en el que los corchetes [ y ] representan la intensidad del deseo.

    Cuanto más profunda sea la anidación de los corchetes, más fuerte es el deseo. Tu misión es averiguar la máxima profundidad en la que se anidan los [].

    Pero ¡cuidado! Algunas cartas pueden estar mal escritas. Si los corchetes no están correctamente balanceados (si se cierra antes de abrir, sobran cierres o faltan cierres), la carta es inválida y debes devolver -1.
*/

/* ---------- SOLUCIÓN ---------- */

function maxDepth(s) {
  let current = 0;
  let max = 0;

  // Recorro cada carácter del string de entrada.
  for (const char of s) {
    if (char === "[") {
      // Si el carácter es un corchete de apertura incremento la profundidad actual.
      current++;
      // Y actualizo 'max' si la profundidad actual supera el máximo registrado hasta ahora.
      max = Math.max(current, max);
    } else {
      // Si el carácter es de cierre, decremento la profundidad actual.
      current--;
      // Si la profundidad cae por debajo de 0, significa que hay un corchete de cierre sin apertura previa.
      if (current < 0) return -1;
    }
  }

  // Al finalizar, si 'current' es 0, los corchetes están balanceados y devuelvo el máximo.
  // De lo contrario (si quedaron corchetes abiertos), devuelvo -1.
  return current === 0 ? max : -1;
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const depth1 = maxDepth("[]");
console.log(depth1);
// -> 1

const depth2 = maxDepth("[[]]");
console.log(depth2);
// -> 2

const depth3 = maxDepth("[][]");
console.log(depth3);
// -> 1

const depth4 = maxDepth("[[][]]");
console.log(depth4);
// -> 2

const depth5 = maxDepth("[[[]]]");
console.log(depth5);
// -> 3

const depth6 = maxDepth("[][[]][]");
console.log(depth6);
// -> 2

const depth7 = maxDepth("][");
console.log(depth7);
// -> -1

const depth8 = maxDepth("[[[");
console.log(depth8);
// -> -1

const depth9 = maxDepth("[]]]");
console.log(depth9);
// -> -1

const depth10 = maxDepth("[][][");
console.log(depth10);
// -> -1

/* -------------------------------------- */
