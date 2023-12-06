let jugadorPuntos = 0
let rondasParaGanar = 3
let nombre = ''

function juego() {
while (!nombre || !isNaN(nombre)) {
    nombre = prompt('Ingrese su nombre')
    if (!nombre) {
        alert('Por favor, ingrese su nombre!')
    } else if (!isNaN(nombre)) {
        alert('Por favor, ingrese su nombre!')
    }
}

for (let i = 1; i <= rondasParaGanar; i++) {
    let pc = aleatoria()
    let jugador = Number(prompt('1 - PIEDRA, 2 - PAPEL, 3 - TIJERA'))

    while (isNaN(jugador) || jugador == '' || jugador < 1 || jugador > 3) {
        alert('Por favor, ingrese un numero!!!')
        jugador = Number(prompt('Ingrese un numero'))
    }

    if (jugador == pc) {
        alert('EMPATE')
    } else if (jugador == 1 && pc == 3) {
        alert('GANASTE')
        jugadorPuntos++
    } else if (jugador == 2 && pc == 1) {
        alert('GANASTE')
        jugadorPuntos++
    } else if (jugador == 3 && pc == 2) {
        alert('GANASTE')
        jugadorPuntos++
    } else {
        alert('PERDISTE')
    }
}
function aleatoria() {
    return Math.ceil(Math.random() * 3)
}

alert('Puntuacion final: ' + nombre + ' ' + jugadorPuntos)

}

do {
    juego()
    empezarJuego = confirm("Queres jugar devuelta?")
} while (empezarJuego)
  
  alert("Gracias por jugar!!")