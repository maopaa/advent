let organizeGifts = require('../code/08.js')

let assert = require('assert')

describe('8) Ordenando el almacen', function () {
    // #1: Devuelve el tipo de dato correcto
    it('#1: Devuelve el tipo de dato correcto', function () {
        assert(typeof organizeGifts('76a11b'), 'string')
    })

    // #2: Organiza correctamente los regalos
    it('#2: Organiza correctamente los regalos', function () {
        assert.deepStrictEqual(organizeGifts('76a11b'), '[a]{a}{a}(aaaaaa){b}(b)')
    })

    // #3: Un unico tipo de regalo
    it('#3: Un unico tipo de regalo', function () {
        assert.deepStrictEqual(organizeGifts('20a'), '{a}{a}')
    })

    // #4: Varios tipos de regalo
    it('#4: Varios tipos de regalo', function () {
        assert.deepStrictEqual(organizeGifts('70b120a4c'), '[b]{b}{b}[a][a]{a}{a}(cccc)')
    })

    // #5: Varios cajas de regalos
    it('#5: Varios cajas de regalos', function () {
        assert.deepStrictEqual(organizeGifts('9c'), '(ccccccccc)')
    })

    // #6: Varios tipos de regalo 2
    it('#6: Varios tipos de regalo 2', function () {
        assert.deepStrictEqual(organizeGifts('19d51e'), '{d}(ddddddddd)[e](e)')
    })
})