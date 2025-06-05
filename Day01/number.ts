// NUMBER : data angka
let jarak: number = 1500; // NILAI INT/INTEGER
let berat: number = 90.25; // NILAI FLOAT

// Arithmetic : +, -, *, /, %

// Algorithm kode perhitungan penjumlahan 
// 1. menyiapkan data yang harus dijumlahkan.
let angka01: number = 20;
let angka2: number = 25;

// 2. memproses penjumlahan dari data yang diberikan.
const result01: number = angka01 + angka2;
// 3. menampilkan hasil akhir penjumlahan di terminal.
console.log(result01);

// Fungsi Math Object
const PiMath: number = Math.PI;
console.log(PiMath);

//Pembulatan nilai
console.log(Math.round(25.6));
console.log(Math.round(25.4));
console.log(Math.ceil(25.1));
console.log(Math.floor(25.9333));

console.log(Math.pow(5, 2));
console.log(Math.sqrt(25));
console.log(Math.cbrt(27));

// MIN AND MAX
console.log(Math.min(1, 2, 3, 4, 10, -20));
console.log(Math.max(1, 2, 3, 6, 11, -20));

// Random
console.log(Math.random());

// Parsing data
let price: number = 30000;
console.log(
    price.toLocaleString("id", {
    style: "currency",
    currency: "IDR",
})
);

