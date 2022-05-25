// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

let monicaFavColor = new Set();
monicaFavColor.add("Yellow");
monicaFavColor.add("Pink");
monicaFavColor.add("White");
monicaFavColor.add("Purple");

let monicaFavResto = new Set();
monicaFavResto.add("Bento");
monicaFavResto.add("Sushi");
monicaFavResto.add("Pancake");
monicaFavResto.add("Eggy");
monicaFavResto.add("Tempura");
monicaFavResto.add("Bento");
monicaFavResto.add("Eggy");
monicaFavResto.add("Padang");
monicaFavResto.add("Tteok");
monicaFavResto.add("Sushi");
monicaFavResto.add("Sushi");

const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: [...monicaFavColor],
  isHavePet: true,
  education: [
    {
      name: "SD 01",
      city: "Jakarta",
      graduate: 2016,
    },
    {
      name: "SMP 02",
      city: "Jakarta",
      graduate: 2019,
    },
    {
      name: "SMA 03",
      city: "Tangerang",
    },
  ],
  favoriteRestaurant: [...monicaFavResto],
};

let wendyFavColor = new Set();
wendyFavColor.add("Blue");
wendyFavColor.add("Black");
wendyFavColor.add("Grey");

let wendyFavResto = new Set();
wendyFavResto.add("Tempura");
wendyFavResto.add("Bento");
wendyFavResto.add("Sushi");
wendyFavResto.add("Pancake");
wendyFavResto.add("Padang");
wendyFavResto.add("Katsu");
wendyFavResto.add("Geprek");
wendyFavResto.add("Pancake");
wendyFavResto.add("Eggy");

const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: [...wendyFavColor],
  isHavePet: false,
  education: [
    {
      name: "SD 02",
      city: "Jakarta",
      graduate: 2010,
    },
    {
      name: "SMP 03",
      city: "Bogor",
      graduate: 2013,
    },
    {
      name: "SMA 01",
      city: "Surabaya",
      graduate: 2016,
    },
    {
      name: "Universitas Maju",
      city: "Tangerang",
    },
  ],
  favoriteRestaurant: [...wendyFavResto],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
