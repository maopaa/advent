/**
 * 🟡 #08: Ordenando el almacen. ⚡ 270
 * ----------------------------------------------------------------------------------
 * Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁
 * para la víspera de Navidad 🎄.
 * El formato de entrada es especial, ya que indica el número de regalos y
 * el tipo de regalo con letras de la a a la z.
 * -----------------------------------------------------------------------------------
 * Los elfos tienen un sistema especial para organizar los regalos:
 * - Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}.
 * - Cada 5 cajas se apilan en un palé, representado por [x].
 * - Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro.
 * Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.
 */

function organizeGifts(gifts) {
    let regexp = /(\d+)([a-z])/g;
    let result = '';
    let matches = [...gifts.matchAll(regexp)];

    for (let i = 0; i < matches.length; i++) {
        const amount = parseInt(matches[i][1]);
        const letter = matches[i][2];

        const boxes = Math.floor(amount / 10);
        const palets = Math.floor(boxes / 5);
        const bags = amount % 10;

        result += `[${letter}]`.repeat(palets);
        result += `{${letter}}`.repeat(boxes % 5);
        result += `(${letter.repeat(bags)})`.repeat(bags > 0);
    }

    return result;
}

module.exports = organizeGifts; // No remover.  
