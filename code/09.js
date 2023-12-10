/**
 * 🟢 #09: Alterena las luce - ⚡ ---
 * ------------------------------------------------
 * Las luces son de dos colores: 🔴 y 🟢 .
 * Para que el efecto sea el adecuado, siempre deben estar alternadas.
 * Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.
 * ***
 * Nos han pedido que escribamos una función adjustLights que, dado un array de strings
 * con el color de cada luz, devuelva el número mínimo de luces que hay que cambiar para que estén
 * los colores alternos.
 */

function adjustLights(lights) {
    const options = [['🔴', '🟢'], ['🟢', '🔴']]
    let green = 0
    let red = 0

    let i = 0
    for (const led of lights) {
        green += options[0][i % 2] !== led
        red += options[1][i % 2] !== led
        i++
    }

    return Math.min(green, red)
}

module.exports = adjustLights
