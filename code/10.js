/**
 * 🌿 #10: Crea tu propio árbol de navidad. ⚡ 270
 * ------------------------------------------------------
 * ¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄
 * personalizado en cuestión de segundos.
 * ***
 * Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica
 * la altura del mismo. 
 * Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica
 * hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.
 * ***
 * Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos,
 * la altura indicada más una última línea con el tronco formado por el carácter | en el centro y,
 * finalmente, un salto de línea \n.
 */

function createChristmasTree(ornaments, height) {
    let tree = ''
    let index = 0
    for (let i = 0; i < height; i++) {
        let line = ''
        tree += ' '.repeat(height - i - 1)
        for (let j = 0; j <= i; j++, index++) {
            line += ornaments[index % ornaments.length] + ' '
        }
        tree += line.trimEnd() + '\n'
    }
    return tree + ' '.repeat(height - 1) + '|\n'
}

module.exports = createChristmasTree
