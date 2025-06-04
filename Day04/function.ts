// Function: 
/*
 * Definisi: Sekumpulan program yang disatukan untuk mengerjakan sebuah proses khusus yang biasanya bersifat re-usable.
 * Kategori: Built-in function dan User-defined function.
 * Aturan penulisan: 
 *  - Penamaan function mengikuti aturan nama Variabel.
 *  - Bisa menerima parameter/argumen: penampung dari function, untuk menerima nilai dari luar function.
 *  - function biasanya menghasilkan nilai output melalui keyword return didalamnya.
 *  - Opsi penulisan bisa menggunakan Declarative function, function Expression, atau Arrow function.
 */

// contoh tanpa function
// INPUT: 2 variabel yang menampung data untuk dijumlahkan.
let angka01: number = 10;
let angka02: number = 13;
// PROCESS: Memproses penjumlahan ke-2 variabel.
const hasil01: number = angka01 + angka02;
// OUTPUT: Menampilkan hasil penjumlahan.
console.log(hasil01);

//  Buat kode diatas menjadi Declarative Function.

/* 
 * Declarative Function:
 * function namaFunc(param1, param2, param3, ...){
 *      // code
 * }
 */

// membuat function

function penjumlahan(){
    let angka01: number = 2;
    let angka02: number = 5;

    const hasil: number = angka01 + angka02;

    return hasil;
}

let printPenjumlahan = penjumlahan();
console.log(printPenjumlahan);


console.log(penjumlahan ());

// Function with parameter for re-usable.
function pengurangan(angka01: number, angka02: number){
    const hasil: number = angka01 - angka02;
    return hasil;
}

console.log(pengurangan(10, 20));
console.log(pengurangan(11, 7));