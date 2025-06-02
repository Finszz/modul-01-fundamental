// Write a code to display the multiplication table of a given integer.

const variabel: number = 9;
let jumlah: number = 7;

for (let i: number = 1; i <= jumlah; i++){
    const result = `${variabel} x ${i}`;
    console.log(result);
}

//Write a code to convert centimeter to kilometer.

let cm: number = 100000;
const rumus: string = (cm/100000) + " kilometer.";

console.log(rumus);

//Write a code to format number as currency (IDR)

let nominal: number = 1000;
console.log(
    nominal.toLocaleString("id", {
    style: "currency",
    currency: "IDR",
    })
);

// Write a code to check whether the number is odd or even.

const batas: number = 8;
let hasil: string = "";

for(let i: number = 1; i <= batas; i++){
    if (i % 2 === 0){
        hasil += `${i} is even, `;
    }else{
       hasil += `${i} is odd, `;
    }
}

console.log(hasil);


// Write a code to check whether the number is prime number or not
let number: number = 10;
let hasil1: string;

if (number % 2 === 0){
    hasil1 = `${number} is not a prime number.`
} else if (number % 3 === 0){
    hasil1 = `${number} is not a prime number`
} else {
    hasil1 = `${number} is a prime number`
}

console.log(hasil1);


// Write a code to find the sum of the numbers 1 to N.

function sumToN(n: number): number {
    let jumlah = 0;
    
    for (let i = 1; i <= n; i++) {
        jumlah += i;
    }
    return jumlah;
}

// contohnya:
const n = 5;
let i = 1;
console.log(`hasil dari ${i} hingga ${n} adalah ${sumToN(n)}`);

