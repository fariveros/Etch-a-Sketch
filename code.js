const container = document.getElementById('container')
container.classList.add("container")

let prueba = 16

for (let i = 0; i < 256; i++) {
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