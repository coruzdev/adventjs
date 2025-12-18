/* 
  🏭 Fabrica los juguetes

  Nivel: FÁCIL

  Instrucciones:
    La fábrica de Santa ha empezado a recibir la lista de producción de juguetes.
    Cada línea indica qué juguete hay que fabricar y cuántas unidades.

    Los elfos, como siempre, han metido la pata: han apuntado algunos juguetes con cantidades que no tienen sentido.

    Tienes una lista de objetos con esta forma:
    
      - toy: el nombre del juguete (string)
      - quantity: cuántas unidades hay que fabricar (number)

    Tu tarea es escribir una función que reciba esta lista y devuelva un array de strings con:

    Cada juguete repetido tantas veces como indique quantity
    En el mismo orden en el que aparecen en la lista original
    Ignorando los juguetes con cantidades no válidas (menores o iguales a 0, o que no sean número)
*/

/* ---------- SOLUCIÓN ---------- */

function manufactureGifts(giftsToProduce) {
  let manufacturedGifts = [];

  // Recorro cada regalo dentro del array.
  giftsToProduce.forEach((gift) => {
    // Verifico que la cantidad a fabricar del regalo actual sea mayor que cero.
    if (gift.quantity > 0) {
      // Añado el nombre del regalo tantas veces como indique quantity.
      for (let i = 0; i < gift.quantity; i++) {
        manufacturedGifts.push(gift.toy);
      }
    }
  });

  return manufacturedGifts;
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const manufacturedGifts1 = manufactureGifts([
  { toy: "car", quantity: 3 },
  { toy: "doll", quantity: 1 },
  { toy: "ball", quantity: 2 },
]);
console.log(manufacturedGifts1);
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const manufacturedGifts2 = manufactureGifts([
  { toy: "train", quantity: 0 },
  { toy: "bear", quantity: -2 },
  { toy: "puzzle", quantity: 1 },
]);
console.log(manufacturedGifts2);
// ['puzzle']

const manufacturedGifts3 = manufactureGifts([]);
console.log(manufacturedGifts3);
// []

/* -------------------------------------- */
