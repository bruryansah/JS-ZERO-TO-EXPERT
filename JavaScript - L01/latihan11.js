
// Latihan 11: Menggunakan forEach untuk Menampilkan Nama Pengguna

// const users = [
//     { nama: "Ahmad" },
//     { nama: "Budi" },
//     { nama: "Siti" }
// ];

// users.forEach(function(user) {
//     console.log(user.nama);
// });

//-------------------------------------------------------------------

// const angka = [1, 2, 3];

// const hasil = angka.forEach(function(item) {
//     return item * 2;
// });

// console.log(hasil);

// const angka = [1, 2, 3];

// const hasil = angka.forEach(function(item) {
//     return item * 2;
// });

// console.log(hasil);

//----------------------------------------------------------------------
const angka = [1, 2, 3];

const hasil = angka.map(function(item) {
    return item + 10;
});

console.log(hasil);