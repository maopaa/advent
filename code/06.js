/**
 * 🟢 #05: Los renos a prueba. - ⚡
 * ------------------------------------------------
 * '>' Avanza a la derecha; '<' Avanza a la izquierda; '*' Puede avanzar o retroceder
 *
 * Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces,
 * luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.
 * Los elfos quieren saber cuál es la máxima distancia que recorre
 * el reno al finalizar todos los movimientos.
 */

function maxDistance(movements) {
  let forward = 0
  let back = 0
  let joker = 0
  for (const iterator of movements.split('')) {
    if (iterator == '>') forward++
    if (iterator == '<') back++
    if (iterator == '*') joker++
  }
  forward = forward > back || forward == back ? forward + joker : forward
  back = back > forward ? back + joker : back
  return forward - back < 0 ? (forward - back) * -1 : forward - back
}

module.exports = maxDistance
