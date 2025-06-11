//Synchronous: kode dieksekusi sesuai dan berdasarkan urutan perintah

console.log(`memulai proses ...`);
let res: number = 5 + 5;
console.log(`Hasil penjumlahan`, res);

// Asynchronous: kode dieksekusi berdasarkan running time/waktu proses

console.log(`Memulai proses ...`);
setTimeout(() => {
    console.log(`Ini akan dijalankan setelah 2 detik`)
}, 2000) // 2000ms = 2 detik
console.log(`proses selesai`);