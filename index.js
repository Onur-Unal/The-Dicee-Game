var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImageSource); //or below

// document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); 

document.querySelector(".img2").setAttribute("src", randomImageSource2); //or below

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").style.color = "#6DA8DE";
    document.querySelector("h1").innerHTML = "🥇 Player Wins!🥈";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").style.color = "#8A912A";
    document.querySelector("h1").innerHTML = "🥈Computer Wins! 🥇";
} else {
    document.querySelector("h1").style.color = "white";
    document.querySelector("h1").innerHTML = "🐱‍💻Draw!🐱‍💻";
}