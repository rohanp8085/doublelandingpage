const container = document.querySelector(".container")
const splitleft = document.querySelector(".left")
const splitright = document.querySelector(".right")
const split = document.querySelector(".split")



 splitleft.addEventListener("mouseenter" , () =>{
    container.classList.add("active-left")
    
 }) 
 
 splitleft.addEventListener("mouseleave" , () =>{
    container.classList.remove("active-left")
 }) 

 splitright.addEventListener("mouseenter" , () =>{
    container.classList.add("active-right")
    
 })

 splitright.addEventListener("mouseleave" , () =>{
    container.classList.remove("active-right")
 })