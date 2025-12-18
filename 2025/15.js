/* 
  ✏️ Dibujando tablas

  Nivel: MEDIO

  Instrucciones:
    Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

    Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

    La tabla dibujada debe tener:

      - Cabecera con letras de columna (A, B, C…).
      - El contenido de la tabla son los valores de los objetos.
      - Los valores deben estar alineados a la izquierda.
      - Los campos dejan siempre un espacio a la izquierda.
      - Los campos dejan a la derecha el espacio necesario para alinear la caja.
    
    La función recibe un segundo parámetro sortBy que indica el nombre del campo por el que se deben ordenar las filas. El orden será alfabético ascendente si los valores son strings y numérico ascendente si son números.
*/

/* ---------- SOLUCIÓN ---------- */

function drawTable(data, sortBy) {
  // Ordeno el array de objetos de acuerdo al valor de la propiedad sortBy.
  data.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  // Creo un objeto para almacenar el ancho necesario para cada columna.
  const sizes = {};

  // Obtengo el ancho necesario para cada columna.
  data.forEach((row) => {
    // Itero por sus pares clave/valor.
    Object.entries(row).forEach(([key, value]) => {
      // El ancho será el largo del valor actual + 2 (espacios en blanco al inicio y al final), o el máximo previo encontrado.
      sizes[key] = Math.max(String(value).length + 2, sizes[key] ?? 0);
    });
  });

  // Obtengo la referencia a los anchos calculados y las llaves de las columnas.
  const columnWidths = Object.values(sizes);
  const columnKeys = Object.keys(sizes);

  // Construyo la línea divisoria horizontal (+---+---+) usando los anchos de cada columna.
  const separator =
    "+" + columnWidths.map((s) => "".padEnd(s, "-")).join("+") + "+";

  // Obtengo el código ASCII de la letra 'A' para generar cabeceras automáticas (A, B, C...).
  const headerStart = "A".charCodeAt(0);

  // Genero la fila de encabezado utilizando letras secuenciales (con código ASCII) dentro de los márgenes de cada columna.
  const headers =
    "|" +
    columnWidths
      .map((s, i) => ` ${String.fromCharCode(headerStart + i)}`.padEnd(s, " "))
      .join("|") +
    "|";

  // Genero el cuerpo de la tabla mapeando cada objeto de data a una cadena de texto formateada, con la llave y los espacios para alinear todas las celdas de la columna.
  const dataRows = data
    .map(
      (row) =>
        "|" +
        columnKeys.map((key) => ` ${row[key]}`.padEnd(sizes[key])).join("|") +
        "|"
    )
    .join("\n");

  // Uno todas las piezas con saltos de línea para retornar la tabla completa como un único string.
  return [separator, headers, separator, dataRows, separator].join("\n");
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const table1 = drawTable(
  [
    { name: "Charlie", city: "New York" },
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
  ],
  "name"
);
console.log(table1);
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

const table2 = drawTable(
  [
    { gift: "Book", quantity: 5 },
    { gift: "Music CD", quantity: 1 },
    { gift: "Doll", quantity: 10 },
  ],
  "quantity"
);
console.log(table2);
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+

/* -------------------------------------- */
