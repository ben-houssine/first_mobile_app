console.log("Test_1")

// var
var playerName = "Player_1";
var highscore = 100;
var gameOver = false;
var test; // undefinde var which is undefined
var x = null // is  an "object" as a datatype. It makes a var unvalid - it makes the value of a var to nothing
console.log("name of player: ", playerName);

// let
let name_1 = "Youssef"


//const
const PI = 3.14;

// output of the dataype of an var
console.log("datatype of playerName: ", playerName);
console.log("datatype of playerName: ", x);

//functions

function output_of_String(){

    console.log("this is a function")
}

output_of_String(); //ausgaber der obigen funktion


//eva prinzip Eingabe, verabeitung, ausgabe einer Funktion
function calculate(number1, number2){

    console.log("calculation of the function: ",  number1 + number2); // diese beiden (noch nicht deklarierten) variablen
                                    // werden im nächsten schritt einen wert erhalten
                                    // damit sie verrechnet werden können
}

calculate(10,11); // nun geben wir hier den Wert ein, die oben bei den funktionsparametern stehen sollen

// ANDERE MÖGLICHKEIT 

function calculate_this(num1, num2){
    let sum = num1 + num2;
    return sum;
    
}

console.log("output of 2nd function: ", calculate_this(2,2));
calculate_this();

// working with functions

y = 10;
z = 20;

function addition_x_and_y(n1, n2){
    let sum = n1 + n2
    return sum
}

console.log("new_version of function: ", addition_x_and_y(y,z))


let highscore_new = 70;

if (highscore_new > 110) {
    console.log("this score is over 100");
}
else if (highscore_new > 80)
console.log("this score is less than 100");
else
console.log("tihs score is under 80")

// objects

let Name_1 = {

    alter: 23,
    hight: 1.70,
    augen: {
        farbe: "braun",
        offen: true,

    }

}

console.log(Name_1);

// arrays
let Obst_list = ["apple", "bannana",]
Obst_list.push("orange") // fügt orange am ende hinzu

console.log(Obst_list);

Obst_list.pop() // entfernen des letzten elements

Obst_list.unshift("kiwi") // fügt kiwi am anfang des arrays hinzu
Obst_list.shift() // entfernt den ersten Wert des Arrays

Obst_list.splice(1, 1) // löscht bestimmte elemente von bis ( 1, 1)
Obst_list.splice(1, 1, "Beere") // Item auf position 1 wird durch Beere ersezt

// schleifen

for (let i = 0; i <=10; i++)
console.log(i)


let clickButton = document.querySelector('click-button')
clickButton.addEventListener('click', eingabe);

function eingabe() {
    
    let input = document.querySelector('#input');
    let output = document.querySelector('#output');
    let newDiv = document.createElement('div');

    let newContent = document.createTextNode(inut.value);

    newDiv.appendChild(newContent);
    output,appendChild(newDiv);

    input,value = "";

}