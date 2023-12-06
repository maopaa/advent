/**
 * 🟢 Los renos a prueba. - ⚡ 360
 * ------------------------------------------------
 * '>' Avanza a la derecha; '<' Avanza a la izquierda; '*' Puede avanzar o retroceder
 * ***
 * Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces,
 * luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.
 * Los elfos quieren saber cuál es la máxima distancia que recorre
 * el reno al finalizar todos los movimientos.
 */

function maxDistance(movements) {
    let movement = 0
    let joker = 0
    for (const iterator of movements.split('')) {
        if (iterator == '>') movement++
        if (iterator == '<') movement--
        if (iterator == '*') joker++
    }
    return Math.abs(movement) + joker
}

module.exports = maxDistance
