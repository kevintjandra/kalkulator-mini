// file: kalkulator.js

// fungsi untuk melakukan pembagian matematika

function bagi(a, b) {
  return a / b;
}

// menampilkan hasil ke layar
console.log("=== APLIKASI KALKULATOR MINI ===");
let angka1 = 10;
let angka2 = 5;

let hasil = bagi(angka1, angka2);
console.log("Hasil pembagian " + angka1 + " / " + angka2 + " = " + hasil);
