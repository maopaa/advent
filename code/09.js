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
    let count = 0
    lights.forEach((light, i) => {
        if (i % 2 === 0 && i < lights.length) {
            if (light === lights[i + 1]) {
                count++
            }
        }
    })
    return count
}

module.exports = adjustLights
