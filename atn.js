// local reviews data
const reviews = [
  {
    id: 1,
    name: "Ardhi Sasongko",
    job: "Guru IPS",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Jomblo yang sedang mencari......",
  },
  {
    id: 2,
    name: "Ibu Ati",
    job: "Guru IPS",
    // img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    img: "./img/b ati.jpeg",
    text: "Saya adalah guru Bahasa Inggris, semua akan inggrisan pada waktunya :)",
  },
  {
    id: 3,
    name: "Ibu Dewi",
    job: "Administrasi",
    img: "./img/b dewi.jpeg",
    text: "Saya mengurus semua administrasi sekolah, ini foto saya adalah keluarga besar :)",
  },
  {
    id: 4,
    name: "Drs Samsul Munir",
    job: "Kepala Sekolah SMP PLUS At-thahirin",
    img: "./img/pa munir.jpeg",
    text: "Saya adalah kepada sekolah SMP PLUS AT-THAHIRIN",
  },
  {
    id: 5,
    name: "Ibu Fitri",
    job: "Operator Sekolah",
    img: "./img/b fitri.jpeg",
    text: "Jadi operator sekolah teh katingalina gampang, padahalmah pas hari libur harus stand by, belum ngurus dapodik dan lainya, mantapp pokona mah",
  },
  {
    id: 6,
    name: "Pa Anwar",
    job: "Wakases Kesiswaan / Guru Penjasrokes",
    img: "./img/p anwar.jpeg",
    text: "Selain menjadi Wakasek Kesiswaan saya juga menjadi guru olahraga",
  },
  {
    id: 7,
    name: "Pa Dicky",
    job: "Guru Senibudaya",
    img: "./img/p dicki.jpeg",
    text: "selain mengajar mata pelajaran Seni dan budaya saya juga mengajarkan bagaimana seni mencintai si dia dengan baik dan benar, no bucin club2 :D",
  },
  {
    id: 8,
    name: "Ibu Dhanis",
    job: "Guru Bahasa Indonesia",
    img: "./img/b dhanis.jpeg",
    text: "saya mengajar mata pelajaran bahasa indonesia, selain itu saya juga mengajarkan pentingnya bahasa indonesia untuk menjadi anak yang mandiri, seperti photo saya ini yang sedang menikmati kehidupan ini dengan sendiri",
  },
  {
    id: 9,
    name: "Ibu Aisyah",
    job: "Guru IPS dan Bahasa Indonesia",
    img: "./img/b aisyah.jpeg",
    text: "Saya adalah guru mandiri tapi sering juga berdua sih, pokokya saya harus sepasang dengan guru yang bernama bu nazwa, dia adalah bestiquuueee,, kemana-mana harus berdua pokoknya",
  },
  {
    id: 10,
    name: "Ibu Najwa",
    job: "Guru  PPKN",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "selain untuk mengajarkan cinta tanah air kepada seluruh murih at-thahirin, saya juga mengajarkan bagaimana mencintai si dia dengan adil dan beradab, oh iya bestiqueee bu aisyah adalah sobat ampegquee",
  },
];
// Selcet items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});
// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
