
// Importamos la función a testear
let findFirstRepeated = require('../code/01.js');

let assert = require('assert');

describe('1) ¡Primer regalo repetido!', function () {

    // #1: Devuelve el tipo de dato correcto
    it('#1: Devuelve el tipo de dato correcto', function () {
        let gifts = [1, 2, 3, 4, 5];
        assert(typeof findFirstRepeated(gifts), 'number');
    });

    // #2: Hay un número repetido
    it('#2: Hay un número repetido', function () {
        const gifts = [1, 2, 3, 4, 2];
        assert.strictEqual(findFirstRepeated(gifts), 2);
    });

    // #4: No hay números repetidos
    it('#4: No hay números repetidos', function () {
        let gifts = [1, 2, 3, 4, 5];
        assert.strictEqual(findFirstRepeated(gifts), -1);
    });

    // #5: Si el valor es 1, devuelve -1
    it('#5: Si el valor es 1, devuelve -1', function () {
        let gifts = [1];
        assert.strictEqual(findFirstRepeated(gifts), -1);
    });

    // #6: Si el valor es vacio, devuelve -1
    it('#6: Si el valor es vacio, devuelve -1', function () {
        let gifts = [];
        assert.strictEqual(findFirstRepeated(gifts), -1);
    });

    // #7: Si los valores son grandes y no hay repetidos
    it('#7: Si los valores son grandes y no hay repetidos', function () {
        let gifts = [100, 200, 300, 400, 500];
        assert.strictEqual(findFirstRepeated(gifts), -1);
    });

    // #8: Si los valores todos son repetidos
    it('#8: Si los valores todos son repetidos', function () {
        let gifts = [5, 1, 2, 3, 2, 5, 1];
        assert.strictEqual(findFirstRepeated(gifts), 2);
    });

    // #9: Si los valores son grandes y hay repetidos
    it('#9: Si los valores son grandes y hay repetidos', function () {
        let gifts = [100, 200, 300, 400, 500, 200];
        assert.strictEqual(findFirstRepeated(gifts), 200);
    });

    // #10: Hay varios números repetidos, el segundo ocurre antes
    it('#10: Hay varios números repetidos, el segundo ocurre antes', function () {
        const gifts = [1, 2, 3, 4, 2, 3];
        assert.strictEqual(findFirstRepeated(gifts), 2);
    });

    // #11: Hay varios números repetidos, el segundo ocurre después
    it('#11: Hay varios números repetidos, el segundo ocurre después', function () {
        const gifts = [1, 2, 3, 4, 3, 2];
        assert.strictEqual(findFirstRepeated(gifts), 3);
    });
});