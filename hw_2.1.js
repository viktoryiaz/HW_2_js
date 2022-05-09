let item_1 = 5;         //1,2    
console.log(item_1);    //3                5
let item_2 = 3;         //4,5
console.log(item_2);    //6                3
let item_3 = item_1 + item_2;   // 7,8
console.log(item_3);    //9                8
let item_4 = "yolochka";//10,11
console.log(item_4);    //12               yolochka
console.log(item_3 + item_4);    //13      8yolochka
console.log(item_3 * item_4);    //14       NaN
let item_5 = item_3;         //15,16    присвоить переменной 5 переменную 3
console.log(item_5);              //exam     8
let item_6 = 15;                  //17,19
let item_6_type = typeof(item_6);         //18,20    15 присвоить переменной 6_тайп ТИП переменной 6
console.log("item_6 == " + item_6 +" "+ "item_6_type == " + item_6_type);    //21   15 number               
let item_7 = String(item_6);          //22  создать переменную 7 и в ней преобразить 6 в стринг
let item_7_type = typeof(item_7);    //23,24  присвоить пер 7_тайп тип переменной 7
console.log("item_7 == " + item_7 + " " + "item_7_type == " + " " + item_7_type);  //25  15 string

let age_1 = 10;
let age_2 = 18;
let age_3 = 60;
if(age_1 < age_2) {
    console.log("You dont have access cause your age is " + age_1 + " Its less then 18");
} else if(age_1 >= age_2 && age_1 < age_3) {
     console.log("Welcome!");
} else if(age_1 > age_3) {
     console.log("Keep calm and look culture channel");
} else {
    console.log("technical work");
}



// 1* Преобразовать написанный код в функцию, принимающую на вход возраст 10,21 и 65                              комментировать код ctrl+k+c
// Пример: const checkAge = function(age) {                                                                       раскомментировать ctrl+u+c
// ваши преобразования
// }

// const checkAge = function(age) {
//     if(age < age_2) {
//         console.log("You dont have access cause your age is " + age + " Its less then");
//     } else if(age >= age_2 && age < age_3) {
//          console.log("Welcome!");
//     } else if(age > age_3) {
//          console.log("Keep calm and look culture channel");
//     } else {
//         console.log("technical work");
//     }
// }
// checkAge(10)
// checkAge(21)
// checkAge(65)



//2** Преобразовать зад 1* таким образом,чтобы первым делом в функции проверялся тип данных
// И если он не Number - кидалась ошибка

// const checkAge = function(age) {
//     if(typeof age == "number") {
//         if(age < age_2) {
//             console.log("You dont have access cause your age is " + age + " Its less then");
//         } else if(age >= age_2 && age < age_3) {
//              console.log("Welcome!");
//         } else if(age > age_3) {
//              console.log("Keep calm and look culture channel");
//         } else {
//             console.log("technical work");
//         }
//     } else {
//         console.log("Not integer value");
//     }
// }        

    
// checkAge(10)
// checkAge(21)
// checkAge("fghj")



//3*** Преобразовать 2** т.о.,чтобы значение '2'(строка,в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge = function(age) {
    //age = Number(age);


    //if(!isNaN(age)) {     3 варианта как можно перевести в number
    //if(Number(age)) {   
     if(+age) {

        if(age < age_2) {
            console.log("You dont have access cause your age is " + age + " Its less then 18");
        } else if(age >= age_2 && age < age_3) {
             console.log("Welcome!");
        } else if(age > age_3) {
             console.log("Keep calm and look culture channel");
        } else {
            console.log("technical work");
        }
    } else {
        console.log("Not integer value");
    }
}        

    
checkAge(17)
checkAge("21")
checkAge("65aaa")

//4**** Преобразовать 3*** т.о.,чтобы возраст вводился используя функцию prompt в привязанной верстке

