#! /usr/bin/env node

// first user enter the number (inquirer prompt) 
// logic will gonna check whether the enter number is correct or not
// user will get 4 chances to enter the number
// if user guess the correct number program terminate at that moment if not will get 4 chances 


import inquirer from "inquirer";
import chalk from "chalk";
import animation from "chalk-animation";

 // generate number 
let unknown_number = Math.floor(Math.random() * 10);


function duration() {
    return new Promise((resolve, reject) => {    
    setTimeout(resolve,5000);        
    });
}

async function get_user_guess() {
    const heading = await animation.neon("NUMBER GUESSING GAME")
    heading.start();
    await duration();
    heading.stop();
    for (let i = 0; i < 4; i++) {
        let user_enter = await inquirer.prompt([{
            name : "user_number",
            type : "number",
            message : "Enter the number of your choice :"
        }])
        if (user_enter.user_number === unknown_number) {
            console.log("you guess it right");
            break;
        }
        else{
            console.log("Wrong guess");
        }
        
    }
    console.log("The correct number is  : "+ unknown_number);
    
}

async function execution() {
    await get_user_guess();
}

execution()




