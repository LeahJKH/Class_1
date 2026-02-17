
// variabler
let variabel = "hei"
    // const let
const variabel2 = "hade"

variabel = "heisann"

    // ariabel2 = "hade"
//string, tall, array, boolen, object, litteral string, Null, Undefined.
let string = "dette er en string"
let tall = 2347
let array = ["denne", "har", "flere", "strings"]
array[3]
let boolean = true
let object = {
    key: "string",
    age: 23,
    key3: false,
    key4: [{key1: "hei"},{ key1: "hade"}]
}
object.age
object.key4[1].key1

let litteralString = `denne kan ha i ${object.key3}` 
// sammenkoble

//operatorer
// +, -, *, /, %, ==, ===, !=, =
// console.log(101 % 10)
// console.log("hei" + " " + variabel)

// = definere
// == betyr at verdien er det samme
// === verdien er det samme men type er det samme
// != not equals too

// +=, -=, /=, %=

let sum = 5

sum += 5
// console.log(sum)
let favorittBand = "gorillaz"
// console.log(favorittBand)
favorittBand = "Nirvana"
// console.log(favorittBand)
let navn = "Leah"

const kode = "hei " + navn + "! "
let lucky = 11
function start() {

    if(lucky === 23 && navn === "per" || lucky === 11) {
        console.log("YAHOOO PER")
    } else if (lucky === 23 || navn === "Leah") {
        console.log("YAHOOOO")
    } else if (lucky === 15) {
        console.log("YAHOOOO 15")
    }else if (lucky === 12) {
        console.log("YAHOOOO 12")
    } else {
        console.log("ikke yahoo")
    }
}


// || or operator
// && and operator

// condition     if true run            if false run
// lucky === 23? console.log("yippe"): console.log("ikke yippe")

// switch(lucky) {
//     case 23: {
//         console.log("yippe")
//     }
//     case 15: {
//         console.log("yippe 15")
//     } 
//     default: {
//         console.log("ikke yippee")
//     }
// }

start()

// putt antall på ingridienser og legg di inn i brownies
let ingridents = ["egg", "hvetemel", "melk", "sjokolade pulver", "vanilje sukker", "sukker"]
let brownies = []


if (ingridents[0] == "egg") {
    let antallEgg = "4 "
    antallEgg += ingridents[0]
    // console.log(antallEgg)  
    brownies.push(antallEgg)
}
if (ingridents[1] == "hvetemel") {
    let antallMel = "3.5dl "
    antallMel += ingridents[1]
    brownies.push(antallMel)

}
if (ingridents[2] == "melk") {
    let antallMelk = "1dl "
    antallMelk += ingridents[2]
    brownies.push(antallMelk)

}
if (ingridents[3] == "sjokolade pulver") {
    let antallSP = "5s "
    antallSP += ingridents[3]
    brownies.push(antallSP)

}
if (ingridents[4] == "vanilje sukker") {
    let antallVS = "4ts"
    antallVS += ingridents[4]
    brownies.push(antallVS)
    
}
if (ingridents[5] == "sukker") {
    let antallS = "4.5dl "
    antallS += ingridents[5]
    brownies.push(antallS)
    
}
// console.log(typeof brownies)

// console.log(ingridents)
// console.log(brownies)
if (brownies.length <= 5) {
    // console.log("cake is not done")
} else {
    // console.log("you have everything")
    bake()
}


function bake() {
    // console.log("baking....")
    brownies = "delicious brownies"
    // console.log(brownies)
}
// let mystring = 1 
// // 1
// mystring++
// // 2

// // 2
// ++mystring
// // 2

// ++ = + 1

// += = variable + noe annet

// console.log(mystring)
// {
//     name: "Meta Quest 3S 128GB",
//     ratings: 4,
//     pictures: 
//         ["url", "url", "url"],
//     price: 3390,
//     color: undefined,
//     size: ["128 gb", "256 gb"]
// }


let stringB = ""

++stringB
// console.log(stringB, typeof stringB)

for (let i = "0"; i != "3"; i++) {
    console.log(i)
    
}