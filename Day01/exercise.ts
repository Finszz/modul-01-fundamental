/* Write a code to find area of rectangle.
○ Example : length = 5, width = 3
○ Output : 15
*/

//tentukan panjang dan lebar
let length01: number = 5;
let width: number = 3;
//gunakan rumus area persegi panjang
const area: number = length01 * width;
//hasil
console.log(area);

/* Write a code to find perimeter of rectangle.
○ Example : length = 5, width = 3
○ Output : 16
*/

//tentukan rumus keliling persegi panjang
const keliling: number = (length01 + width) * 2
//hasil
console.log(keliling);

//tentukan radius lingkaran
let radius: number = 5;
//tentukan diameter
const diameter: number = radius * 2
console.log(diameter);

//tentukan Pi lingkaran
const Pi: number = Math.PI; 
console.log(Pi);
//tentukan keliling lingkaran
const circumference: number = 2 * Pi * radius
console.log(circumference);

//tentukan diameter lingkaran
console.log(Math.pow(radius, 2));
//tentukan luas lingkaran
const luas: number = Pi * (radius * radius);
console.log(luas);

/*Write a code to find angles of triangle if two angles are given.
○ Example : a = 80, b = 65
○ Output : 35
*/

//tentukan sudut total dan sudut yang diberikan
let sudut1: number = 80;
let sudut2: number = 65;
const suduttotal: number = 180;
//tentukan rumus sudut
const sudutsisa: number = suduttotal - (sudut1 + sudut2);

console.log(sudutsisa);

/* Write a code to convert temperature from celsius to fahrenheit
*/

//tentukan derajat suhu
let celsius: number = 25;

//rumus dari celsius ke fahrenheit
const fahrenheit: number = celsius * (9/5) + 32;
//hasil
console.log(fahrenheit);

/* write a code to swap numbers*/

let a: number = 4;
let b: number = 7;
const swap01: [typeof a, typeof b] = [b, a];

console.log(swap01);

/* write a code to swap numbers*/

let a1: number = 4;
let b1: number = 7;
let d1: number;

d1 = a1;
a1 = b1;
b1 = d1;

console.log(`a = ${a1} b = ${b1}`);

/* write a code to get first and last character from a string*/

let kata: string = "programming";

const firstletter: string = kata.charAt (0);
const lastletter: string = kata.charAt ((kata.length) -1);

console.log(firstletter + " & " + lastletter);

/* write a code to calculate the square and cube of a number*/

const angka: number = 4;

const square: number = (Math.pow(angka, 2));
const cube: number = (Math.pow(angka, 3));

console.log('square = ' + square);
console.log('cube = ' + cube);

/* Write a code to convert minutes to hours and minutes */

let menit: number = 135;

const jam: number = (Math.floor(menit/60));
const minute: number = (Math.round(menit-(60*jam)));

console.log(jam + " jam " + " dan " + minute + " menit");