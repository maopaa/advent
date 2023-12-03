
/** 
 * 🟢 #02: Ponemos en marcha la fábrica. ⚡ 270
 * -----------------------------------------------------------------
 * Los regalos son cadenas de texto y los materiales son caracteres. 
 * Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, 
 * devuelva una lista de los regalos que se pueden fabricar.
*/

function manufacture(regalos, materiales) {
    return regalos.filter(
        regalo => [...regalo].every(letra => materiales.includes(letra))
    );
}

module.exports = manufacture;