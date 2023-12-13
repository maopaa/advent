/**
 * #12: ¿Es una copia válida? ⚡ 270
 * ---------------------------------------------
 * En el Polo Norte todavía usan fotocopiadoras de papel.
 * Los elfos las usan para copiar las cartas que los niños envían a Santa y así poder enviarlas a todos los departamentos de regalos.
 * Sin embargo ya son muy viejas y no funcionan muy bien. Cada vez que hacen una copia, la calidad de la copia disminuye ligeramente,
 * un fenómeno conocido como pérdida generacional.
 * ***
 * Necesitas detectar si una carta es una copia de otra. Las cartas son muy largas y no puedes leerlas,
 * pero puedes compararlas con un algoritmo.
 */

function checkIsValidCopy(original, copy) {
  let result = true
  let i = -1
  for (let letter of [...original]) {
    let pattern = /([A-Z])|([a-z])|(\#)|(\+)|(\:)|(\.)|(\s)/g
    let regex = pattern.exec(letter)
    i++
    if (letter.toLowerCase() == copy[i]) continue
    let simbolos = [letter, letter.toLowerCase(), '#', '+', ':', '.', ' ', '']
    result = [
      false,
      [false, true][
        +simbolos.slice((regex?.lastIndexOf(letter) ?? 1) - 1).includes(copy[i])
      ],
    ][+result]
  }
  return result
}

module.exports = checkIsValidCopy
