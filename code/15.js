/**
 * #15: Robot autónomo. - ⚡ 110
 * -----------------------------------------------------
 * Ten en cuenta que la store es un array que puede ser de un número de filas que va de 1 a 100,
 * ya que tenemos almacenes de todos los tamaños.
 * ***
 * También que el robot es posible que termine en su posición inicial si no puede moverse o si está dando vueltas.
 */

function autonomousDrive(store, movements) {
  let robotRow = 0
  let robotCol = 0
  store.forEach((row, rowIndex) => {
    const colIndex = row.indexOf('!')
    if (colIndex !== -1) {
      robotRow = rowIndex
      robotCol = colIndex
    }
  })
  movements.forEach((move) => {
    let newRow = robotRow
    let newCol = robotCol
    switch (move) {
      case 'R':
        newCol++
        break
      case 'L':
        newCol--
        break
      case 'U':
        newRow--
        break
      case 'D':
        newRow++
        break
    }
    if (
      newRow >= 0 &&
      newRow < store.length &&
      newCol >= 0 &&
      newCol < store[0].length &&
      store[newRow][newCol] !== '*'
    ) {
      store[robotRow] = store[robotRow].substring(0, robotCol) + '.' + store[robotRow].substring(robotCol + 1)
      store[newRow] = store[newRow].substring(0, newCol) + '!' + store[newRow].substring(newCol + 1)
      robotRow = newRow
      robotCol = newCol
    }
  })
  return store
}
module.exports = autonomousDrive
