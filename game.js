//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasında rasgele sayı tut.
const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

let score = 10;
let topScore = 0;

//? CheckBtn basıldığında kontrol yap.
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  //   console.log(guessInput);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");

  //? eğer input girilmediyse kullaniciya uyari ver.
  if (!guessInput) {
    msg.innerText = "Please enter a number";
  } else if (randomNumber === guessInput) {
    msg.innerHTML = ` Congrats You Win ❤️ `;
    document.querySelector("body").style.background = "green";
    body.className = "bg-success";
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }

    document.querySelector(".secret-number").textContent = randomNumber;
  } else {
    if (score > 0) {
      score--;

      guessInput > randomNumber
        ? (msg.innerHTML = "👎 DECREASE")
        : (msg.innerHTML = "👆INCREASE");
    } else {
      msg.innerText = `YOU LOST 🤞`;
      document.querySelector(".check-btn").disabled = true;
    }
    document.querySelector(".score").textContent = score;
  }
});

//? again basildiginda oyunu baslangic degerine kur.
document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".score").textContent = score;
  const randomNumber = Math.round(Math.random() * 100);
});

//! eger rasgele sayi ==input.value
//? tebrikler bildiniz.
//? background = green
//? eger score > topScore
//?  topScore = score

//! değilse ;
//! score > 0
//? score = score-1
//? eger rasgele sayi <input.value
//? AZALT
//? değilse
//? ARTTIR

//! score <= 0
//? üzgünüz kaybettiniz.

myObj = { a: 1, b: 2, c: 3 };
localStorage.setItem("OBJ", JSON.stringify(myObj));
const readObj = localStorage.getItem("OBJ");
const readOBJ = JSON.parse(localStorage.getItem("OBJ"));
console.log(typeof readObj);
console.log(typeof readOBJ);
console.log(readOBJ);
