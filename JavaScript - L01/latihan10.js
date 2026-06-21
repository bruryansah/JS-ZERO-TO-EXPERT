
// Latihan 10: Menggunakan Fungsi untuk Menampilkan Nama Pengguna
// Loop + Fungsi

const users = [
    {
        nama: "Ahmad",
        umur: 18
    },
    {
        nama: "Budi",
        umur: 20
    },
    {
        nama: "Siti",
        umur: 19
    }
];

// function tampilkanNama(user) {
//     console.log(user.nama);
// }

// for (let i = 0; i < users.length; i++) {
//     tampilkanNama(users[i]);
// }

users.forEach(function(user) {
    console.log(user.nama);
});