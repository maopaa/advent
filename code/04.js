
/** 
 * 🟢 #04: Dale la vuelta a los paréntesis. ⚡ 240
 * -----------------------------------------------------------------
 * Santa necesita que estos mensajes estén correctamente formateados. 
 * Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, 
 * eliminando los paréntesis en el mensaje final.
 * 
 * Eso sí, ten en cuenta que pueden existir paréntesis anidados, 
 * por lo que debes invertir los caracteres en el orden correcto.
*/

function decode(message) {
    let stack = [];
    for (let i = 0; i < message.length; i++) {
        if (message[i] !== ')') {
            stack.push(message[i]);
        } else {
            let reversed = '';
            while (stack.length && stack[stack.length - 1] !== '(') {
                reversed += stack.pop();
            }
            stack.pop();
            stack.push(...reversed);
        }
    }
    return stack.filter(c => c !== '(').join('');
}

module.exports = decode;