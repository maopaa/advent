/**
 * 🟡 #05: El CyberTruck de Santa - ⚡
 * ------------------------------------------------
 * Santa ha decidido actualizar su trineo por un CyberTruck.
 * El problema es que no sabe si podrá pasar por todas las calles.
 */

function cyberReindeer(road, time) {
    let sleighRoute = []
    road = road.replace('S', '.')
    let unitOfTime = 1
    let position = -1
    let newArray = []
    while (unitOfTime <= time) {
        if (unitOfTime == 6) road = road.replaceAll('|', '*')
        position++
        if (road.charAt(position) == '|' && unitOfTime < 6) position--
        newArray = road.split('')
        newArray[position] = 'S'
        sleighRoute.push(newArray.join(''))
        unitOfTime++
    }
    return sleighRoute
}

module.exports = cyberReindeer
