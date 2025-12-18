/* 
  🧮 Descifra el PIN de Santa

  Nivel: MEDIO

  Instrucciones:
    Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. El PIN tiene 4 dígitos, y está escondido dentro de bloques como estos:

      [1++][2-][3+][<]

    Escribe una función que descifre el PIN a partir del código.

    El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.

    Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

    Las operaciones se aplican en orden al número y son:

      - + suma 1
      - - resta 1

    El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.

    También existe el bloque especial [<], que repite el dígito del bloque anterior.

    Si al final hay menos de 4 dígitos, se debe devolver null.
*/

/* ---------- SOLUCIÓN ---------- */

function decodeSantaPin(code) {
  let pin = "";
  let current = 0;

  // Objeto que mapea los caracteres no numéricos del código a sus acciones correspondientes.
  const ACTIONS = {
    // Asigno 0 al valor actual al inicio de cada bloque.
    "[": () => (current = 0),
    // Incremento el valor actual en 1, usando módulo 10 para que después de 9 vuelva a 0.
    "+": () => (current = (current + 1) % 10),
    // Decremento el valor actual en 1, usando módulo 10 para que después de 0 vuelva a 9.
    "-": () => (current = (current - 1 + 10) % 10),
    // Igualo el valor actual al último dígito que se añadió al PIN.
    "<": () => (current = +pin.slice(-1)),
    // Añado el valor actual al final del PIN que estamos construyendo.
    "]": () => (pin += current),
  };

  // Recorro cada carácter del código de entrada.
  for (const char of code) {
    // Convierto el carácter actual en un número entero, los caracteres no numéricos son NaN.
    const value = parseInt(char);
    // Si el carácter es un número, lo asigno como el valor actual.
    if (!isNaN(value)) current = value;
    // Si no es un número, ejecuto la acción correspondiente definida en el objeto ACTIONS.
    else ACTIONS[char]();
  }

  // Si el PIN tiene exactamente 4 dígitos lo devuelvo; de lo contrario, devuelvo null por ser inválido.
  return pin.length === 4 ? pin : null;
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const pin1 = decodeSantaPin("[1++][2-][3+][<]");
console.log(pin1);
// "3144"

const pin2 = decodeSantaPin("[9+][0-][4][<]");
console.log(pin2);
// "0944"

const pin3 = decodeSantaPin("[1+][2-]");
console.log(pin3);
// null 

/* -------------------------------------- */
