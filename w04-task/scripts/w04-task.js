/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};


myProfile.name = "Emma Shurtliff";
myProfile.photo = "images/me.jpeg";
myProfile.favoriteFoods = [
    "strawberries",
    "Corn",
    "Peaches",
    "Sweet Potatoes"
];

myProfile.hobbies =[
    "Tennis",
    "Drawing",
    "Watching shows",
    "Reading"
];

myProfile.placesLived = [];


/* Populate Profile Object with placesLive objects */



myProfile.placesLived.push(
    {
        place: "Idaho Falls, ID",
        length: "6 years"
    }
);

myProfile.placesLived.push(
    {
        place: "Ashland, MA",
        length: "8 years"
    }
);








/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(function(food) {
    let listItem = document.createElement("li");
    listItem.textContent = food;
    document.querySelector("#favorite-foods").appendChild(listItem);

})

/* Hobbies List */
myProfile.hobbies.forEach(function(hobby) {
    let listItem = document.createElement("li");
    listItem.textContent = hobby;
    document.querySelector("#hobbies").appendChild(listItem);

})

/* Places Lived DataList */

myProfile.placesLived.forEach(function(place) {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let ddElement = document.createElement("dd");
    ddElement.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector('#places-lived').appendChild(ddElement);

});

