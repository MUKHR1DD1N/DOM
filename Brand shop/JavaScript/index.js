let elLogin1 = document.querySelector(".login1")
let elLogin2 = document.querySelector(".login2")
let elLoginButton = document.querySelector(".login-button")
let elList = document.querySelector(".main")
let elTemplate = document.querySelector(".templ").content


function Mac() {
    fetch("https://fakestoreapi.com/products/")
        .then(res => res.json())
        .then(data => rednderArr(data, elList))
}

Mac()

function rednderArr(arr, list) {
    arr.map(item =>{
    let cloneTemplate = elTemplate.cloneNode(true)    

    cloneTemplate.querySelector(".img").src= item.image
    cloneTemplate.querySelector(".title").textContent = item.title
    cloneTemplate.querySelector(".descrip").textContent = item.description
    cloneTemplate.querySelector(".rate").textContent = "Rate: " + item.rating.rate
    cloneTemplate.querySelector(".count").textContent = "Count: " + item.rating.count
    elList.appendChild(cloneTemplate)

    })
}




function Reg() {
    if (elLogin1.value == "admin" && elLogin2.value == "1234") {
        // elLoginButton.href = "file:///c%3A/Users/Mukhriddin/Desktop/exam/main.html"
        window.open("../main.html")
        console.log("Right");
    }
    else {
        elLogin1.style.border = "1px solid red"
        elLogin2.style.border = "1px solid red"
    }
}

