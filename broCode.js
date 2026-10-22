
/*console.log("Keda");

let name="Kedir";
let age=21;
enrolment=false;

document.getElementById("p1").textContent=" Your Name: " + name;
document.getElementById("p2").textContent="You are "+ age+" years old";
document.getElementById("p3").textContent+=" enrolment: " + enrolment;

//Arithmetic operation
let student=30;
student/=23;

console.log(student.toFixed(2));

// How to accept from user input
*/
/*username=window.prompt("What is your name");
console.log(username);


document.getElementById("mysubmit").onclick=function(){
    username=document.getElementById("mytext").value;
    document.getElementById("para1").textContent=username;
}
*/
/*
// type Conversion
let ages=window.prompt("How old are you?");
ages=Number(ages);
ages+=3;
console.log(ages, typeof ages);

let x="Pizza";
let y=['Kedir','Hawa','Abdelhakim'];
let z=21;
let h,k;

x=Number(x);
h=String(y); // h is space of string changed y
z=Boolean(z);
k=Object(x);
console.log(x, typeof x);181
console.log(h,typeof h);
console.log(z, typeof z);
console.log(k, typeof k);
*/
/*
// const
const pi=3.1415;
let radius;
let circumference;

circumference= 2 * pi * radius;
console.log(circumference);


radius=window.prompt("Enter the radius of the circle");
//radius=Number(radius);
circumference=2 * pi * radius;

console.log(circumference);


document.getElementById("sub1").onclick=function(){
    radius=document.getElementById("text1").value;
    //radius=Number(radius);
    circumference=2 * pi * radius;

    document.getElementById("hh4").textContent=circumference;
}
*/
// Counter
/*
const decrease=document.getElementById("decreasebtn");
const reset=document.getElementById("resetbtn");
const increase=document.getElementById("increasebtn");
const countlabel=document.getElementById("countlabel");
let count=0;
increase.onclick=function(){
    count++;
    countlabel.textContent=count;
}
decrease.onclick=function(){
    count--;
    countlabel.textContent=count;
}
reset.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
*/
// Math build in function
/*
let x=3.21;
let y=22.6;
let z;
z=Math.round(y);
z=Math.floor(x);
z=Math.coil(x);
z=Math.trunc(x);
z=Math.pow(x,y);
z=Math.sqrt(x);
z=Math.log(x);
z=Math.sin(x);
z=Math.cos(x);
z=Math.tan(x);
z=Math.abs(x);
z=Math.sign(x);

let max=Math.max(x,t,z);
let min=Math.min(x,y,z);

console.log(z);
*/

//Random number generator
/*
let randum=Math.random();
console.log(randum);;



const min=50;
const max=100;
let randomNum=Math.floor(Math.random()*(max))+min; // integer number;

console.log(randomNum);
*/

// If Statement
/*
let age=25;
if(age>18){
    console.log("You are enough to enter the site");
}
else{
    console.log("You must be 18+ to enter this site");
}

let time=9;

if(time<12){
    console.log("Good Morning");
}else{
    console.log("Good afternoon");
}

let isStudent=false;
if(isStudent){
    console.log("You are a student");
}else{
    console.log("You are not a student");
}
*/

/*
let age=15;
let hasLicense=true;

if(age>17){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("You have your license");
    }else{
        console.log("You do not have your license yet!");
    }
 }
 else{
        console.log("you must have 17+ to have a license");
    }
*/

// Ternary operator
/*
let age=21;
let message=age>=18? "Your are adult": "You are a child";
console.log(message);

let time=16;
let greeting=time<12?"Good morning":"Good Afternoon";
console.log(greeting);

let isStudent=true;
let message1=isStudent? "you are a student": "you are not a student";
console.log(message1);

let purchaseAmount=125;
let discount=purchaseAmount>=100? 10:0;
console.log("your total is " + discount );
*/
//Switch
/*
let day=3;

switch(day){
    case 1:
        console.log("Monday");
       // break;
    case 2:
        console.log("Teusday");
       // break;
    case 3:
        console.log("Wednesday");
       // break;
    case 4:
        console.log("Thursday");
       // break;
    case 5:
        console.log("Friday");
       // break;
    case 6:
        console.log("Saturady");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Out of the range");
}
*/
/*
let testScore=62;
let letterGrade;

switch(true){
    case testScore>=90:
        letterGrade='A';
        break;
    case testScore>=80:
        letterGrade='B';
        break;
    case testScore>=70:
        letterGrade='C';
        break;
    case testScore>=60:
        letterGrade='D';
        break;
    case testScore>=50:
        letterGrade='E';
        break;
    default:
        letterGrade="F";
}
console.log(letterGrade); //D

//string Method
let username="KedaTech";
console.log(username.charAt(0)); // K
console.log(username.indexOf('T')); // 4
console.log(username.lastIndexOf("e")); //5
console.log(username.length); // 8
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.repeat());


let phonenumber="981607081";
phonenumber=phonenumber.replaceAll("8","4");
console.log(phonenumber);//941607041
phonenumber=phonenumber.padStart(10,"0");//zero add left until 10 lenth
console.log(phonenumber);// 0941607041

const fullname="Kedir Moahmmed";
let firstname=fullname.slice(0,5);//last index not include
let lastname=fullname.slice(6,15);
let firstChar=fullname.slice(0,1);
let lastChar=fullname.slice(-1)
console.log(firstname); //Kedir
console.log(lastname);  //Mohammed
console.log(firstChar); //K
console.log(lastChar);  // d

const email="keda@gmail.com";
let username1=email.slice(0,email.indexOf("@"))
let extension=email.slice(email.indexOf("@"));
let extension1=email.slice(email.indexOf("@")+1);

console.log(username1);// ked
console.log(extension);// @gmail.com
console.log(extension1); //gmail.com
*/
// Method chaininig- calling one method after    another in one continues line of code


// let username=window.prompt("please enter your username");
// username=username.trim();
// let letter=username.charAt(0);
// letter=letter.toUpperCase();

// let extrachars=username.slice(1);
// extrachars=extrachars.toLowerCase();
// username=letter + extrachars;
// //in oneline
//  username=username.trim().charAt(0).toUpperCase() + username.trim().slice().toLowerCase();
// console.log(username);

// Logical operator - used to combine and manipulate boolean value

// const temp=12;
// if(temp>0 && temp<=30){
//     console.log("the weather is good");
// }
// else{
//     console.log("The wheather is bad");
// }

// Assignment operator

const pi=3.14;
if(pi==="3.14"){
    console.log("that is pi");
}
else{
    console.log("that is no pi");
}
//While loop

// let  username="";
// while(username===""){
//     username=window.prompt("please enter your username")
// if didn't enter username , by default null
// }
// console.log("Hello ", username);

// let  username="";
// while(username==="" || username==null){
//     username=window.prompt("please enter your username")

// }  // cann't skip,must enter username
// console.log("Hello ", username);

// do while loop
// let  username="Keda";
// do{

// username=window.prompt("please enter your username")

// }while(username==="");

// console.log("Hello ", username);
/*
let loggedIn=false;
let username;
let password;

while(!loggedIn){
  username=window.prompt("Enter your username");
  password=window.prompt("Enter your password");

  if(username==="myUsername" && password=="myPassword"){
    loggedIn=true;
    console.log("You are logged In!");
  }
    else{
    console.log("Invalid credentials! please try again");
  }

}*/
// For loop
for(let i=0;i<20;i++){
    if(i==13){

        continue;
    }
    console.log(i);
}

// Number guessing

const minNum=1;
const maxNum=100;
const answer=Math.random()*(maxNum - minNum +1);
console.log(answer);

let attempt=0;
let guess;
let running=true;
while(running){
guess=window.prompt("guess a number between 1 &100")
    running=false;
}
