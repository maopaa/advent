/**
 * #16: Despliegue en viernes. - ⚡ 160
 * -----------------------------------------------------
 *        3
 *      /   \
 *     1     0
 *    / \     \
 *   8  12     1
 * ***
 * El elfo que está de guardia y que intentó solucionar el problema antes de irse a casa, 
 * nos ha dejado algunas pistas:
 * - Si un nodo no tiene valor, se representa con null. Por lo tanto, si un nodo tiene valor null, no tendrá hijos.
 * - El nodo raíz se encuentra en el índice 0 del array.
 * - Existe una relación entre el índice de un nodo y el índice de sus hijos. ¡Busca el patrón!
 */

function transformTree(tree) {
  let index = arguments[1] || 0
  return tree[index] != null
    ? {
        value: tree[index],
        left: transformTree(tree, (index << 1) + 1),
        right: transformTree(tree, (index << 1) + 2),
      }
    : null
}

module.exports = transformTree
