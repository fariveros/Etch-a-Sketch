const container = document.getElementById('container')
const button = document.getElementById('button')
let cuadrosTotales = 16 * 16
let prueba = 16
container.classList.add("container")
button.addEventListener("click", () => {
    let dimensionUsuario = parseInt(prompt("Ingrese el numero de cuadricula que desea"))
    if (dimensionUsuario >= 100) {
        alert("Solo se permiten valores menores a cien (100).")
    }
    else if (dimensionUsuario < 100) {
        cuadrosTotales = dimensionUsuario * dimensionUsuario
        console.log(cuadrosTotales)
        prueba = dimensionUsuario
        container.innerHTML = ''
        generarCuadricula()
    }

})

function generarCuadricula() {
    for (let i = 0; i < cuadrosTotales; i++) {
        const square = document.createElement("div")
        square.classList.add("square")
        container.appendChild(square)
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = 'blue'
        })
        square.addEventListener("mouseleave", () => {
            square.style.filter = "blur(2px)"
            square.style.contrast = "150%"
        })
        square.style.width = `calc(100%/${prueba})`
        square.style.height = `calc(100%/${prueba})`
    }
}

generarCuadricula()