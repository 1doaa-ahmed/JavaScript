console.log(document.title)
console.log(document.body)
console.log(document.body.children)
console.log(document.getElementById("players"))
console.log(document.querySelector("#players"))
console.log(document.getElementsByClassName("player"))
console.log(document.querySelector(".player"))
console.log(document.getElementsByTagName("span"))
console.log(document.querySelectorAll("span"))
// querySelector => return node list
// getElementBy => return HTML collection
console.log(document.querySelectorAll("span").length)
console.log(document.getElementById("p1-name").textContent)
///////////////////
// Exercise one 
console.log(document.getElementsByTagName("p"))
console.log(document.getElementById("p1-symbol").textContent)
console.log(document.getElementsByClassName("square").length)
console.log(document.getElementsByTagName("h2")[0].textContent)
// Exercise two
document.getElementById("p1-name").textContent = "Doaa"
document.getElementById("p2-name").textContent = "Dina"
document.getElementById("p1-symbol").textContent = "O"
document.getElementById("p2-symbol").textContent = "X"
document.querySelector("h2").append(" and love")
// Exercise three
// false => boolean
// "true" => string
// document.title => string
// "some string".length => number
// null => object
// Exercise four 
document.getElementById("p1-name").append(" Ahmed")
console.log(document.title.indexOf("T"))
console.log(document.title[9])
console.log(document.title.includes("JavaScript"))
console.log(document.querySelector("h1").textContent = 
document.querySelector("h1").textContent.toUpperCase())
// Exercise five 
console.log( 4 + 5 )
console.log( (8 + 10 + 12 + 8 + 7 + 8 + 7) / 7 )
console.log( (24-8) + (24-10) + (24-12) + (24-8) + (24-7) + (24-8) + (24-7)  )