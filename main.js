#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Initialize user balance and pin code
let myBalance = 6000;
let myPin = 6789;
//print welcome message
console.log(chalk.blue("\n\t welcome to code with Hassan - ATM machine\n\t"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("enter your pin code:")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\npin is correct, login successfully\n"));
    //console.log(`current Account Balance is $ ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "seclet an operation",
            choices: ["withdraw Amount", "check Balance"]
        }
    ]);
    if (operationAns.operation === "withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter the amount to withdraw"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red("insufficient Balance"));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns} withdraw successfully`);
            console.log(chalk.yellow(`your Remaining Balance is: $ ${myBalance}`));
        }
    }
    else if (operationAns.operation === "check Balance") {
        console.log(chalk.green(`your Account Balance is $ ${myBalance}`));
    }
}
else {
    console.log(chalk.red("pin is incorrect, try again!"));
}
;
