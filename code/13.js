/**
 * #13: Calculando el tiempo - ⚡ 260
 * --------------------------------------------------
 * Tu función debe devolver el tiempo que les faltará o el tiempo que les sobrará para terminar las entregas.
 * El formato de la duración devuelta debe ser HH:mm:ss.
 * ***
 * Si terminan antes de las 07:00:00, el tiempo restante hasta las 07:00:00 debe ser mostrado con un signo negativo.
 * Por ejemplo, si sobran 1 hora y 30 minutos, devuelve -01:30:00
 */

function calculateTime(deliveries) {
  const total = deliveries.reduce((acc, delivery) => {
    let [hours, minutes, seconds] = delivery.split(':').map(Number)
    return acc + hours * 3600 + minutes * 60 + seconds
  }, 0)

  let difference = total - 25200
  let hours = Math.floor(Math.abs(difference) / 3600)
  let minutes = Math.floor((Math.abs(difference) % 3600) / 60)
  let seconds = Math.floor((Math.abs(difference) % 3600) % 60)

  hours = hours.toString().padStart(2, '0')
  minutes = minutes.toString().padStart(2, '0')
  seconds = seconds.toString().padStart(2, '0')

  return `${difference < 0 ? '-' : ''}${hours}:${minutes}:${seconds}`
}

module.exports = calculateTime
