const body = document.getElementsByTagName("body")[0]

function setColor(name){
    body.style.backgroundColor = name;
    
}

function randomColor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}


const input = document.getElementById("input")
const color2 = document.getElementById("color2")
const color3 = document.getElementById("color3")

input.addEventListener("input", generate)

function generate() {
    const color = input.value
    const splitComplementColors = tinycolor(color).splitcomplement()
    console.log(splitComplementColors)
    color2.style.backgroundColor = splitComplementColors[1]
    color3.style.backgroundColor = splitComplementColors[2]
    console.log(splitComplementColors[2].toHexString())
}

generate()
