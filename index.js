#! /usr/bin/env node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "UserInput",
        type: "number",
        message: "Please Guess a Number between 1 - 6"
    }]);
if (answer.UserInput == randomNum) {
    console.log("congratulation you guess the right Number");
}
else {
    console.log("opps! you guess the wrong number");
}
