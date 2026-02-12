import { adunare, scadere } from "./mathUtils.js"
import mesajSalut from "./salutari.js"
import * as utilizator from "./dateUtilizator.js"

console.log(utilizator.nume)
console.log(utilizator.varsta)
console.log(utilizator.oras)

mesajSalut()

let a = 10
let b = 5

console.log("suma:", adunare(a, b))
console.log("diferenta:", scadere(a, b))