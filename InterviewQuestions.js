// // // What is Hoisting? done
// // // How JS code executed? // done
// // // What is execution context ? done
// // // What is Scope? // done
// // // What is lexical scope ? // done
// // // What is diff b/w let var and const? done
// // // What is function statement? // done
// // // what is function expression?// done
// // // what is IIF (immediately invoked function)
// // // Which value in js in not defined ? done
// // // what is defined value and not defined value ? done
// // // Diff b/w null and undefined
// // // What is Hoisting? done
// // // What is tdz? done

// // // does let and const are hoisted ? done

// // // Js Engine creates a speacial environoment to handle all the js code like ,
// // // parshing , memory allocation , transformation and execution ,
// // // this environment is called the execution context

// // console.log(a); // undefined
// // var a = 20;

// // //TDZ

// // //  The area or block  from where a let and  const
// // // cannot be accesssible until the Js engine does not initilize or declare the varible

// // console.log(a1); // undefined
// // // console.log(b1);
// // // console.log(c1);

// // var a1 = 30;
// // let b1 = 40;
// // const c1 = 80;
// // let d1;

// // // var name1 = "Vishal";
// // // {
// // //   var name1 = "Sharma";
// // //     let name1 = "Verma";
// // //   console.log(name1); // verma
// // //   // const name ="Sharma1"
// // // }

// // // console.log(name1);
// // // Vishal , 'Sharma1, 'error'

// // // var=> redeclared , re assign  ,
// // // let => variable cann be re assig but cannot re-declared

// // // let name2 = "Sharma";
// // // // var name2= "Sharma"
// // // name2 = "Raj";

// // // console.log(name2);

// // // var nam3 = "ss";

// // // {
// // //   nam3 = "zzz";
// // //   var nam3 = "ZZZZ";
// // //   let nam3 = "ccccc"
// // // }

// // //  var can be redeclared and reassign
// // // let cannot be re declared any variable in same scope have declared with let  you cannot re-declared that with var and const
// // // let variable can be re- assign
// // // const variable cannot be re-assign and cannot be re-declared
// // // const variable need to initilize at the time declaration

// // // const cc; erro
// // const cc = "Vishal";
// // // cc="name" error

// // const call1224 = (callback) => {
// //   //     callback  = (a, b) => {
// //   //   return a + b;
// //   // };

// //   return callback(1, 2); // 3
// // };

// // const sum = (a, b) => {
// //   return a + b;
// // };

// // // call1224(sum(5, 6)); // call1224(11)

// // const data = call1224(sum); // here i am passing function as a reference , i am not calling the function
// // console.log(data);

// // // IIF

// // // The function invoked at the time of declaration

// // (function IIF() {
// //   console.log("Hey I am IIf");
// // })();

// // //console.log(IIF()); // this will throw error

// // const callme123 = () => {
// //   console.log("hey");
// // };

// // // (
// // //     callme123
// // // )() this is not iif becuuse here we are using callme123 which is already declared

// // (() => {
// //   console.log("Hey Arrow , iif");
// // })();

// // (function () {
// //   console.log("Hey I am anonymousx");
// // })();

// // Function execution context

// // var a = 30;
// // let b = 60;
// // const c = 80;

// // function getId() {
// //   console.log(a);
// //   //   console.log(b);
// //   //   console.log(c);
// //   var a = 90;
// //   let b = 900;
// //   const c = 600;
// //   return undefined;
// // }

// // const result = getId();

// // console.log(result);

// // console.log(a, b, c);

// // function statment , declaration
// //  function expression

// // console.log(getName);
// // getName();

// // console.log(getName3);
// // getName3();

// // console.log(getName1);
// // getName1();

// // console.log(getName2);
// // getName2();

// // // FUNCTION DECLARATION
// // function getName() {
// //   console.log("Hey");
// // }

// // const getName1 = () => {
// //   console.log("Hey, with const arrow function");
// // };

// // let getName2 = () => {
// //   console.log("Hey, with let arrow function");
// // };

// // var getName3 = () => {
// //   console.log("Hey, with var arrow function");
// // };

// // const getiDS = function () {
// //   console.log("Hey");
// // };
// // 2X+3Y+Z =20; // EXPRESSION

// // null undefined

// //undefined means value which is not defined
// // undefined is flasy value
// //typeof undefined =>
// // this value is assigned by the compiler at the time of memor allocation
// console.log(typeof undefined); // undefined

// var aaa; // undefined

// // Null means falsy value
// // it s assigned by developer
// // its a one type of value
// // typeof null
// console.log(typeof null);

// console.log("==", null == undefined);
// console.log("==", true == "vishal");

// console.log("===", null === undefined);

// // function statement/declration and function expression ??

// // expression
// // 2x+2y+z=40;

// // If you are assigning the any function that can be arrow function and normal functions
// // that is called function expression where where variable which is taking the value of whole function is hoisted like another normal value

// // here getEmployeeDetail is the variable type const

// // getEmployeeDetail(); // reference error
// // here  getEmployeeDetails2 is var varibale and value of that in this cases will be undefined and
// // if you try to call undefined as  functio  this will throw the error undefined is not a function
// // getEmployeeDetails2(); // undefined
// // getEmployeDetails3(); // reference error
// // all above method  are function expression

// // getAll is function statement  or declaration
// console.log(getAll, "getall");
// // getAll();

// // const getEmployeeDetail = () => {
// //   console.log("this is the employee details....");
// // };

// // console.log(typeof getEmployeeDetail); // function

// // var getEmployeeDetails2 = () => {
// //   console.log("this is the employee details1....");
// // };

// // let getEmployeDetails3 = function () {
// //   console.log("hey normal function");
// // };

// // // function declaration
// // // the function name variable is taken whole  the value as initial value
// // function getAll() {
// //   console.log("hey function statement");
// // }

// // getEmployeeDetail();
// // getAll();
// // getEmployeeDetails2();
// // getEmployeDetails3();

// function callMe() {
//   console.log(arguments); //
// }

// // in the case of arrow you cannot access the arguments inside the function
// // it will say arguments is not defined
// const callMe1 = () => {
//   //   console.log("arguments", arguments); // error
// };

// // In javascript you can pass any arguments does matter how many parameter function accepting

// // callMe(1234, 3456, 789); // / arguments.length  =>3
// // callMe(); // arguments.length  =>0
// // callMe1("vishal", "sharma", 888888);

// // // how to know the function name  ??

// // function Myname(param1, param2, param3) {
// //   console.log(Myname.arguments); //
// //   console.log(arguments);
// //   // function
// // }

// // console.log(Myname.name);
// // console.log(Myname.length); // functionName.length will give the count of parameter that particular function is accepting

// // console.log(Myname.arguments); //

// // Myname(); // local
// // //
// // Myname(1);
// // Myname(1, 2);
// // Myname(1, 2, 4);

// //
// // october  a,b
// // november  a,b
// // decemeber a,b

// // Type Conversion=> Either js engine or developer convert one type into another type

// // explicit type conversion(type casting) => developer

// // implicit type conversion (type coersion)=> js

// // if any arithmetic operator is happening in that case js implicityl convert things in number  value
// // but in +  operator if applied between string  and  number this  will consider number as string value

// var tt = +("20" + "30" + "40") + +"120" + "230"; // 203160230

// console.log("ans2", tt);

// var tts = -("20" + "30" + "50") - ("30" - "30" + 60);

// console.log("ans1", tts);

// // operand1 + operand1 => if any of the operand are strign than js convert another operand in string
// // 20 +'30' =>  2030

// //  +operand => here plus operator will try to convert given operand in number

// console.log(+"vishal"); // NaN

// //
// console.log(+true); //

// console.log(+false); // 0

// console.log(typeof +"a" === typeof "vishal"); // false
// // typeof NaN  ===  string
// //  number  === string

// console.log(typeof +"1" === typeof +"vishal"); // false

// // typeof +"1" =  number

// // typeof +"vishal" => typeof NaN =>number

// console.log("A" < "B"); //  true
// console.log("a" < "A"); // ASCII CODE OF 'a' IS GREATER THAN ASCII CODE OF A

// console.log('"2" < 3', "2" < 3);

// // "2" < 3 => 2<3 // true

// // what does isNaN function does and what is the return type of that?

// console.log(isNaN(NaN)); //
// // it will check whether given arguments is NaN or not after applying arithmetic operator on that Argument
// // if given parameter gives NaN while converting it into number that case isNaN gives you true value

// console.log(isNaN(true)); //  false
// console.log(isNaN(false)); // false

// console.log(isNaN([])); // false , +[]=>0
// console.log(isNaN({})); // true  , +{}=>NaN

// console.log(isNaN("      ")); // false
// console.log(isNaN([true, true, false, 1, 2, 3])); //  true

// console.log(isNaN([9]));
// console.log(isNaN(["vishal"]));

// // function MyisNaN(param1) {
// //   const s = +param1;
// //   if (s.toString() === "NaN") {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// console.log(NaN === NaN); // false
// console.log(NaN == NaN); // false

// // Developer  => I want to some support so that i should able to convert one type to another type

// const name1 = "Vishal";

// // const resultName = +"Vishal"; // => NaN

// const result = new Number(name1); //   NaN

// const a = new Number(8);
// // new String()
// // new Boolean();

// const number = 12345;
// // using toString method
// console.log(typeof number.toString());

// console.log(new String(number) + "Vishal");
// console.log();
// console.log(typeof new String(number)); // object

// console.log(new String(number)); //  String {'12345'}
// function Employee() {
//   return 123;
// }

// const employee = new Employee();

// console.log(employee);

// callback vs higher order function

// const callback = () => {
//   console.log("hey  ");
// };

// // Generally callback  function pass as a reference

// setTimeout(callback, 1000); // we passed name callback arrow function
// setTimeout(() => {
//   console.log("hey3");
// }, 2000); // we passed  anonymous callback arrow function

// callback function  can be arrow function normal function anonymous function , named function

const array = [1, 2, 3, 4, 5]; // =>  [{1:1} , {2:2} , {3:3} , {4:4}, {5:5}]

//
// const maped = array.map((value, index, array) => {
//   return {
//     [value]: value,
//   };
// });

function mapCallback(value, index, array) {
  return {
    [value]: value,
  };
}
// map can return  anything
const maped = array.map(mapCallback);
console.log("mapped", maped);

// function map(callback) {
//   // array
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
//   }
// }

// the function which takes the function as a argument or return function is called higher order function
// the function which is pass as a argument into hof is called callback function

// throttle
// debounce
// event delegation
// map filter and reduce ka polyfill
// slice vs splice
// shallow copy vs deep copy
// JSON.stringify()
// JSON.parse()
// What is event bubbling
// non-primitive data type pass by reference vs pass by value
// Array find method

// map for array

// Imperative statement(You have power to modify the things stop the program to run in cerntain condiotion)

// I have divided one week in three parts according to the topic
// first part covered mostl debouncing throttling at evening 6-8
// second part covered mostl array method at evening 3-7
// third part i covered rest of the topic

// declarative statement (result orieneted) you dont have power to modify things b/w until whole code execute
// Yes sir i have completed all the questions within 2 days

//Print all the array element
const array12 = new Array(12).fill(3); // [3,3,3,3,3,3,3,3,3,3,3,3]
// imperative
// for (let i = 0; i < array12.length - 5; i = i * 2) {
//   console.log(array12[i]);
// }

//

// method call
// this => array12
// here forEach is higher order function of array
// it takes onf function as a argument
// the function which took by the forEach is called callback function

// that callback functions takes three parameter

function printData(currentValue, currentIndex, originalArray) {
  console.log(currentValue, currentIndex, originalArray);
}

// here callback is passed as a reference in forEach higher order functions
// forEach traverse thorugh all the element if array and invoked callback function to the everu element
// array12.forEach(callback);

Array.prototype.myForEach = function (callback) {
  // ?? how array i will get
  // this => value of this will be the array which is accessing this method
  // const array  = this;
  if (typeof callback == "function" && typeof Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
};

// in method invocation  t
array12.myForEach(printData);

console.log(array12, "1234");

// I want to create my own forach  ???

[5, 6].myForEach((value, index, array) => {
  console.log(value * 100);
});

// Map  ??

// map => ladki

// ladka

const ar = [100, 50, 80, 40];
// newarr = > [yes , no, yes , no ]
function callback(value, index, originalArray) {
  if (value > 70) {
    return "yes";
  } else {
    return "no";
  }
}
const result = ar.map(callback);
console.log("result", result); // ['yes', 'no' , 'yes' ,'no']

Array.prototype.mymap = function () {
  // ?? how array i will get
  // this => value of this will be the array which is accessing this method
  // const array  = this;
  const result = [];
  if (typeof callback == "function" && typeof Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
  }
  return result;
};

const resultmymap = ar.mymap(callback);

// Events

const button = document.getElementById("button");

const callme1 = () => {
  console.log("hey");
};

button.addEventListener("click", () => {
  console.log("hey");
});
button.addEventListener("click", () => {
  console.log("hey");
});
button.addEventListener("click", () => {
  console.log("hey");
});
button.addEventListener("click", () => {
  console.log("hey");
});
button.addEventListener("click", () => {
  console.log("hey");
});
button.addEventListener("click", () => {
  console.log("hey");
});
button.addEventListener("click", () => {
  console.log("hey");
});

button.addEventListener("click", function getName() {
  console.log("name");
});
button.addEventListener("click", function getName() {
  console.log("name");
});
button.addEventListener("click", function getName() {
  console.log("name");
});
button.addEventListener("click", function getName() {
  console.log("name");
});
button.addEventListener("click", function getName() {
  console.log("name");
});
button.addEventListener("click", function getName() {
  console.log("name");
});
button.addEventListener("click", function getName() {
  console.log("name");
});

function callme() {
  console.log("Callme");
}

button.addEventListener("click", callme);
button.addEventListener("click", callme);
button.addEventListener("click", callme);
button.addEventListener("click", callme);
button.addEventListener("click", callme);
button.addEventListener("click", callme);
button.addEventListener("click", callme);
