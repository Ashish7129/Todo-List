/*
var obj=
{
    b:20,
    a:10,
    c:30
}

let b = Object.create(obj)
// we can create an object like this

let c = Object.create(b)    

let a3 = Object.assign({}, obj) // assign the copy of the object

a3 == obj //false 

//class via functions
function Person(name, age)
{
    this.name =  name
    this.age =  age
}

let p = new Person('hello', 2)
//es5_classes

class person1{
    constructor(a,b){
        this.a =  a;
        this.b = b;
    }
}

let p1 = new person1('hello', 2)  // Run
let q = new person1('hello', 2) // Error


// debugger 

//higher order function : function calling function , function return object(function)
//greeting generator    




*/


let clicked = 0
let btnWait = document.getElementById("wait")
let btnOther = document.getElementById("other")
let divText =  document.getElementById("text")


btnWait.onclick = function(){
    let start = Date.now()
    //while(Date.now() < start+5000){} // we can use setTimeOut function instead of this
    // setTimeout is a property of browser
    setTimeout(function()
    {
        divText.innerText = "The wait is over"
    },5000)
    
}

btnOther.onclick =  function () {
    console.log(clicked++)
}