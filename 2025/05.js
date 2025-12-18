/* 
  ⏱️ La cuenta atrás para el despegue

  Nivel: FÁCIL

  Instrucciones:
    Los elfos tienen un timestamp secreto: es la fecha y hora exacta en la que Papá Noel despega con el trineo 🛷 para repartir regalos por el mundo. Pero en el Polo Norte usan un formato rarísimo para guardar la hora: YYYY*MM*DD@HH|mm|ss NP (ejemplo: 2025*12*25@00|00|00 NP).

    Tu misión es escribir una función que reciba:

      - fromTime → fecha de referencia en formato elfo (YYYY*MM*DD@HH|mm|ss NP).
      - takeOffTime → la misma fecha de despegue, también en formato elfo.
    
    La función debe devolver:

      - Los segundos completos que faltan para el despegue.
      - Si ya estamos en el despegue exacto → 0.
      - Si el despegue ya ocurrió → un número negativo indicando cuántos segundos han pasado desde entonces.
    
    🎯 Reglas
      - Convierte el formato elfo a un timestamp primero. El sufijo NP indica la hora oficial del Polo Norte (sin husos horarios ni DST), así que puedes tratarlo como si fuera UTC.
      - Usa diferencias en segundos, no en milisegundos.
      - Redondea siempre hacia abajo (floor): solo segundos completos.
*/

/* ---------- SOLUCIÓN ---------- */

function timeUntilTakeOff(fromTime, takeOffTime) {
  // Calculo el timestamp en segundos para el momento del despegue.
  const takeOffTimeTimeStampInSeconds = Math.floor(
    new Date(
      // Normalizo el formato del string de fecha reemplazando símbolos personalizados por los del formato ISO:
      // '*' por '-', '@' por 'T', '|' por ':', elimino espacios y 'NP' por 'Z' (UTC).
      takeOffTime
        .replaceAll("*", "-")
        .replaceAll("@", "T")
        .replaceAll("|", ":")
        .replaceAll(" ", "")
        .replaceAll("NP", "Z")
    ).getTime() / 1000 // Convierto los milisegundos de la fecha a segundos.
  );

  // Calculo el timestamp en segundos para el momento de referencia.
  const fromtimeTimeStampInSeconds = Math.floor(
    new Date(
      // Aplico el mismo proceso de normalización de caracteres para que el objeto Date pueda interpretarlo.
      fromTime
        .replaceAll("*", "-")
        .replaceAll("@", "T")
        .replaceAll("|", ":")
        .replaceAll(" ", "")
        .replaceAll("NP", "Z")
    ).getTime() / 1000 // Convierto los milisegundos de la fecha a segundos.
  );

  // Devuelvo la diferencia en segundos entre el despegue y el momento inicial.
  return takeOffTimeTimeStampInSeconds - fromtimeTimeStampInSeconds;
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const takeoff = "2025*12*25@00|00|00 NP";

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
const time1 = timeUntilTakeOff("2025*12*24@23|59|30 NP", takeoff);
console.log(time1);
// 30

// justo en el momento exacto
const time2 = timeUntilTakeOff("2025*12*25@00|00|00 NP", takeoff);
console.log(time2);
// 0

// 12 segundos después del despegue
const time3 = timeUntilTakeOff("2025*12*25@00|00|12 NP", takeoff);
console.log(time3);
// -12

/* -------------------------------------- */
