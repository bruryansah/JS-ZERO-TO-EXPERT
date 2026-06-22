
// Latihan 12: Filter Array of Objects

const users = [
    { nama: "Ahmad", umur: 18 },
    { nama: "Budi", umur: 20 },
    { nama: "Siti", umur: 17 }
];

const dewasa = users.filter(function(user) {
    return user.umur >= 18;
});

console.log(dewasa);