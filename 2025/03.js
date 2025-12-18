/* 
  👶 Ayuda al becario

  Nivel: FÁCIL

  Instrucciones:
    En el taller de Santa hay un elfo becario que está aprendiendo a envolver regalos 🎁.

    Le han pedido que envuelva cajas usando solo texto… y lo hace más o menos bien.

    Le pasan dos parámetros:

      - size: el tamaño del regalo cuadrado
      - symbol: el carácter que el elfo usa para hacer el borde (cuando no se equivoca 😅)

    El regalo debe cumplir:

      - Debe ser un cuadrado de size x size.
      - El interior siempre está vacío (lleno de espacios), porque el elfo "aún no sabe dibujar el relleno".
      - Si size < 2, devuelve una cadena vacía: el elfo lo intentó, pero se le perdió el regalo.
      - El resultado final debe ser un string con saltos de línea \n.
    
    Sí, es un reto fácil… pero no queremos que despidan al becario. ¿Verdad?
*/

/* ---------- SOLUCIÓN ---------- */

function drawGift(size, symbol) {
  // Si el tamaño es menor a 2, no se puede formar el regalo, por lo que devuelvo un string vacío.
  if (size < 2) return "";

  let gift = "";

  // Recorro cada fila del regalo según el tamaño proporcionado.
  for (let i = 0; i < size; i++) {
    // Creo la fila actual del regalo.
    gift +=
      i === 0 || i === size - 1
        ? // Si es la primera o la última fila la relleno repitiendo el símbolo hasta completar el tamaño.
          "".padEnd(size, symbol) + "\n"
        : // Para las filas intermedias inicio con el símbolo, relleno con espacios hasta el penúltimo espacio y cierr con el símbolo.
          symbol.padEnd(size - 1) + symbol + "\n";
  }

  // Devuelvo el resultado eliminando el último salto de línea.
  return gift.trim();
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const gift1 = drawGift(4, "*");
console.log(gift1);
/*
 ****
 *  *
 *  *
 ****
 */

const gift2 = drawGift(3, "#");
console.log(gift2);
/*
###
# #
###
*/

const gift3 = drawGift(2, "-");
console.log(gift3);
/*
--
--
*/

const gift4 = drawGift(1, "+");
console.log(gift4);
// ""

/* -------------------------------------- */
