let drawGift = require('../code/07.js')

let assert = require('assert')

describe('7) Las cajas en 3D', function () {
    // #1: Devuelve el tipo de dato correcto
    it('#1: Devuelve el tipo de dato correcto', function () {
        let symbol = '*'
        assert(typeof drawGift(2, symbol), 'string')
    })

    // #2: Dibuja una caja de 4x4x4
    it('#2: Dibuja una caja de 4x4x4', function () {
        let symbol = '+'
        assert.deepStrictEqual(
            drawGift(4, symbol),
            '   ####\n' +
            '  #++##\n' +
            ' #++#+#\n' +
            '####++#\n' +
            '#++#+#\n' +
            '#++##\n' +
            '####\n',
        )
    })

    // #3: Dibuja una caja de 3x3x3
    it('#3: Dibuja una caja de 3x3x3', function () {
        let symbol = '*'
        assert.deepStrictEqual(
            drawGift(3, symbol),
            '  ###\n' +
            ' #*##\n' +
            '###*#\n' +
            '#*##\n' +
            '###\n',
        )
    })

    // #4: Dibuja una caja de 5x5x5
    it('#4: Dibuja una caja de 5x5x5', function () {
        let symbol = 'x'
        assert.deepStrictEqual(
            drawGift(5, symbol),
            '    #####\n' +
            '   #xxx##\n' +
            '  #xxx#x#\n' +
            ' #xxx#xx#\n' +
            '#####xxx#\n' +
            '#xxx#xx#\n' +
            '#xxx#x#\n' +
            '#xxx##\n' +
            '#####\n',
        )
    })
})
