
// variabler
let variabel = "hei"
    // const let
const variabel2 = "hade"

variabel = "heisann"

    // ariabel2 = "hade"
//string, tall, array, boolen, object, litteral string
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
// +, -, *, /, %
// console.log(101 % 10)
// console.log("hei" + " " + variabel)

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