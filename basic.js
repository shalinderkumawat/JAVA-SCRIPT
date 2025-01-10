
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

// var name=['lol' , 'kol' , 'mol' , ' ']

// const month=['jan' , 'feb', 'mar' , 'apr'];
// const index=month.indexOf('jan');

// if(index != -1)
// {
//     const update= month.splice(index , 10 , 'jan');
//     console.log(update);
//     console.log(month);
// }
// else {
//     console.log('not found');
// }


// ----------------------------------------------------------
// Array.prototype.map()
//  array MAP method in js 
// returns element for newArray , after executing somthing 
// }[, thisArg];

// Return a new array containing the results of calling a and it's not a change your orignal array  
// function on every elementy in this array 

// this is first use this map
// and it's return a new array 


// const a = [1,4,9,16,25]

// let newr =  a.map((curElem , index , arr) =>{
//     return curElem != 9;
// })

// console.log(newr);

// -----
// this is second use this map 
// -----
// const a = [1,4,9,16,25]

// let newr =  a.map((number , index , arr) =>{
//     return `this is number ${number} and the index is ${index}`;
// })

// console.log(newr);

// Q1. find the square root of each element in an array?
// Q2. multiply each element by 2 return only an array element which are grater than 10?

// ans .1 
// let a=[1,2,3,4,5,6];
// debugger;
// let ans = a.map((num) => {
//     return Math.sqrt(num);
// });
// console.log(ans);

// ans .2
// let a=[1,2,3,4,5,6];
// debugger;
// let ans = a.map((anss) => {
//     return anss *2;
// }).filter((anss) => {
//     return anss >10;
// }
// );
// console.log(ans);

// --------------------------------------------------------
// Reduce method in js 
// flatten an array means to convert the 3rd or 2ed array into a 
// single dimentaional array

// The reduce() methpod executes a reduce function (that you provide )
// on each element of the array , resulting in single output value. 

// the reduce function takes four arguments;

// Accumulator 
// Current Value 
// Current Index 
// Source Array

// const b
// let arr = [5,4,2];
// let sum = arr.reduce((accumulator , curElem ,  index , arr) => {
//     console.log(accumulator);
//     b=accumulator;
//     return accumulator = accumulator + accumulator;

    
// })
// console.log(b);

// console.log(sum);

// nn bb ss u 
// data types in js 
//  primitive data type in js
// let a =null;
// let b=3;
// let c=-12;
// let d=true;
// let e="hello";
// let f=3.14;  

// let a=prompt("Enter your stranth :");
// switch(a){
//     case 1:
//         console.log(`your stranth is ` , a);
//         break;
//     case 2:
//         console.log(`your stranth is `, a);
//         break;
//     case 3 :
//         console.log(`your stranh is ` , a);
//         break;
//     default :
//     console.log(`your stranth is ` , a);
//     break;
        
        
            
// }
// this is object in js
// let a={
//     harray : 20, 
//     kumawat: 30,
//     shailendra: 40,
//     name: "shailendra"
// }
// console.log(a +"this is vary is : "+ a.shailendra);
// console.log("this is simple value ");
// console.log("this is for in loop");

// for(let  b in a)
// {
//     console.log(b);
    
// }
// // this is for of loop
// for(let c of "shailendra" )
// {
//     console.log(c);
    
// }
/* 
let obj = {
    name : "shailendra",
    age : 20, 
    gender : "mail",
    address : "delhi"
}

// this is simple for loop 

for(i=0;i<Object.keys(obj).length;i++)
{
    console.log("MY SELF : "+ Object.keys(obj)[i]+" "+obj[Object.keys(obj)[i]])
} 

// and this is for in loop 

for(let i in obj)
{
    console.log(i);
    
}
    */

// let password = "12345@kumar"

// let i

// while(i!=password)
// {
//     i=prompt("Enter Your password : ");
// }
// console.log("you have enter a correct number ");

// what is string interpolation in js 
// ans => the string interpolation is typeof string and it is moern string part in this use back tick throw the back tic user can able to exies to the variable this is the most use case in js 
    

// for(let a=1;a<=10;a++)
// {
//     // 2
//     console.log(a);
    
// }


// function a (){
//     console.log("hello");
//     console.log("this is my simple function");
    
// }

// a();

// const ab = () =>{
//     console.log("hello");
//     console.log("this is my new function ");
    
// }



// const a="12345678\n";
// console.log(a.length);
// a.toUpperCase();
// console.log("this is my UpperCase vlaue you can see ha ha ha ha ha ha  ha h hah hah h aha ha h haah  haah h ah hhah a ha hah a ha")
// console.log(a);
// console.log("This is lowercse value")
// console.log(a.toLowerCase(a))
// const b="         this is my String"
// console.log(b.slice(2, 4));
// console.log(b + `This is my orignal string you can see and after theat this is my trime string`);
// console.log(b.trim());
// const n="manish"
// for(let i=0;i<n.length;i++)
// {
//     console.log(n[i]+" ")

// }

// i was work with string and in this string i was do like how to show the stirng and change the lowercasr to upercase and use the ternary operator

// const string="this is start"
// console.log(string.startsWith("this")?"yes this is right":"not this is not right this is not trught")

// console.log(string.toLowerCase()?string.toUpperCase():string.toLowerCase())

// let strin1="the amount is RS 100"

// let amount = strin1.slice("the amount is    ".length)
// console.log(amount);
// console.log(Number.parseInt(amount))

// let a = [1,2,3,4,45,5,6]
// console.log(a);

//  let a =[1,2,3,4,5,6,7];
// //  this is join method it's work like if you want a value return and print whit the array a index value os you can use this join method 
//  console.log(a.join( " NUMBER ")) 
// // this is pop method IDBTransaction's work removing the value into a array 
//  console.log(a.pop())
//  console.log(a)
//  console.log(a.pop())
//  console.log(a)

// //  this is push method this is not a return a new array it is insert a same value and same array
//  console.log(a.push("poss"))
//  console.log(a)

// this is shift method it's work remove the starting element in this array
// console.log(a.shift())
// console.log(a);

// this is delee keyword it's work like remove the element in this array and it's work a indexing 
// console.log(a.length)
// delete a[0];
// console.log(a.length);
// this is concat 
// let b=a.concat(a);
// console.log(b);

// let a =[ "a", 1,90,3,4,5,"salkdf"]
// // console.log(a.sort());
// console.log(a.reverse())
//   console.log(a.splice(2 , 1 , "hi" , "Shailendra", "this"))
//   console.log(a);


// how to runthe for each loop in this java script 

// const a=[13,4,5,6,6,7,8,2];
// a.forEach((element) => {
//     console.log(element)
// })
    

// const a=[1,2]

// do{
//   const  aa=prompt("Enter the number of a value ")
//     aa=Number.parseInt(aa)
//     a.push(aa)
// }
// while(a!=0)

// const swap = ( a, temp , i)=>{
//         if(a[i]>=temp[i+1])
//         {
//             console.log(number + a[i] 
//         }
// }
//  let a =[1,2,3,4,5,6,6,5,4,3,2,112]
//  for(let i =0; a.length;i++ )
//  {

//  }
// console.log();
// obj = {1: "number1" , 2: "number2" , 3: "number3" , 4: "number4"}
// // this is print the table forme it's is method consolew class 
// console.table(obj)
// console.warn("this is not a valide value")

// console.time(obj)
// console.timeEnd(obj)

// let runAgo = true;
// const canDrive = (age) =>{
//     return age>=18?true:false;
// }
// while(runAgo)
// {
//   let age =  prompt("Enter your age");
//   if(canDrive(age))
//   {
//     alert("You can drive the car");
//   }
//   else 
//   {
//     alert("You can't the car sorry");
//   }
//   runAgo = prompt("You want ago run this function ")?true:false;
    
// }
// let value=true;
// while(value){
// let background = prompt("Enter the color name " );
// document.body.style.background = background
// value  = prompt("want the change the background color");
// }
