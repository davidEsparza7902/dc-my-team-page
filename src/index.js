// Función para contar elementos en cada fila
function contarElementosEnFila() {
  const membersContainer = document.querySelector('.members')
  const members = Array.from(membersContainer.querySelectorAll('.member'))

  const rows = []
  let currentRowWidth = 0
  let currentRowElements = 0

  members.forEach((member) => {
    const memberWidth = member.clientWidth
    currentRowWidth += memberWidth

    if (currentRowWidth > membersContainer.clientWidth) {
      rows.push(currentRowElements)
      currentRowWidth = memberWidth
      currentRowElements = 1
    } else {
      currentRowElements++
    }
  })
  rows.push(currentRowElements)
  return rows
}

function arrayTodosIguales(arr) {
  if (arr.length === 0) return true
  const primerElemento = arr[0]
  for (let i = 1; i < arr.length; i++)
    if (arr[i] !== primerElemento) return false
  return true
}
function actualizarElementosEnCadaFila() {
  const elementosEnCadaFila = contarElementosEnFila()

  if (arrayTodosIguales(elementosEnCadaFila) && elementosEnCadaFila[0] !== 1) {
    const members = Array.from(document.querySelectorAll('.member'))
    const evenMembers = members.filter((_, index) => (index + 1) % 2 === 0)
    const membersStyle = members.filter((_, index) => (index + 1) % 3 === 2)
    if (elementosEnCadaFila[0] % 2 === 0) {
      membersStyle.forEach((member) => {
        member.style.marginTop = '0px'
      })
      evenMembers.forEach((member) => {
        member.style.marginTop = '50px'
      })
    } else {
      evenMembers.forEach((member) => {
        member.style.marginTop = '0px'
      })
      membersStyle.forEach((member) => {
        member.style.marginTop = '50px'
      })
    }
  } else {
    const members = Array.from(document.querySelectorAll('.member'))
    members.forEach((member) => {
      member.style.marginTop = '0px'
    })
  }
}

window.addEventListener('load', actualizarElementosEnCadaFila)
window.addEventListener('resize', actualizarElementosEnCadaFila)
