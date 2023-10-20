const darkModFunck = function () {
    document.body.style = "background-color: black; color: white;"
}

const chooseFontFunck = function () {
    let a = prompt("Choose font sixe")
    document.body.style.transition = ".5s"
    document.body.style.fontSize = a + "px"
}

const bgColorFunck = function () {
    let color = prompt("Choose backgroud color")
    document.body.style.backgroundColor = color
}

let mode = true
const darkLightModFunck = function () {
    if (mode) {
        document.body.style.backgroundColor = "black"
    } else {
        document.body.style.backgroundColor = "white"
    }
    mode = !mode
}



let size = 16
const upperFontFunck = function () {
    size += 2
    document.body.style.fontSize = size + "px"
}
const lowerFontFunck = function () {
    size -= 2
    document.body.style.fontSize = size + "px"
}

const defoultFontFunck = function () {
    document.body.style.fontSize = "16px"
}
const font25pxFunck = function () {
    document.body.style.fontSize = "25px"
}
const font12pxFunck = function () {
    document.body.style.fontSize = "12px"
}

const dayFunck = function () {
    document.body.style = "background-color: white; color: black;"
}
const nightFunck = function () {
    document.body.style = "background-color: black; color: white;"
}

let color = true
const orYellowFunck = function () {
    if (color) {
        document.body.style.backgroundColor = "red"
    } else {
        document.body.style.backgroundColor = "yellow"
    }
    color = !color
}





