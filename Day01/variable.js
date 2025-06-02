// VARIABLE : penampung data

/*
- Rumus penulisan variable ==> keywordVariable namaVariable = data;
- keywordVariable : var, let, const
- namaVariable : - Harus diawali dengan huruf atau _ atau $
                 - Jika terdiri dari dua suku kata atau lebih, maka tidak boleh dipisah dengan spasi.
- data : tipe data yang ingin disimpan diantaranya string, number, boolean, undefined, array, object.
*/

// mendeklarasikan variable
var namaMurid;

// Meng-inisialisasi variable
var usiaMurid = 17;

// Karakter tiap keyword variable
// Keyword var : redeclare, reassign
// redeclare
var alamat = "Jl. Pemuda Surabaya";
var alamat = "Sukolilo Surabaya"; // membuat ulang yang sudah ada

// reassign
alamat = "Rungkut Surabaya";

// keyword let : non-redeclare, but reassign.
let program = "Web Development";
// let program = "digital Marketing"; // non-redeclare.
program = "Data Science"; //reassign

// Keyword const : non-redeclare, non-reassign.
const PI = 3.14;
const UrlDomain = "https://google.com";

