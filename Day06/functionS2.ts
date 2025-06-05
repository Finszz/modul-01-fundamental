// Callback function: - Merupakan sebuah fungsi yang dijalankan didalam fungsi lain dan dimasukkan melalui parameter
//                    - Sebuah fungsi yang langsung dibuat didalam parameter fungsi lain.

/* 
 * Aturan penulisan dari callback function:
 * function mainFunction(function(callbackFn)){
 *      callbackFn();
 * }
 *
 * - callbackFn: Parameter yang harus diisi dengan fungsi.
 */

// mainFunction declaration
function printCalculation(callbackFn) {
    let angkaA: number = 10;
    let angkaB: number = 20;
    //menjalankan fungsi dari parameter callbackFn dan ditampung outputnya kedalam variabel result

    const result = callbackFn(angkaA, angkaB);

    return `Hasil perhitungan dari callback adalah ${result}`;
}

console.log(
    printCalculation(function (angkaA: number, angkaB: number) {
        console.log(angkaA);
        console.log(angkaB);

        return angkaA + angkaB;
    })
);
/* console.log(
    printCalculation(function () {
        

        return angkaA + angkaB;

    })
);*/

//console.log(
//printCalculation( () => {
//  let numbA: number = 20;
//let numbB: number = 3;

// return numbA - numbB;
// })
//);

//function pembagian(){
//let numbA: number = 15;
//let numbB: number = 3;

//return numbA / numbB;
//}
//console.log(printCalculation(pembagian));

// Array function: forEach, map, filter
// array.forEach(callbackFn): sebagai pilihan selain for loop untuk mengakses isi dari tiap data array.
const students: string[] = ["Abdi", "Edi", "Aldo"];

// for loop

for (let index = 0; index < students.length; index++) {
    const value = students[index];
    console.log(`${index + 1}. ${value}`);
}

students.forEach((value, index) => {
    console.log(`${index + 1}. ${value}`);
});

// Duplikasi cara kerja array.forEach

function duplicateForEach(arrayData: any[], callbackFn) {

    for (let index = 0; index < arrayData.length; index++) {
        callbackFn(students[index], index)

        // atau ga pake yang dibawah (sama aja, cmn yg bawah nyebutin variable value buat jadi penampung)
        // const value = arrayData[index];
        // callbackFn(value, index);
    }
}

duplicateForEach(students, (value: any, index: number) => {
    console.log(`${index + 1}. ${value}`);
});

// array.map(callbackFn): untuk merubah seluruh data array menjadi data array yang baru.
// [1, 2, 3] -> [2, 4, 6]
// ["Abdi", "Edo", "Aldo"] -> ["1. Abdi", "2. Edo", "3. Aldo"]
// ["Abdi", "Edo", "Aldo"] -> ["Nama saya Abdi", "Nama saya Edo", "Nama saya Aldo"]
// [1, 2, 3] -> ["Ganjil", "Genap", "Ganjil"]
// [1, 2, 3] -> ["1", "2", "3"]
// [1000, 2000, 3000] -> ["Rp1000", "Rp2000", "Rp3000"]

const dataArray: any[] = [1, 2, 3, 4, 5];

const newArray = dataArray.map((value, index) => {
    return value * 2;
})

console.log(newArray);

const uang: number[] = [2000, 5000, 10000];

const newUang = uang.map((value, index) => {
    return value.toLocaleString("id", {
        style: "currency",
        currency: "IDR",
    });
});

console.log(newUang);

function duplicateMap(arrayData: any[], callbackFn) {
    const abc: string[] = [];
    for (let index = 0; index < uang.length; index++) {
        console.log(arrayData[index]);
        
        abc.push(callbackFn(arrayData[index]));

    } return abc;
}

const numberToCurrency = duplicateMap(uang, function (value) {
    console.log(value);
    
    return value.toLocaleString("id", {
        style: "currency",
        currency: "IDR",
    });
});
console.log(numberToCurrency);


// array.filter(callbackFn): Untuk menghasilkan array baru sesuai acuan filter yang diberikan.
// [1, 2, 3, 7, 20, 12] -> [2, 20, 12]

const angka1: number[] = [1, 2, 3, 7, 20, 12];

const angkaGenap: number[] = angka1.filter((value, index) =>{
    return value % 2 === 0;
});

console.log(angkaGenap);

const angkaGanjil: number[] = angka1.filter((value, index) =>{
    return value % 2 !== 0;
});

console.log(angkaGanjil);