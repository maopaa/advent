/**
 * #11: Los elfos estudiosos. ⚡ 130
 * ---------------------------------------------
 * Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás.
 * Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.
 * ***
 * Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:
 * - Si ya es un palíndromo, un array vacío.
 * - Si no es posible, null.
 * - Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices)
 * que se deben intercambiar para poder crearlo.
 */

function getIndexsForPalindrome(word) {
    const chars = [...word]
    const entries = chars.slice(0, chars.length / 2 + 1).entries()
    if (
        chars
            .slice(0, chars.length / 2)
            .every((c, i) => c === chars[chars.length - 1 - i])
    )
        return []
    for (let [i, c1] of entries) {
        for (let [j, c2] of chars.entries()) {
            let indexModify = [...chars]
            indexModify[i] = c2
            indexModify[j] = c1
            if (
                indexModify
                    .slice(0, indexModify.length / 2)
                    .every(
                        (c, i) =>
                            c === indexModify[indexModify.length - 1 - i],
                    )
            ) {
                return [i, j]
            }
        }
    }
    return null
}

module.exports = getIndexsForPalindrome
