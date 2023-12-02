/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(function(temple){
        let createElement = document.querySelector("article");
        let templeNameElement = document.querySelector("h3");
        templeNameElement = temple.templeName;
        let imageElement = document.querySelector("img");
        imageElement.src = temple.imageUrl;
        imageElement.alt = temple.location;
        createElement.appendChild(templeNameElement);
        createElement.appendChild(imageElement);
        templesElement.appendChild(article);
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

        case "nonutah":
            filteredTemples = temples.filter(temple => !temple.location.includes("Utah"));
            displayTemples.filter(filteredTemples);
            break;
        
        case "older":
            filteredTemples = temples.filter(temple => temple.dedicated >= new Date (1950, 0, 1));
            displayTemples.filter(filteredTemples);
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
