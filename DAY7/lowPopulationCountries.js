//            POPULATION LESS THAN 2 LAKHS

// Import the 'fetch' function if you are using Node.js
// const fetch = require('node-fetch');

// Make an API request to fetch the data
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Use the filter function to get countries with population < 2 lakhs
    const lowPopulationCountries = data.filter(
      (country) => country.population < 200000
    );

    // Print the list of low population countries
    console.log(lowPopulationCountries);
  })
  .catch((error) => console.error("Error fetching data:", error));
