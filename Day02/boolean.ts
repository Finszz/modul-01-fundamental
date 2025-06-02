// BOOLEAN: Data yang bernilai benar (True) atau salah (False).
let isActive: boolean = true;
let isDeleted: boolean = false;

// Menghasilkan nilai boolean
// 1. Berdasarkan tipe data lain.

// Truthly.
console.log(Boolean("ABC"));
console.log(Boolean(" "));
console.log(Boolean(12));
console.log(Boolean(-10));

// Falsy.
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));

// 2. Comparison operator : >, <, >=, <=, ==, ===.
let valueA: number = 12;
let valueB: number = 15;

console.log(valueA < valueB);
console.log(valueA > valueB);
console.log(valueA >= 12);
console.log(valueB != 14);
// console.log(valueB === "15"); inipun true, karena liat angkanya.


// 3. Logical operator: AND (&&), OR (||), NOT (!)

// AND: Akan menghasilkan nilai TRUE jika antar nilai juga bernilai true.
console.log(Boolean("ABC") && Boolean(2)); //kalo dua"nya benar, dianggep benar
console.log(valueA < 12 && valueB === 15); //kalo 1 salah, dianggep false
console.log(valueA === 10 && valueB === 1); //kalo dua"nya salah, ya salah

// OR: akan menghasilkan nilai TRUE jika salah 1 data bernilai true.
console.log(Boolean("ABC") || Boolean(2)); //kalo dua"nya benar, dianggep benar
console.log(valueA < 12 || valueB === 15); //kalo 1 salah, dianggep bener
console.log(valueA === 10 || valueB === 1); //kalo dua"nya salah, ya salah

// NOT: membalikkan nilai
console.log(!Boolean(valueA));
console.log(!(valueA < 12) && valueB === 15);