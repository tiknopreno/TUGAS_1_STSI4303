import { Mahasiswa , DataMahasiswa } from "./Mahasiswa";


const mhs = new Mahasiswa();

const newDataMahasiswa: DataMahasiswa = {
    nim : "230411013", //056211039
}

console.log("==== Tugas 1 | Soal 1 Membuat Pola Segita Berdasarkan NIM ====")
console.log("\n")
mhs.polaSegita(newDataMahasiswa);
console.log("\n")
console.log("==== End Tugas 1 | Soal 1 Membuat Pola Segita Berdasarkan NIM ====")
console.log("==== Tugas 1 | Soal 2 Membuat Pola Deret Aritmatika Berdasarkan NIM ====")
console.log("\n")
mhs.DeretAritmatika(newDataMahasiswa , 10);
console.log("\n")
console.log("==== End Tugas 1 | Soal 2 Membuat Pola Deret Aritmatika Berdasarkan NIM ====")
console.log("==== Tugas 1 | Soal 3 Bilangan Prima Berdasarkan NIM ====")
console.log("\n")
mhs.BilanganPrima(newDataMahasiswa , 10);
console.log("\n")
console.log("==== End Tugas 1 | Soal 2 Bilangan Prima Berdasarkan NIM ====")


