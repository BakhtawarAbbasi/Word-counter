#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk.bgCyanBright("\n                                    "));
console.log(chalk.bgCyanBright("         " + chalk.bgBlue.bold(" WORDS ") + "  " + chalk.bgBlue.bold(" COUNTER ") + "         "));
console.log(chalk.bgCyanBright("                                    \n"));
console.log(chalk.bgCyanBright("   " + chalk.bgBlue.bold(" We Will Count the Words of your Given Text ") + "   "));

let condition: boolean = true;

while (condition) {

    const answer: {
        Scentence: string
    } = await inquirer.prompt(
        [
            {
                name: "Scentence",
                message: chalk.bgCyan.bold("\nEnter the text for countig the words: "),
                type: "input"
            }
        ]
    );

    const words = answer.Scentence.trim().split(" ");

    // Print the array of words to the console
    console.log("\n");
    console.log(words);

    // Print the words without showing in the array
    console.log(chalk.bgCyan.bold("\nYour Words: ") + chalk.bgBlue.bold(words));

    // Print the words count of the text to the console
    console.log(chalk.bgCyan.bold("\nTotal Words in your Given Text is:"), chalk.bgBlue.bold(" " + words.length + " "));

    // Asking for more use
    const forMore = await inquirer.prompt(
        [
            {
                name: "wantMore",
                message: chalk.bgBlue.bold("\nAre you want to Count more Words?"),
                type: "confirm",
                default: true
            }
        ]
    );
    condition = forMore.wantMore;

}

// Print the Thanks when condition is 
console.log(chalk.bgCyanBright("\n                                 "));
console.log(chalk.bgCyanBright("       " + chalk.bgBlue.bold(" Thanks For Using My Word Counter") + "        "));
console.log(chalk.bgCyanBright("                                 "));