// Importamos la función a testear
let cyberReindeer = require('../code/05.js')

let assert = require('assert')

describe('5) El CyberTruck de Santa', function () {
    // #1: Devuelve el tipo de dato correcto
    it('#1: Devuelve el tipo de dato correcto', function () {
        let road = '...'
        let time = 1
        assert(typeof cyberReindeer(road, time), 'array')
    })
    // #2: Trineo con tiempo de 10
    it('#2: Trineo con tiempo de 10', function () {
        let road = 'S..|...|..'
        let time = 10
        assert.deepStrictEqual(cyberReindeer(road, time), [
            'S..|...|..',
            '.S.|...|..',
            '..S|...|..',
            '..S|...|..',
            '..S|...|..',
            '...S...*..',
            '...*S..*..',
            '...*.S.*..',
            '...*..S*..',
            '...*...S..',
        ])
    })
    // #3: Trineo con tiempo de 4
    it('#3: Trineo con tiempo de 4', function () {
        let road = 'S.|.'
        let time = 4
        assert.deepStrictEqual(cyberReindeer(road, time), [
            'S.|.',
            '.S|.',
            '.S|.',
            '.S|.',
        ])
    })

    // #4: Trineo con tiempo de 7
    it('#4: Trineo con tiempo de 7', function () {
        let road = 'S.|.|.'
        let time = 7
        assert.deepStrictEqual(cyberReindeer(road, time), [
            'S.|.|.',
            '.S|.|.',
            '.S|.|.',
            '.S|.|.',
            '.S|.|.',
            '..S.*.',
            '..*S*.',
        ])
    })
})
