// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

const arrayMixed: any[] = ["3", 1, "string", null, false, undefined, 2];


function mixedArray(arrayMixed: any[]) {
    let variable1: number = 0;
    for (let i = 0; i < arrayMixed.length; i++) {
        if (typeof (arrayMixed[i]) == "number") {
            variable1 += arrayMixed[i];
        }
    } return variable1
}
console.log(mixedArray(arrayMixed));

// Write a function that will combine 2 given array into one array
// b. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
let array03: number[] = [];

function arrayCampuran() {
    for (let i = 0; i < array2.length; i++) {

        array03.push(array1[i], array2[i]);
        array03 = array03.sort()

    } return array03
}
console.log(arrayCampuran());

// Write a function to find duplicate values in an array
// b. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

let array3: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];

function arrayTotal(array3) {
    let penampungArray: number[] = [];
    for (let i = 0; i < array3.length; i++) {
        if (penampungArray.indexOf(array3[i]) === -1) {
            penampungArray.push(array3[i]);
        }

    } return penampungArray
}

console.log(arrayTotal(array3));


// Write a function to find the difference in 2 given array
// b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

const array01: number[] = [1, 2, 3, 4, 5];
const array02: number[] = [3, 4, 5, 6, 7];

function totalArray() {
    let arraytampungan: number[] = [];
    for (let index = 0; index < array01.length - 4; index++) {
        arraytampungan.push(array01[0], array01[1], array02[3], array02[4]);
    } return arraytampungan
}

console.log(totalArray()); 