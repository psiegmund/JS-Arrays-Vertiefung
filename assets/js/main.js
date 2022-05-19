// let citys = ['hamburg', 'berlin', 'neuruppin'];
// let citysUppercase = citys.map((elt) => {
//     return elt.toUpperCase();
// });

// let cityFirstLetter = citys.map((elt) => {
//     return elt.charAt(0).toUpperCase() + elt.slice(1);
// })

// console.log(citysUppercase);
// console.log(cityFirstLetter);

// let fruits = ['banana', 'melone', 'kiwi'];

// fruits.forEach((elt) => {
//     console.log(elt);
// })

// lev1_1
// let languages = ["JavaScript", "Python", "Java", "Ruby", "PHP", "C++", "CSS", "C#", "Go", "C", "TypeScript", "Swift"];
// let sortierung = () => {
//     return languages.sort();
// }

// console.log(sortierung());

// // lev1_2

// let sortierung2 = () => {
//     return languages.reverse();
// }

// console.log(sortierung2());

// // lev1_3

// let meinText1 = ['Hello', 'World'];
// let meinText2 = ['Anass', 'Elaine', 'Eric', 'Georg'];
// let meinText3 = ['Superman', 'Wonderwoman', 'Hulk', 'Batman', 'Spiderman'];

// let join1 = meinText1.join();
// let join2 = meinText1.join("");
// let join3 = meinText1.join(" ");
// let join4 = meinText1.join("+");
// let join5 = meinText2.join();
// let join6 = meinText2.join("");
// let join7 = meinText2.join(" ");
// let join8 = meinText2.join("+");
// let join9 = meinText3.join();
// let join10 = meinText3.join("");
// let join11 = meinText3.join(" ");
// let join12 = meinText3.join("+");

// console.log(join1);
// console.log(join2);
// console.log(join3);
// console.log(join4);
// console.log(join5);
// console.log(join6);
// console.log(join7);
// console.log(join8);
// console.log(join9);
// console.log(join10);
// console.log(join11);
// console.log(join12);

// lev2_2
// let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

// numArray2.sort((a, b) => a - b);

// console.log(numArray2);


// VERTIEFUNG forEach/Map Lev1

// // lev1_1

// let output = document.getElementById('output-lvl11');
// let getraenke = ["Coca-Cola", "Apfelsaft", "Pepsi", "Traubensaft", "Sprite", "Orangensaft", "Red Bull Energy Drink", "Fanta"];
// getraenke.sort();

// getraenke.forEach((elt) => {
//     output.innerHTML += elt;
// })

// console.log(getraenke);

// // lev1_2

// let upperDrinks = getraenke.map((elt) => {
//     return elt.toUpperCase();
// });
// console.log(upperDrinks);

//// lev1_3

// let array = [
//     18,
//     16,
//     80,
//     51,
//     47,
//     38,
//     95,
//     42,
//     68,
//     61,
//     34,
//     51,
//     20,
//     17,
//     56,
//     31,
//     100,
//     6,
//     5,
//     30,
//     74,
//     97,
//     28,
//     99,
//     91,
//     27,
//     73,
//     12,
//     92,
//     6,
//     27,
//     71,
//     26,
//     15,
//     78
// ];

// let arraySort = array.sort((a, b) => a - b).map((elt) => {
//     return elt * 2
// });

// console.log(arraySort);

// lev1_4
// let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
// let celcius = (x) => (x - 32) / 1.8

// let convert = fahrenheit.map((elt) => {
//     // return Math.round((elt - 32) / 1.8).toFixed(0);
//     return Math.round(celcius(elt)).toFixed(0);
// })

// console.log(convert);

// lev1_5
let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

const array = [];

checkNumber.forEach((elt) => {
    if (elt % 3 == 0) {
        elt += 100;
    }
    array.push(elt);
}
)

console.log(array);