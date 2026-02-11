var a = 1;
let b = "str";
const c = true;

function abc(test){
    return typeof(test);
}
console.log(abc(3))

console.log(Number("2"))
console.log(String(2))

let nume = "ion"
let varsta = 20;
console.log(`${nume} are ${varsta} ani`)

let aa = 2
let bb = 3
let cc = aa
aa = bb
bb = cc
console.log(`aa = ${aa} bb = ${bb}`)

function test1(abc){
    if(abc === null || abc === undefined){
        return abc;
    }
}
console.log(test1(null))

let pers = {
    nume: "test",
    num: 1,
    adv: true
}
pers.oras = "test 2"
delete pers.adv

//1.8

let arr = [1, "text", true, null, undefined]

for(let i = 0; i < arr.length; i++){
    console.log(typeof arr[i])
}

function suma(a,b){
 console.log(a + b)
}
suma(3,4)

function aria(l, i = 1){
    console.log(l * i)
}
aria(2)

let anon = (a) => {
    return a*a
}
console.log(anon(3))

function strMax(a){
    console.log(a.toUpperCase())
    return a.length;
}
console.log(strMax("te"))

//2.5
function dubl(a){
    return a*2
}

function princ(a){
    return {
    dublu: dubl(a),
    patrat: anon(a)
    }
}
console.log(princ(2))

let suma2 = (a,b) => a + b
console.log(suma2(3,4))

function apliFunctie(arr, functie){
    let rez = []
    for(let i = 0; i < arr.length; i++){
        rez.push(functie(arr[i]))
    }
    return rez;
}
let numere = [1,2,3,4]
let ptr = apliFunctie(numere, function(x){
    return x*x;
})
console.log(ptr)

let masina = {
    marca: "bmw",
    model: "g80",
    an: 2024
}
console.log(`${masina.marca} ${masina.model} ${masina["marca"]} ${masina["model"]}`)
masina.culoare = "rosu"
masina.an = 2025;
console.log(masina)

delete masina.model
console.log(masina)

for (iter in masina){
    console.log(`${iter}: ${masina[iter]}`)
}

masina.descriere = function(){
    return "Masina: " + this.marca + "model: " + this.an + "an: " + this.an;
}
console.log(masina)

//3.7
let obj = {
    nume: "test",
    varsta: "20"
}

function msg(p){
    return `ma numesc ${p.nume} am ${p.varsta} ani`
}
console.log(msg(obj))


console.log("culoare" in masina)

let casa = {
    adresa: {
        strada: "test",
        oras: "test 2"
    }
}
console.log(casa)

function createObj(nume, varsta, nota){
    return {
        nume: nume,
        varsta: varsta,
        nota: nota
    }
}
console.log(createObj("test", 12, 8))

let masinaClone = Object.assign({}, masina)
let masinaClone2 = {...masina}
console.log(masinaClone)
console.log(masinaClone2)

let calculator = {
    adunare: function(a,b){return a + b},
    scadere: function(a,b){return a - b},
    inmultire: function(a,b){return a * b},
    impartire   : function(a,b){return a / b}
}
console.log(calculator.adunare(2,3))

let {marca, an, model} = masina
console.log(marca)

//4
let arr2 = ["chisinau", "bucuresti", "sofia"]

console.log(arr2[0])
console.log(arr2[arr2.length - 1])

arr2.push("paris");
arr2.unshift("kiev");
arr2.pop()
console.log(arr2)

let arr3 = ["rosu", "verde", "negru", "alb"]
for(let i = 0; i < arr3.length; i++){
    console.log(arr3[i])
}

let animale = ["caine", "pisica", "vulpe", "iepure", "lup"];
animale.forEach((animale) => {
    console.log(`Animal preferat: ${animale}`)
})

let arr4 = [2,11,5,20];
function rtnNum(x){
    for(let i = 0; i < x.length; i++){
        if(x[i] > 10){
            console.log(x[i])
        }
    }
}
rtnNum(arr4)

let arr5 = [2,1,8,3,5,10,4]

console.log(arr5.sort((a,b) => a - b))

let arr6 = [2,1,8,3,5,10,4]

let patrate = arr6.map(x => x*x)
console.log(patrate)

let arr7 = [2,1,8,3,5,10,4]
console.log(arr7.reduce((total, numar) => total + numar, 0))

console.log(arr7.includes(2))
console.log(arr7.indexOf(2))

let a1 = ["salut", "ce"];
let a2 = ["faci", "azi"];

console.log(a1.concat(a2))
console.log([...a1, ...a2])

let arr8 = [
[1,2],
[3,4]];
console.log(arr8[0][1])

let arr9 = [1,2,2,3]
function eliminaDuplicate(arr) {
    return arr.filter((element, index) => arr.indexOf(element) === index);
}
console.log(eliminaDuplicate(arr9))

let arr10 = [10, 20, 30, 40, 50];
let subArr = arr10.slice(1,4)
console.log(subArr)
console.log(arr10.splice(2, 1));

//5
    setTimeout(() => {
        console.log("mes")
    }, 3000)

   let nr1 = 1

    let timer = setInterval(() => {
        console.log(nr1)
        nr1++

        if (nr1 > 5) {
            clearInterval(timer)
        }
    }, 1000)


    function salut(callback) {
        console.log("test")
        callback()
    }

    salut(() => {
        console.log("apel")
    })


        function promiseFunc() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("rezolvat")
            }, 2000)
        })
    }

    promiseFunc().then((msg) => {
        console.log(msg)
    })


    function verificare(ok) {
        return new Promise((resolve, reject) => {
            if (ok == true) {
                resolve("este")
            } else {
                reject("nui")
            }
        })
    }

    verificare(true)
        .then((msg) => console.log(msg))
        .catch((err) => console.log(err))


    function f1() {
        return new Promise((resolve) => {
            resolve("promisiunea 1")
        })
    }

    function f2() {
        return new Promise((resolve) => {
            resolve("p 2")
        })
    }

    function f3() {
        return new Promise((resolve) => {
            resolve("p 3")
        })
    }

    f1()
        .then((rez1) => {
            console.log(rez1)
            return f2()
        })
        .then((rez2) => {
            console.log(rez2)
            return f3()
        })
        .then((rez3) => {
            console.log(rez3)
        })

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log("erroare:", error);
        });

    let aa1 = new Promise((resolve) => setTimeout(() => resolve("aa1 ok"), 1000));
    let aa2 = new Promise((resolve) => setTimeout(() => resolve("aa2 ok"), 2000));
    let aa3 = new Promise((reject) => setTimeout(() => reject("aa3 err"), 1500));

    Promise.all([aa1, aa2])
        .then((rez) => console.log("Promise.all:", rez))
        .catch((err) => console.log("Promise.all eroare:", err));

    Promise.allSettled([aa1, aa2, aa3])
        .then((rez) => console.log("Promise.allSettled:", rez));

// mathUtils.js
// export function adunare(a, b) {
//     return a + b
// }

// export function scadere(a, b) {
//     return a - b
// }

// main.js
// import { adunare, scadere } from "./mathUtils.js"

// let a = 10
// let b = 5

// console.log("suma:", adunare(a, b))
// console.log("diferenta:", scadere(a, b))
    

// salutari.js
// export default function salut() {
//     console.log("salut")
// }


// main.js
// import mesajSalut from "./salutari.js"

// mesajSalut()

// dateUtilizator.js
// export let nume = "ion"
// export let varsta = 20
// export let oras = "chisinau"



// main.js
// import * as utilizator from "./dateUtilizator.js"

// console.log(utilizator.nume)
// console.log(utilizator.varsta)
// console.log(utilizator.oras)