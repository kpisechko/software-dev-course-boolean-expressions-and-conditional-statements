/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');
 
const hasTorch = true;
let hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?\n");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

let hasKey = false
let choice2
let choice3
let choice4
let choice5
let choice6
let choice7

if (choice === "mountains" && hasTorch) {
  console.log("You continue until you come to a fork in the road.");
  choice2 = readline.question("Do you go 'left', 'right', or 'straight'?\n");

if (choice2 === "left") {
console.log("You continue down the path until it dead ends. Try agian");
} else if (choice2 === "straight") {
  console.log("You continue down the path until you come to a river.");
  choice3 = readline.question("Do you 'try to cross' or 'follow it upstream'?\n")
    if (choice3 === "try to cross") {
      console.log("The current is too strong and you drown. Try again.");
    } else if (choice3 === "follow it upstream") {
      console.log("You follow the river until you come to a bridge. As you cross you see a key on the ground.");
      choice4 = readline.question("Do you pick it up:'yes' or 'no'?\n");
        if (choice4 === "yes") {
          hasKey = true;
        }
      console.log("You continue down the path.")
    } else {
      console.log("You get lost and can't find your way. Try again.")
    }
} else if (choice2 === "right") {
console.log("You continue down the path until you hear a weird, low growl.");
choice5 = readline.question("Do you 'run away', 'try to scare it', or 'try to sneak by'?\n");
  if (choice5 === "run away") {
    console.log("You get lost and can't find your way. Try again.");
  } else if (choice5 === "try to scare it") {
    console.log("The growl doesn't change. You sneak closer and find it is a speaker making the sound.");
    console.log("You continue down the path.")
  } else if (choice5 === "try to sneak by") {
    console.log("You sneak forward and see it is a speaker making the sound.");
    console.log("You continue down the path.");
  } else {
    console.log("You get lost and can't find your way. Try again.");
  }
}

if ((choice2 === "straight" && choice3 === "follow it upstream")|| 
(choice2 ==="right" && (choice5 === "try to scare it" || choice5 === "try to sneak by"))) {
  console.log("You find a cave at the end of the path and find a chest inside.")
  choice6 = readline.question("Do you open it: 'yes' or 'no'?\n");
    if (choice6 === "yes" && hasKey) {
      console.log("Congrats, you found the treasure!");
      choice7 = readline.question("Among the treasure is a map to the village. Do you use it: 'yes' or 'no'?\n")
        if (choice7 === "yes") {
          hasMap = true
        } else {
          console.log("Your adventure is complete.");
        }
    } else if (choice6 === "yes" && !hasKey) {
      console.log("The chest is locked. Try again.");
    } else {
      console.log("You return home empty handed. Try again.");
    }
}
}

let houseKey = false
let chestKey = false
let choice8
let choice9
let choice10
let choice11
let choice12

if (choice === "village" || hasMap) {
console.log("You find yourself in an abandoned village");
console.log("Most of the houses have caved in. Three look safe to enter.");

let houseDone = false
while (!houseDone) {
choice8 = readline.question("Do you go to 'house one', 'house two', or 'house three'?\n");

if (choice8 === "house one") {
  console.log("You enter a house covered in cobwebs.");
  let done = false
  while (!done) {
  choice9 = readline.question("Which room do you search: 'kitchen', 'bedroom', or 'living room'?\n");
    if (choice9 === "kitchen") {
      console.log("You find the key.");
      houseKey = true;
      console.log("You leave the house.");
      done = true
    } else if (choice9 === "bedroom") {
      console.log("You find nothing.");
    } else if (choice9 === "living room") {
      console.log("You find nothing.");
    } else {
      console.log("You leave the house.")
      done = true
    }
  }
} else if (choice8 === "house two") {
  console.log("The door is locked.");
  choice10 = readline.question("Do you try to unlock it: 'yes' or 'no'?\n");
    if (choice10 === "yes" && houseKey) {
      console.log("You unlock the door and go in.");
      console.log("You find a chest in the living room.")
      choice11 = readline.question("Do you try to unlock it: 'yes' or 'no'?\n");
        if (choice11 === "yes" && chestKey) {
          console.log("Congrats, you found the treasure!");
          houseDone = true
          console.log("Game over");
        } else {
          console.log("The chest is locked. You leave the house.")
        }
    } else if (choice11 === "no" || !houseKey) {
      console.log("The door is locked.")
    }
  
} else if (choice8 === "house three") {
  console.log("You enter a house covered in cobwebs.");
  let done2 = false
  while (!done2) {
  choice12 = readline.question("Which room do you search: 'kitchen', 'bedroom', or 'living room'?\n");
    if (choice12 === "bedroom") {
      console.log("You find the chest key.");
      chestKey = true;
      console.log("You leave the house.");
      done2 = true
    } else if (choice12 === "living room") {
      console.log("You find nothing.");
    } else if (choice12 === "kitchen") {
      console.log("You find nothing.");
    } else {
      console.log("You leave the house.")
      done2 = true
  }
} 
} else {
  console.log("Your adventure is over. Try again");
  houseDone = true
}
}

}