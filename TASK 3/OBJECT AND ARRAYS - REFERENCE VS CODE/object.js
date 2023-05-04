// let age = 100;
// let age2 = age
// console.log(age,age2)
// age = 200
// console.log(age,age2)

// let nam = 'wes'
// let name2 = nam
// console.log(nam , name2)
// nam = 'wesly'
// console.log(nam , name2)


// const players = ['wes' , 'sarah' , 'ryan' ,'poppy']
// const team = players
// console.log(players , team)

// team[3]='lux'
// console.log(players , team)

// const team2 = players.slice()
// const team3 = [].concat(players)
// const team4 = [...players]
// team2[3]='lux'
// team4[3]='lllslsl'
// console.log(players , team2)

// const team5 = Array.from(players)


// const person = {
//     name : 'wes Bos',
//     age : 80
// }

// const captain = person
// captain.number = 99 

// const cap2 = Object.assign({} , person , {number:99 , age:12})
// console.log(cap2)

// const cap3 = {...person}

const wes = {
    name : 'wes' , 
    age : 100 ,
    social : {
        twitter : '@weswse' ,
        facebook : 'wesbos'
    }
}
console.log(wes)

const dev = Object.assign({} , wes)
const dev2 = JSON.parse(JSON.stringify(wes))