// Array : tipe data yang mampu menampung berbagai macam tipe data lain.
/*
 * ciri-ciri: - Dibungkus oleh kurung siku, contoh: [1, 2, 3, 4]
 *            - setiap data didalam array memiliki alamat index, yang dimulai dari index ke 0.
 * Tujuan: untuk mempermudah pengelolaan data.
 */

let siswa1: string = "Edo";
let siswa2: string = "Edi";
let siswa3: string = "Eduardo";

// Disimpan kedalam array, alhasil akhirnya:

const daftarsiswa: string[] = ["Edo", "Edi", "Eduardo"];
const daftarkelas: string[] = new Array("IPA", "IPS", "BAHASA");

// cara mengakses suatu data dari array: namaVariabel[index_data_yang_dipilih]
console.log(daftarsiswa[1]);
console.log(daftarkelas);

// Array destructure: mengakses data pada array dengan menandai tiap data menggunakan variabel.
const data: any[] = ["Irfan", 20, "Surabaya"];
let [namaOrang, umur, asal] = data;
console.log(namaOrang);
console.log(umur);
console.log(asal);

// Memperbarui suatu data array
daftarsiswa[1] = "Andre";
console.log(daftarsiswa);

// Fungsi bawaan array untuk mengelola data

// array.push(newData): menambahkan data baru diakhir array.
daftarsiswa.push("Olga");
console.log(daftarsiswa);

// array.pop(): digunakan untuk menghapus data terakhir.
daftarsiswa.pop();
console.log(daftarsiswa)

// array.unshift(newData): menambahkan data baru diawal array.
daftarsiswa.unshift("Ahmad");
console.log(daftarsiswa);

//array.shift(): menghapus data terdepan.
daftarsiswa.shift();
console.log(daftarsiswa);

// array.length : digunkana untuk mengetahui banyaknya data didalam array.
console.log(daftarsiswa.length);

// array.splice (pilihanIndex, jumlahDataYangDihapus, newData?): menghapus, memperbarui, dan menyisipkan data baru pada Index yang dipilih.

// Menghapus data berdasarkan Index
daftarsiswa.splice(1, 1);
console.log(daftarsiswa);

// Menyisipkan data 
daftarsiswa.splice(1, 0, "Edi", "Dimas", "El" );
console.log(daftarsiswa);

// Memperbarui data 
daftarsiswa.splice(2, 1, "Eky");
console.log(daftarsiswa);

// Soal: Cetak daftar nama siswa dengan nomer urut

// Deskripsi:
// Dari data array berikut:
// const daftarsiswa: string[] = ["Edo", "Edi", "Eda"];
// Cetak semua nama dengan nomer urut.

// Output:
// 1. Edo
// 2. Edi
// 3. Eda

// PROCESS
// 1. menyiapkan penampung output dalam bentuk string.
// 2. Mengakses data didalam array satu per satu.
// 3. Memasukkan datanya kedalam variable output.

const daftarSiswa: string[] = ["Edo", "Edi", "Eda", "Ahmad"];
let siswanya: string = "";

for (let i:number = 0; i < daftarSiswa.length; i++ ){
    const namaSiswa: string = daftarSiswa[i];
    siswanya = siswanya + `${i + 1}. ${namaSiswa}\n`;
}

console.log(siswanya);
