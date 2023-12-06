// Importamos la función a testear
let maxDistance = require('../code/06.js')

let assert = require('assert')

describe('6) Los renos a prueba', function () {
  // #1: Devuelve el tipo de dato correcto
  it('#1: Devuelve el tipo de dato correcto', function () {
    let movements = '<<<<<'
    assert(typeof maxDistance(movements), 'number')
  })

  // #2: Se mueve hacia la derecha 2 veces y luego a la izquierda
  it('#2: Se mueve hacia la derecha 2 veces y luego a la izquierda', function () {
    let movements = '>>*<'
    assert.deepStrictEqual(maxDistance(movements), 2)
  })

  // #3: Todos los movimientos a la izquierda
  it('#3: Todos los movimientos a la izquierda', function () {
    let movements = '<<<<<'
    assert.deepStrictEqual(maxDistance(movements), 5)
  })

  // #4: Todos los movimientos a la derecha
  it('#4: Todos los movimientos a la derecha', function () {
    let movements = '>***>'
    assert.deepStrictEqual(maxDistance(movements), 5)
  })

  // #5: Movimientos extra sin esfuerzo '*'
  it('#5: Movimientos extra sin esfuerzo *', function () {
    let movements = '**********'
    assert.deepStrictEqual(maxDistance(movements), 10)
  })

  // #6: Movimientos mixtos 1
  it('#6: Movimientos mixtos 1', function () {
    let movements = '<<**>>'
    assert.deepStrictEqual(maxDistance(movements), 2)
  })

  // #7: Movimientos mixtos 2
  it('#7: Movimientos mixtos 2', function () {
    let movements = '><<><'
    assert.deepStrictEqual(maxDistance(movements), 1)
  })

})
