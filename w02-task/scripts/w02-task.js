/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Emma Shurtliff";
let currentYear = 2023;
let profilePicture = "images/me.jpeg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
fullName = `<strong>${fullName}</strong>`;
nameElement.innerHTML = fullName;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', "Profile Image");


/* Step 5 - Array */
let favoriteFoods = ["Strawberries", "Peach Tacos", "Salsa", "Cucumbers"];
foodElement.innerHTML = favoriteFoods;
let newFood = "Cherry Cheesecake"
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;




e