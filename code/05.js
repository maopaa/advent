/**
 * 🟡 El CyberTruck de Santa - ⚡ 180
 * ------------------------------------------------
 * Santa ha decidido actualizar su trineo por un CyberTruck.
 * El problema es que no sabe si podrá pasar por todas las calles.
 */

function cyberReindeer(road, time) {
    let s = 0
    const result = [road]
    road = road.replace('S', '.')

    const roadString = {
        5: road.replaceAll('|', '*'),
    }

    const roadDelay = {
        '.': 1,
        '*': 1,
        '|': 0,
    }

    for (let i = 1; i < time; i++) {
        road = roadString[i] ?? road
        s += roadDelay[road[s + 1]]
        result.push(`${road.substring(0, s)}S${road.substring(s + 1)}`)
    }
    return result
}

module.exports = cyberReindeer
