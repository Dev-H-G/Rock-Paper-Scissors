const choices = ["rock", "paper","scissors"];
let userChoice = prompt("Please enter your choice : (rock , paper , scissors)");
userChoice = userChoice.toLocaleLowerCase();
const rand= Math.round(Math.random()*3);
// console.log (rand);
// console.log( choices[rand]);
// (userChoice)?console.log(`Your choice is : ${userChoice}`): console.log(`Your are cheated`);
 if (userChoice === choices[rand]){
    alert(`It's a tie!`)
 }else if (userChoice == "rock" ){
    if ( choices[rand] == "paper"){
        alert(`computer is winner!computer choice was : ${choices[rand]}`);
    }else{
        alert(`You are winner!computer choice was : ${choices[rand]}`);
    }
 }else if(userChoice == "paper"){
    if (choices[rand] == "rock"){
        alert(`You are winner!computer choice was : ${choices[rand]}`);
 }else {
    alert(`computer is winner!computer choice was : ${choices[rand]}`);
 }
 }
 else {alert(`Please enter right choice!`)}