
// Importamos la función a testear
let decode = require('../code/04.js');

let assert = require('assert');

describe('4) Dale la vuelta a los paréntesis', function () {
    // #1: Devuelve el tipo de dato correcto
    it('#1: Devuelve el tipo de dato correcto', function () {
        let message = 'abcde'
        assert(typeof decode(message), 'string');
    });

    // #2: Encuentra el primer paso extra añadido
    it('#2: Encuentra el primer paso extra', function () {
        let message = 'a(bc)de'
        assert.deepStrictEqual(decode(message), 'acbde');
    });

    // #3: Encuentra el primer paso extra quitado
    it('#3: Encuentra el primer paso extra quitado', function () {
        let message = 'a(bcdefghijkl(mno)p)q'
        assert.deepStrictEqual(decode(message), 'apmnolkjihgfedcbq');
    });

    // #4: No hay pasos extra
    it('#4: No hay pasos extra', function () {
        let message = 'co(de(fight)s)'
        assert.deepStrictEqual(decode(message), 'cosfighted');
    });
});