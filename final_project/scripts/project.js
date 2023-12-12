/* W05: Programming Tasks */

/* Declare and initialize global variables */
const countriesElement = document.getElementById("countries");
let countryList = [];

/* async displayCountries Function */
const displayCountries = (countries) => {
    const countriesElement = document.getElementById("countries");
    countries.forEach(function(country){
        //console.log(country)
        let articleElement = document.createElement("article");

        let CountryNameElement = document.createElement("h3");
        CountryNameElement.textContent = country.name;
        console.log(country.name);

        let countryRegionElement = document.createElement("h4");
        countryRegionElement.textContent = `Region: ${country.region}`;

        let countryCurrencyElement = document.createElement("h4");
        countryCurrencyElement.textContent =`Currency: ${country.currency_symbol} ${country.currency_name}`;

        articleElement.appendChild(CountryNameElement);
        articleElement.appendChild(countryRegionElement);
        articleElement.appendChild(countryCurrencyElement);
        countriesElement.appendChild(articleElement);
    })
}

/* async getTemples Function using fetch()*/
const getCountries = async() =>{
    const response = await fetch("https://run.mocky.io/v3/f3b016ad-68c6-4760-af3f-e4213fcb89d8");
    if (response.ok){
        let data = await response.json();
        countryList.push(...data);
    }

}


/* reset Function */
const reset = function(){
    countriesElement.innerHTML = "";
}


/* sortBy Function */
const sortBy = function(countries){
    reset()
    let filter = (document.querySelector("#sortBy").value);
    let filteredCountries;
    switch (filter) {
        case "europe":
            filteredCountries = countries.filter(country => country.region.includes("Europe"));
            displayCountries(filteredCountries);

            break;

        case "asia":
            filteredCountries = countries.filter(country => country.region.includes("Asia"));
            displayCountries(filteredCountries);
            break;

        case "americas":
            filteredCountries = countries.filter(country => country.region.includes("Americas"));
            displayCountries(filteredCountries);
            break;
        
        case "africa":
            filteredCountries = countries.filter(country => country.region.includes("Africa"));
            displayCountries(filteredCountries);
            break;

        case "other":
            filteredCountries = countries.filter(country => !country.region.includes("Americas") && !country.region.includes("Europe") && !country.region.includes("Asia") && !country.region.includes("Africa"));
            displayCountries(filteredCountries);
            break;
            
            
        case "euro":
            filteredCountries = countries.filter(country => country.currency_name.includes("Euro"));
            console.log(filteredCountries)
            displayCountries(filteredCountries);
            break;

        case "usdollar":
            filteredCountries = countries.filter(country => country.currency_name.includes("US Dollar") || country.currency_name.includes("United States dollar"));
            console.log(filteredCountries)
            displayCountries(filteredCountries);
            break;

        case "all":
            displayCountries(countries)

    }
}



getCountries();
console.log("This will print");
// console.log(countryList);

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {sortBy(countryList)});
