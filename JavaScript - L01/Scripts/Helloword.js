// console.log("hello world");
// console.log("Kacang Polong");

//=======================================================

//const readline = require("readline");
//
//let nama = "brury";
//let umur = 18;
//
//console.log("nama saya " + nama, "umur saya " + umur);

//-------------------------------------------------------
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nama: ", function(nama) {
    rl.question("Masukkan umur: ", function(umur) {

        console.log("Nama Kamu " + nama, "Umur Kamu " + umur);

        rl.close();
    });
});

