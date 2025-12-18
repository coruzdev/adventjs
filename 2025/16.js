/* 
  🎁 Empaquetando regalos para Santa

  Nivel: FÁCIL

  Instrucciones:
    Santa quiere repartir regalos de la forma más eficiente posible 🎁. Tiene una lista de regalos, cada uno con un peso, y un trineo que solo puede cargar hasta un peso máximo.

    Los regalos se entregan en orden, y Santa no puede cambiar ese orden. Cuando un regalo no cabe en el trineo actual, Santa envía el trineo y prepara uno nuevo.

    Tu tarea es escribir una función que calcule el número mínimo de trineos necesarios para entregar todos los regalos.

    Eso sí, ten en cuenta que a veces hay un regalo que no cabe en el trineo, entonces hay que devolver null porque ese trineo no sirve para ese pack de regalos.
*/

/* ---------- SOLUCIÓN ---------- */

function packGifts(gifts, maxWeight) {
  // Si no hay regalos en la lista, devuelvo 0 trineos necesarios.
  if (gifts.length === 0) return 0;

  // Si encuentro algún regalo que individualmente supera el peso máximo permitido, la operación es imposible y devuelvo null.
  if (gifts.find((gift) => gift > maxWeight) !== undefined) return null;

  let sleighs = 0;
  let acum = 0;

  // Itero por cada regalo para intentar empacarlo secuencialmente.
  gifts.forEach((gift, i) => {
    // Compruebo si el peso acumulado más el regalo actual cabe en el trineo.
    const fits = acum + gift <= maxWeight;

    // Si no cabe, el trineo actual se considera lleno y se envía.
    if (!fits) {
      sleighs++; // Incremento el contador de trineos enviados.
      acum = 0; // Reinicio el acumulador para el nuevo trineo.
    }

    // Añado el peso del regalo actual al trineo (ya sea el anterior con espacio o uno nuevo).
    acum += gift;
  });

  // Al terminar, si queda peso en el acumulador, significa que hay un último trineo en proceso que debe sumarse al total.
  return acum ? sleighs + 1 : sleighs;
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const sleights1 = packGifts([2, 3, 4, 1], 5);
console.log(sleights1);
// 2

const sleights2 = packGifts([3, 3, 2, 1], 3);
console.log(sleights2);
// 3

const sleights3 = packGifts([1, 1, 1, 1], 2);
console.log(sleights3);
// 2

const sleights4 = packGifts([5, 6, 1], 5);
console.log(sleights4);
// null

const sleights5 = packGifts([], 10);
console.log(sleights5);
// 0

/* -------------------------------------- */
