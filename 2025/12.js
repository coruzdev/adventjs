/* 
  ⚔️ Batalla de elfos

  Nivel: MEDIO

  Instrucciones:
    Dos elfos están jugando una batalla por turnos. Cada uno tiene un mazo de movimientos que se representan como un string donde cada carácter es una acción.

      - Ataque normal: causa 1 punto de daño si no es bloqueado
      - B Bloqueo: bloquea un ataque normal (A)
      - F Ataque fuerte: causa 2 puntos de daño, no puede ser bloqueado

    Ambos elfos comienzan con 3 puntos de vida. El primer elfo que llegue a 0 puntos de vida o menos pierde y la batalla termina inmediatamente (no se siguen procesando más movimientos).

    Reglas por ronda

      - Si ambos usan ataque (A o F), ambos reciben daño según el tipo.
      - B bloquea A, pero no bloquea F.
      - Todo se resuelve simultáneamente.

    Tu tarea

    Devuelve el resultado de la batalla como un número:

      - 1 → si el Elfo 1 gana
      - 2 → si el Elfo 2 gana
      - 0 → si empatan (ambos llegan a 0 a la vez o terminan con la misma vida)
*/

/* ---------- SOLUCIÓN ---------- */

function elfBattle(elf1, elf2) {
  // Función para calcular el daño infligido basado en el tipo de ataque y la defensa.
  function damage(atk, def) {
    // Si el ataque es tipo 'A', solo hace daño (1) si no es bloqueado 'B'.
    if (atk === "A") return def === "B" ? 0 : 1;
    // Si el ataque es tipo 'F', hace daño (2) sin importar nada.
    if (atk === "F") return 2;
    // En cualquier otro caso (como realizar un bloqueo 'B'), el daño infligido es 0.
    return 0;
  }

  // Ambos elfos comienzan con 3 puntos de vida cada uno.
  let health1 = 3,
    health2 = 3;

  // Itero a través de los movimientos de ambos elfos simultáneamente.
  for (let i = 0; i < elf1.length; i++) {
    // El elfo 2 recibe daño basado en el ataque del elfo 1 y su propia defensa.
    health2 -= damage(elf1[i], elf2[i]);
    // El elfo 1 recibe daño basado en el ataque del elfo 2 y su propia defensa.
    health1 -= damage(elf2[i], elf1[i]);

    // Si la vida de cualquiera de los dos llega a 0 o menos, la batalla termina inmediatamente.
    if (health1 <= 0 || health2 <= 0) break;
  }

  // Si al final ambos tienen la misma vida, el resultado es un empate (0).
  if (health1 === health2) return 0;
  // Retorna el número del elfo que tenga más vida.
  return health1 > health2 ? 1 : 2;
}

/* ------------------------------ */

/* ---------- TESTS DE EJEMPLO ---------- */

const winner1 = elfBattle("A", "B");
console.log(winner1);
// → 0

const winner2 = elfBattle("F", "B");
console.log(winner2);
// → 1

const winner3 = elfBattle("AAB", "BBA");
console.log(winner3);
// → 0

const winner4 = elfBattle("AFA", "BBA");
console.log(winner4);
// → 1

const winner5 = elfBattle("AFAB", "BBAF");
console.log(winner5);
// → 1

const winner6 = elfBattle("AA", "FF");
console.log(winner6);
// → 2

/* -------------------------------------- */
