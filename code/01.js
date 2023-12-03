/**
 * 🟢 #01: ¡Primer regalo repetido!. ⚡ 260
 * ---------------------------------------------------
 * Si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista.
 * Si no hay números repetidos, devuelve -1.
 */

const EXPECTED_NOT_FOUND = -1;

function findFirstRepeated(gifts) {
    return gifts.reduce((acc, gift, index) => {
        if (acc !== EXPECTED_NOT_FOUND) return acc;
        if (gifts.indexOf(gift) !== index) return gift;
        return acc;
    }, EXPECTED_NOT_FOUND);
}

module.exports = findFirstRepeated;