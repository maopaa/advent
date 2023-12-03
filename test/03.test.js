
// Importamos la función a testear
let functions = require('../code/03.js');

let assert = require('assert');

describe('El Elfo travieso', function () {
    // #1: Devuelve el tipo de dato correcto
    it('#1: Devuelve el tipo de dato correcto', function () {
        let originalOne = 'abcd'
        let modifiedOne = 'abcde'
        assert(typeof functions(originalOne, modifiedOne), 'string');
    });

    // #2: Encuentra el primer paso extra añadido
    it('#2: Encuentra el primer paso extra', function () {
        let originalOne = 'abcd'
        let modifiedOne = 'abcde'
        assert.deepStrictEqual(functions(originalOne, modifiedOne), 'e');
    });

    // #3: Encuentra el primer paso extra quitado
    it('#3: Encuentra el primer paso extra quitado', function () {
        let originalTwo = 'stepfor'
        let modifiedTwo = 'stepor'
        assert.deepStrictEqual(functions(originalTwo, modifiedTwo), 'f');
    });

    // #4: No hay pasos extra
    it('#4: No hay pasos extra', function () {
        let originalThree = 'abcde'
        let modifiedThree = 'abcde'
        assert.deepStrictEqual(functions(originalThree, modifiedThree), '');
    });
});