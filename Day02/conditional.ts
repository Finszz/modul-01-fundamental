// CONDITIONAL STATEMENT

/* 
* - IF STATEMENT: untuk memeriksa satu buah kondisi.
* - IF...ELSE STATEMENT: untuk memeriksa dua kondisi.
* - IF...ELSE IF...ELSE STATEMENT: untuk memeriksa tiga kondisi atau lebih.
* - SWITCH CASE STATEMENT: untuk memeriksa data dalam pencocokan nilai.
*/

// Contoh data
let nama: string = "akbar";
let usia: number = 18;

// IF STATEMENT
/*
* Aturan penulisan:
* If (condition){
*     // code
* }
* 
* note :
* - condition: kondisi yang diinginkan dalam bentuk boolean (TRUTHLY/FALSY/COMPARISON OPERATOR/LOGICAL).
* - code: baris program yang ingin dijalankan jika condition didalam if terpenuhi (bernilai TRUE).
*/

//example: memvalidasi batas usia
if( usia > 16 ){
    console.log(`${nama} sudah dewasa`);
}

// IF STATEMENT
/*
* Aturan penulisan:
* If (condition){
*     // code
* }else{
*   // code
* }
* 
* note :
* - condition: kondisi yang diinginkan dalam bentuk boolean (TRUTHLY/FALSY/COMPARISON OPERATOR/LOGICAL).
* - code: baris program yang ingin dijalankan jika condition didalam if terpenuhi (bernilai TRUE).
*/

if (usia > 16){
    const print: string = `${nama} SUDAH dewasa`;
    console.log(print);
} else {
    const print: string = `${nama} BELUM dewasa`;
    console.log(print);
}

let IsNgantuk: boolean = true;

if (IsNgantuk){
    console.log("beli kopi");
} else {
    console.log("beli es krim"); 
}

//IF...ELSE IF...ELSE
/*
* Aturan penulisan:
* If (condition){
*     // code
* } else if(condition){
*   // code
* } else {
*   // code
* }
* 
* note :
* - condition: kondisi yang diinginkan dalam bentuk boolean (TRUTHLY/FALSY/COMPARISON OPERATOR/LOGICAL).
* - code: baris program yang ingin dijalankan jika condition didalam if terpenuhi (bernilai TRUE).
*/

// Example: klasifikasi nilai ujian
// INPUT
const examGrade: number = 70;
let result: string;

// PROCESS
if(examGrade >= 90){
    result = "Grade A"
} else if (examGrade >= 80 && examGrade < 90){
    result = "Grade B"
} else if (examGrade >= 70 && examGrade < 80){
    result = "Grade C"
} else {
    result = "Grade F"
}

// OUTPUT
console.log(result);


//SWITCH...CASE
/* 
* Aturan penulisan:
* switch(data){
*     case value:
*         // code
*     default:
*         // code
* }
*/

const job: string = "Driver";
switch(job){
    case "Coder": // job === "Coder"
      console.log("Membuat aplikasi");
      break;
    case "Driver":
      console.log("Mengemudi");
      break;
    default:
        console.log("Tidak tau");
} 