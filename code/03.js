
/** 
 * 🟢 #03: El Elfo travieso. ⚡ 360
 * -----------------------------------------------------------------
 * Tu tarea es escribir una función que identifique y devuelva el primer paso extra 
 * que se ha añadido o eliminado en la cadena de fabricación. 
 * Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
*/

function findNaughtyStep(original, modified) {
    let max = Math.max(original.length, modified.length);
    for (let i = 0; i < max; i++) {
        if (original[i] !== modified[i]) {
            return original.length > modified.length
                ? original[i]
                : modified[i];
        }
    } 
    return '';
}

module.exports = findNaughtyStep;