console.log("hellö");
//Everthing is 
//strongly typed vs weak typed 
// statically typed(checking of statements before complication) (c++ and java)
//vs dynamically typed (javascript)
// there are no datatypes for variables

let x =10 // block scope
console.log(x)

//https://cb.lk/ngr1802 for sessions 


//data types 

console.log(typeof 10)
console.log(typeof 10.1)
console.log(typeof true)
console.log(typeof 'asas')
console.log(typeof 's')

//objects in javascript
let obj =
{
    a:10,
    b:'asgg'
}

console.log(typeof obj); //object
console.log(typeof obj.a);  //number


let arr =[10,'ass',true];
Array.isArray(arr) //true
Array.isArray(obj) //false


if(true){
    let x =10
    console.log(x) // 10
}
console.log(x) // Reference Error 

"use strict"
console.log(x) //undefined forvar and error for let
var x =10


// block support and function support 
//var types 
var c =10
if(true)
{
    var c =20
    console.log(c)
}
console.log(c)

//let types
let c =30
if(true)
{
    let c =40
    console.log(c)
}
console.log(c)

//const changed the value inside the object  

const a=10
a =11


// functions 

function sqr(a,b){
    return a * a + b * b
}

console.log(sqr(10,20)) // 500
console.log(sqr('s','a')) // NaN


let x = null
let y =  undefined
let a
x++ //0
y++ //NaN
a //undefined
typeof a            //undefined
z                   //Error Not defined (interpreter never show z)
typeof z            // undefined 
typeof x            //object


//narrow to wide (implicit)


function area(a,b=a)
{
    return a * b
}

console.log("rect area = " + area(5,6))

function mult(...ops)//varargs
 {

}