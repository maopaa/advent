/**
 * #14: Evita la alarma. - ⚡ 290
 * --------------------------------------------------------------
 * Cada casa en esa calle tiene un número de regalos preparados. Sin embargo, las casas tienen un sistema de seguridad
 * conectado entre casas adyacentes,por lo que no puede dejar los regalos en dos casas seguidas, o se activará la alarma
 * que alertará a los niños.
 * ***
 * Dada un array de enteros no negativos regalos que representa la cantidad de regalos en cada casa,
 * tu tarea es ayudar a Papá Noel a determinar la máxima cantidad de regalos que puede entregar
 * en una noche sin activar ninguna alarma.
 */

function maxGifts(houses) {
    let prevGifts = 0
    let currGifts = 0

    for (const house of houses) {
        const maxGifts = Math.max(prevGifts + house, currGifts)
        prevGifts = currGifts
        currGifts = maxGifts
    }

    return currGifts
}

module.exports = maxGifts
