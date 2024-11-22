
// operator + , - ;

// var a =1;
// a++;
// var nam ="this";
// console.log(5 + 5 + nam);

// this is swap 

// var a=5;
// var b=3;
// console.log("this is without swap value : "+ a);
// console.log("This is without swap value : "+b);
// var c=a;
// a=b;
// b=c;
// console.log("This is swap value : "+a);
// console.log("This is swap value : "+b);
// console.log(a==a);
// console.log(b==b);

// a=a+b;
// b=a-b;
// a=a-b;
// console.log("This is swap value : "+a);
// console.log("This is swap value : "+ b);


// dif == and ===

// var a=1;
// var b='1';

// // this is check only number value 
// console.log(a==b);
// // this is check varibale type and also check value
// console.log(typeof(a));
// console.log(typeof(b));

// console.log(a===b);

// ---------------------------------------------------------------

//  else if condition 

// leap year 

// var year=2020;
// debugger;
// if(year%4==0)
// {
//     if(year% 100==0)
//     {
//         if(year%400==0)
//         {
//             console.log("the year " + year + " is a leap year")
//         }
//         else 
//         {
//             console.log("this is not leap year");
//         }
//     }
//     {
//         console.log("the year " + year + "is a leap year")
//     }
// }
// else 
// {
//     console.log("this is not leap year");
// }
// ---------------------------------------------------------
// what is truthy value and falsy value in js 

// Ans = falsy contain = 0 , undefined , null ,NaN , false 

// var a=1;
// if(a==0)
// {
//     console.log("this is : "+true);
// }
// else 
// {
//     console.log("This is : "+ " , "+ false +" , "+ NaN +" , "+ undefined +" , "+ 0 +" , "+null )
// }

// ternary operator 

// var age =19;
// (age>=18)? console.log("you can vote "): console.log("you can't vote");
// console.log(age);

// -----------------------------------------------------------------------------

// loop 

// var a=5;
// while(a<=10)
// {
//     console.log(a);
//     a++;
// }
// console.log("This is do while loop")
// do{
//     console.log(a);
//     a--;
// }
// while(a>=0);
// console.log("This is for loop ")
// for(a;a<=10;a++)
//     debugger;
// {
//     console.log(a);
// }

// function 

// function sum(){
//     var a=10;
//     var b=10;
//     console.log(a+b);
// }
//     //function calling  
// sum();

// function argument

// function sum( a, b)
// {
//     var total=a+b;
//     console.log(total);
// }
// var a=10;
// var b=90;
// console.log(sum(a,b))


// make a varibale

// function sum( a, b)
// {
//     var total=a+b;
//     console.log(total);
// }
// var a=10;
// var b=90;
// var j= sum(a,b);
// console.log("this is j var "+j)

// ----------------------------------------------------------------

// anonymous function expressions 

// this is anontmous function
// function(a,b ){
//     console.log("nothing");
// }

// and this is anonymous function expressions

// var a =function(a, b)
// {
//     return (divide = a+b)  ;
// }
// var sb=a(3,5);
// console.log(a(2,9));
// console.log(sb);

// ---------------------------------------------------------------

//  dif between var let and const 
// const it's fix value contain only and value doees not update 

// const name="this";
// console.log(name);
// function biodata(){
//     debugger;
//      name="shailendra";
//     console.log("This is first : "+name);
//     name="kumawat";
//     console.log("This is change value : "+name);
// }
// biodata();

// var it's provid the frature you can use any scope in your code 
// it's like a instanse variable 

// var name="this";
// debugger;
// console.log(name);
// function biodata(){
//      name="shailendra";
//     console.log("This is first : "+name);
//     name="kumawat";
//     console.log("This is change value : "+name);
// }
// biodata();

// var => function scope 
// let and const => block scope

// function nameis(){

//     let name="this";
//     if(name=="this")
//     {
//         let lastname ="is my ";
//         console.log(lastname);
//         console.log(name);
//     }
   

//     console.log(name);
//     console.log(lastname);
//     // it's give the error 
//     // just beacuse let varibale scope only block
// }
// nameis();

// -------------------------------------------------------------------------------

//  Template literals (Template strings) =>  console.log(`${mul} * ${i} = ${mul*i}`)
// javaScript program to print table for given number (8) ?

// output : 8*1=8
       //   8*2=16
        // 8*10=80

        // i can use for loop 
 
// for(let i=1;i<=10;i++)
//     {
//         let mul=2;
//         // this is simple and take a more time 
//         // console.log(mul + " * "+ i + " = " + mul*i);

//         // this is second way fo create tabel 

//         console.log(`${mul} * ${i} = ${mul*i}`)
//     }        
// -------------------------------------------------------------------

// Default Parameters 
// it's initiliz with default values if no value provide the use so thare it varibale take a default 
// and how to give the default value of a variable b=5 and you can change your value type 
// function (a , b=5)

// function mult(a,b=6)
// {
//     return a*b;
// }
// console.log(mult(5));

// ---------------------------------------------------------------------





// Fat arrow function 
// first normal Function 

// function sum(){
    // let a=5 ;
    // let b=6;
    // return `This sum of two number is  : ${a+b}`;
// }
// console.log(sum());

// this is convert to fat arrow functio 

// Arrow function condition's 1. you can define and than you can call 
// and if you craet a only one line code in arrow  function so does not use a return keyword 

// const sum = () =>{
//     let a=5 ;
//     let b=6;
//     return `This sum of two number is  : ${a+b}`;

// }
// console.log(sum());

// just like this 
// and if you craet a only one line code in arrow  function so does not use a return keyword 

// const sum = () =>{
//     `This sum of two number is ${(a=6)+(b=7)}`;
// }
// console.log(sum());

// ------------------------------------------------------------

// Array in js 
// Array is a collection of data types like string, number, boolean, object, array, null
// and undefined
// array js file contain a Array class and new is a predifine keyword in js 
// FIRST TYPE  let arr = [1,2,3,4,5,6,7,8]
// SECOND TYPE let arr = new Arrays; /it's optionl 
// arr=
// let name=[1,2,3,4,5,6,7];
// for(let i=0;i<name.length;i++)
// {
//     console.log(name[i]);
// }

// ------------------------------------------------------------
// how to get length in array => throw the .length

// loop in js 
// 1.  for simple
// 2.  for in
// 3.  for of
// 4.  for eatch
// 2. for in this is give the index value ;

// var name=[1,2,3,4,5,6,76,3];
// for(let element in name)
// {
//     console.log(element);
// }

// 3. for of this is give the value in js

// var nema=[1,2,3,4,5,6];
// for(let element of nema)
// {
//     console.log(element);
// }

// 4. for eatch loop
// Array.prototype.forEach()
// call a function for each element in the array

// var name=[1,2,3,4,5,65,6,7,77,2];
// name.forEach(function (element , index , array)
// {
//     console.log(element + " index " +index +"    : "+ array);
// });

// this is arrow function in foreach loop

// var name=[1,2,3,4,5,65,6,7,77,2];
// name.forEach((element , index , array) =>
// {
//     console.log(element+" " + index + "     : "+ array);
//  });
// ----------------------------------------------
// indexof 
// ----------------------------------------------
// var name=[1,2,3,4,5,65,6,7,77,2];


// if (name.includes(5)) {
//     console.log("Index of 5:", name.indexOf(5));  // Output: 4
//   } else {
//     console.log("5 is not in the array.");
//   }

// ----------------------------------------------
// splice
// ----------------------------------------------
// var name=[1,2,3,4,5,65,6,7,
// 77,2];
// name.splice(3, 2, 10, 20, 30);
// console.log(name);
// ----------------------------------------------
// 
// new method push()
// const name=['komal' , 'grima' , 'ankit' , 'manish'];
// console.log(name);
// name.push('komal');
// console.log(name);

// unshift method 
// const name =['komal', 'grima' , 'manish'];
// console.log(name);
// name.unshift('sanker');
// console.log(name);

//------------------------------------------------------------------
// pop this is new  method 
// it's work like a delet in array 

// var name=['string', 'new', 's;d' , 'sdklf 4'];
// console.log(name.pop());

// ---------------------------------------------------------
// shift this is new method
// it's also work like curd operation in java script and also it's insert in array 

var name=['lol' , 'kol' , 'mol' , ' ']