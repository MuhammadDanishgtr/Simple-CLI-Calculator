#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { message: "Enter your first Number", type: "number", name: "firstnumber" },
    { message: "Enter your Second number", type: "number", name: "secondnumber" },
    { message: "Select your Operator", type: "list", name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"] }
]);
if (answers.operator === "addition") {
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "subtraction") {
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator === "multiplication") {
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator === "division") {
    console.log(answers.firstnumber / answers.secondnumber);
}
else {
    console.log("Please select valid operator");
}
