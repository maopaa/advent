
// Importamos la función a testear
let manufacture = require('../code/02.js');

let assert = require('assert');

describe('2) Ponemos en marcha la fábrica.', function () {
    // #1: Devuelve el tipo de dato correcto
    it('#1: Devuelve el tipo de dato correcto', function () {
        let gifts = ['libro', 'ps5'];
        let materials = 'psli';
        assert(typeof manufacture(gifts, materials), 'array');
    });

    // #2: Contiene los regalos que se pueden fabricar con esos materiales
    it('#2: Contiene los regalos que se pueden fabricar', function () {
        let gifts = ['tren', 'oso', 'pelota'];
        let materials = 'tronesa';
        assert.deepStrictEqual(manufacture(gifts, materials), ["tren", "oso"]);
    });

    // #3: No existe el material
    it('#3: No existe el material', function () {
        let gifts = ['coche', 'muñeca', 'balon'];
        let materials = 'ocmuñalb';
        assert.deepStrictEqual(manufacture(gifts, materials), []);
    });

    // #4: No hay suficiente material para forma las palabras
    it('#4: No hay suficiente material para forma las palabras', function () {
        let gifts = ['patineta', 'robot', 'libro'];
        let materials = 'nopor';
        assert.deepStrictEqual(manufacture(gifts, materials), []);
    });

    // #5: No hay regalos
    it('#5: No hay regalos', function () {
        let gifts = [];
        let materials = 'libro';
        assert.deepStrictEqual(manufacture(gifts, materials), []);
    });

    // #6: No hay materiales
    it('#6: No hay materiales', function () {
        let gifts = ['libro', 'ps5'];
        let materials = '';
        assert.deepStrictEqual(manufacture(gifts, materials), []);
    });
});