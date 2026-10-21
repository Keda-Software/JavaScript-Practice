/*
console.log("Keda tech web development trainings");

console.log(3+5);
console.log(3-2);
console.log(3%2);
console.log(4**3);
let x=12;
console.log(typeof x);

console.log("hello africa");
let w=78;
x+=w;
console.log(x);

// 0925724930 //a
let str="Mohammed";
let st="Kedir";
console.log(75>23);
 console.log(451>45 ? st : str);
 console.log(87<6);
 console.log("YOUR CAPACITY IS THE BIGGER");
 console.log("ETHIOPIA");
 console.log();
 let name=["orange","banana","foot","Africa","twin"];
 console.log(name);
 let message="this";
 message="that";
 console.log(message);

 function sumEven(n){
    let sum=0;
    for(let i=0;i<=n;i++){
    if(i%2==0){
        sum+=i;
    }
}
    console.log(sum);
 }
 sumEven(10);
  */

function triangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
triangle(5);
