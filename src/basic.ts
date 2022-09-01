let nama : string = "hfdz";
let umur: number | string = 30;
let isTrue: boolean = false;
type GolonganDarah = "A" | "B" | "O" | "AB";

//aritmethic operator
let a = 1 + 1;
let b = a % 2;
let c = 100;

c++; // c = 101 karena itu sama dengan c = c + 1

// assigment operator
c = c * 1;
c *= 1;

// comparison operator
let z = 10;
let x = 5;
let v = z < x; // < : =

// logical operator
let aa = true;
let bb = false;

let cc = aa && bb; // || !aa

// if else
let aaa = 10;
let bbb = aaa + 1;

if(aaa < bbb) {
    console.log('aaa lebih kecil dari');

    
} else {

    console.log('a lebih besar dari b');
    
}

console.log(cc);



console.log(v);

function checkGolonganDarah(gd : GolonganDarah) : void {
    console.log(gd);
}

checkGolonganDarah("A")


umur = "40";

// function biasa
function getNama() : string {
    return nama;
}

function getNoReturn() : void {
    console.log("function void")
}

function getData(param1 : string = "default value param1") : void {
    console.log(param1);
}

// anonymous
let f = function() : string {
    return nama;
}

let fVoid = function() : void {

}

let anonymFunction = function(param1 : string) : string {
    return nama;
}

let arrowFunction = (param2 : string) : string => nama;

console.log(getNama());

getNoReturn();

getData();

//anonymous
console.log(f());
fVoid();

console.log(anonymFunction("param1"));
console.log(arrowFunction("param2"));