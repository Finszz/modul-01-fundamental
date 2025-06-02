// DATE: data yang menghubungkan dengan waktu.
let now: Date = new Date(); // class constructor date
console.log(now.toUTCString());
console.log(now.toISOString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toLocaleString("id")); //buat tanggal & waktu negara
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMonth()); //dihitung dari 0 - 11
console.log(now.getTime());