const button = document.querySelector("button")
const ul = document.querySelector("ul")
const div = document.querySelector("div")
div.style.backgroundColor = "black"
const marquee = document.querySelector("marquee")

button.addEventListener('click' , runevent)

function runevent() {
    // div.style.backgroundColor = "white"
    div.style.backgroundImage = "url(pexels-adil-2668314.jpg)"
    div.style.backgroundSize = "cover"
    div.style.opacity = "0.7"
    div.style.backgroundPosition = "center"
    div.style.display= "flex"
    div.style.alignItems = "center"
    div.style.justifyContent = "center"
    div.style. transition = " all ease-in-out 0.2s"
    marquee.style.display = "none"
    marquee.style.color = "rgb(19, 222, 236)"
    button.style.display = "none"
    button.style.transform =" scale(120%)"
    // const h1 = document.createElement("h1")
    // h1.innerText = "hello world"
    // h1.style.color = "white"
    // h1.style.fontSize = "100px"
   
    // div.appendChild(h1)
  
   

    
}
