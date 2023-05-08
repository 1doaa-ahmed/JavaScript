// task one 
const myName = "Doaa Ahmed"
let parentAgee = 40 + 45 
let board = document.querySelector("#board")
 
// task two 
let alpha = ["c" , "a" , "d" , "b"].sort()
console.log(alpha)
//  => ["a" , "b" , "c" , "d"]
let arr = ["lions" , "tigers" , "bears oh my!"].join(" & ")
console.log(arr)
let nums = [1 , 2 ,3].concat([4 ,5 ,6])
console.log(nums)

/////////

let abcArray = ["a","b","c"]
abcArray[1]="d"
console.log(abcArray)
//['a', 'd', 'c']
let abcString = 'abc'
abcString[1]='d'
console.log(abcString)
//'abc'

/////////

let numbers1 = [1,2,3]
let result1 = numbers1.push(4)
console.log(numbers1)
//[1, 2, 3, 4]
let numbers2 = [1,2,3]
let result2 = numbers2.concat([4])
console.log(numbers2)
//[1, 2, 3]

/////////

const operands = [4,6]
const sum = operands[0]+operands[1]
//10
operands[0]=5
//operands = [5,6]
const newSum = operands[0]+operands[1]
//11

/////////

let array1 = [1,2,3]
let array2 = array1
array1[1] = 4
//array1 = array 2 = [1,4,3]
const arr1 = [1,2,3]
const arr2 = array1
arr1[1] = 4
//array1 = array 2 = [1,4,3]

/////////

// task three
const Doaa = {
    nme : "Doaa" ,
    age : 21 ,
    home : "Samia Elgamal" ,
    languages : ["English" , "Arabic"] , 
    pet : 1 ,
    petType : "cat" 
}

/////////

// task four
const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
]
const spiceGirls = {
    albums: ["Spice", "Spiceworld", "Forever"],
    motto: "Girl Power",
    members: spices
}
console.log(spiceGirls.motto)
console.log(spiceGirls.members[1])
console.log(spiceGirls.albums[1])
console.log(spiceGirls.members[4].name)

/////////

// task six
const players = [{name : "Anjana" , Symbol : "X"}]
players.push({name :"Everyone else" , Symbol : "O"})
document.getElementById("p2-name").textContent = players[1].name
const squares = document.getElementsByClassName('square')
squares[4].textContent = "X"
squares[0].textContent = players[1].Symbol
squares[2].textContent = players[0].Symbol
squares[6].textContent = players[1].Symbol
squares[3].textContent = players[0].Symbol
squares[5].textContent = players[1].Symbol