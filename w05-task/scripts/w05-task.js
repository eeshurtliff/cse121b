/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    const templesElement = document.getElementById("temples");
    temples.forEach(function(temple){
        console.log(temple)
        let articleElement = document.createElement("article");

        let templeNameElement = document.createElement("h3");
        templeNameElement.textContent = temple.templeName;

        let imageElement = document.createElement("img");
        imageElement.src = temple.imageUrl;
        imageElement.alt = temple.location;

        articleElement.appendChild(templeNameElement);
        articleElement.appendChild(imageElement);
        templesElement.appendChild(articleElement);
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async() =>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        let data = await response.json();
        templeList.push(...data);
    }

}


/* reset Function */
const reset = function(){
    templesElement.innerHTML = "";
}


/* sortBy Function */
const sortBy = function(temples){
    reset()
    let filter = (document.querySelector("#sortBy").value);
    let filteredTemples;
    switch (filter) {
        case "utah":
            filteredTemples = temples.filter(temple => temple.location.includes("Utah"))
            displayTemples(filteredTemples);

            break;

        case "notutah":
            filteredTemples = temples.filter(temple => !temple.location.toLowerCase().includes("Utah"));
            displayTemples(filteredTemples);
            break;
        
        case "older":
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) >= new Date(1950, 0, 1));
            displayTemples(filteredTemples);
            break;

        case "all":
            displayTemples(temples)

    }
}



getTemples();
console.log("This will print");
console.log(templeList);

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});
