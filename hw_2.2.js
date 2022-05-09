//4**** Преобразовать 3*** т.о.,чтобы возраст вводился используя функцию prompt в привязанной верстке
let age_2 = 18;
let age_3 = 60;
const checkAge = function(age) {
    age = Number(age);
    if(!isNaN(age)) {

        if(age < age_2) {
            alert("You dont have access cause your age is " + age + " Its less then 18");
        } else if(age >= age_2 && age < age_3) {
             alert("Welcome!");
        } else if(age > age_3) {
             alert("Keep calm and look culture channel");
        } else {
            alert("technical work");
        }
    } else {
        alert("Not integer value");
    }
}        


let agePrompt = prompt("Enter age");
checkAge(agePrompt);