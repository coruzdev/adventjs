/* 
  🎁 Encuentra el juguete único

  Nivel: FÁCIL

  Instrucciones:
    Santa 🎅 quiere saber cuál es la primera letra no repetida en el nombre de un juguete 🎁.

    Escribe una función que reciba un string y devuelva la primera letra que no se repite, ignorando mayúsculas y minúsculas al contar, pero devolviendo la letra tal como aparece en el string.

    Si no hay ninguna, devuelve una cadena vacía ("").
*/

/* ---------- SOLUCIÓN ---------- */

function findUniqueToy(toy) {
  let letter = "";
  let toyMap = new Map();

  // Recorro el string para mapear las veces que aparece cada letra
  for (let i = 0; i < toy.length; i++) {
    // Convierto la letra actual a minúsculas para que la búsqueda no distinga entre mayúsculas y minúsculas.
    const letterFormatted = toy[i].toLowerCase();
    // Si la letra no está en el mapa, la inicializo con un contador de 1.
    if (!toyMap.get(letterFormatted)) toyMap.set(letterFormatted, 1);
    // Si ya existe, incremento su valor actual en 1.
    else toyMap.set(letterFormatted, toyMap.get(letterFormatted) + 1);
  }

  // Recorro el string para identificar cuál es el primer carácter único.
  for (let i = 0; i < toy.length; i++) {
    // Consulto en el mapa la cantidad de veces que aparece la letra actual.
    if (toyMap.get(toy[i].toLowerCase()) === 1) {
      // Si la cantidad es exactamente 1, lo guardo y salgo del bucle.
      letter = toy[i];
      break;
    }
  }

  return letter;
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const letter1 = findUniqueToy("Gift");
console.log(letter1);
// 'G'

const letter2 = findUniqueToy("sS");
console.log(letter2);
// ''

const letter3 = findUniqueToy("reindeeR");
console.log(letter3);
// 'i'

const letter4 = findUniqueToy("AaBbCc");
console.log(letter4);
// ''

const letter5 = findUniqueToy("abcDEF");
console.log(letter5);
// 'a'

const letter6 = findUniqueToy("aAaAaAF");
console.log(letter6);
// 'F'

const letter7 = findUniqueToy("sTreSS");
console.log(letter7);
// 'T'

const letter8 = findUniqueToy("z");
console.log(letter8);
// 'z'

/* -------------------------------------- */
