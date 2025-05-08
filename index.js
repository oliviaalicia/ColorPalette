const body = document.getElementsByTagName("body")[0]

function setColor(name){
    body.style.backgroundColor = name;
    
}

function changeColor(){
    let col = document.getElementById('colorInputColor').value;
    document.body.style.backgroundColor = col;
    
}
function setTextColor(color){
    document.body.style.color = color;
}

function changeTxt(){
    const txtColor = document.getElementById('colorInputText').value;
    document.body.style.color = txtColor;
    
}
function randomTextColor() {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.color = randomColor;
}

function randomColor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}


const input = document.getElementById("input")
const input3 = document.getElementById("input3")
const color2 = document.getElementById("color2")
const color3 = document.getElementById("color3")
const color4 = document.getElementById("color4")
const color5 = document.getElementById("color5")

input.addEventListener("input", generate)


function generate() {
    const color = input.value
    const splitComplementColors = tinycolor(color).splitcomplement()
    color2.style.backgroundColor = splitComplementColors[1]
    color3.style.backgroundColor = splitComplementColors[2]
    console.log(splitComplementColors[2].toHexString())
}
input3.addEventListener("input", newGen)
function newGen() {
    const colors = input3.value
    const mono = tinycolor(colors).triad()
    color4.style.backgroundColor = mono[1]
    color5.style.backgroundColor = mono[2]
    console.log(mono[2].toHexString())
}

generate()
newGen()
