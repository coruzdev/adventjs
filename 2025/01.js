/* 
  🎁 Filtrar los regalos defectuosos
  
  Nivel: FÁCIL

  Instrucciones:
    Santa ha recibido una lista de regalos, pero algunos están defectuosos. Un regalo es defectuoso si su nombre contiene el carácter #.

    Ayuda a Santa escribiendo una función que reciba una lista de nombres de regalos y devuelva una nueva lista que solo contenga los regalos sin defectos.
*/

/* ---------- SOLUCIÓN ---------- */

function filterGifts(gifts) {
  // Utilizo el método 'filter' para crear un nuevo array que solo contenga los regalos que no incluyan el carácter '#'.
  return gifts.filter((gift) => !gift.includes("#"));
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const filteredGifts1 = filterGifts(["car", "doll#arm", "ball", "#train"]);
console.log(filteredGifts1);
// ['car', 'ball']

const filteredGifts2 = filterGifts(["#broken", "#rusty"]);
console.log(filteredGifts2);
// []

const filteredGifts3 = filterGifts([]);
console.log(filteredGifts3);
// []

/* -------------------------------------- */
