//      ASIA COUNTRIES

// Import the 'fetch' function if you are using Node.js
// const fetch = require('node-fetch');

// Make an API request to fetch the data
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Use the filter function to get countries from Asia
    const asiaCountries = data.filter(country => country.region === 'Asia');
    
    // Print the list of Asia countries
    console.log(asiaCountries);
  })
  .catch(error => console.error('Error fetching data:', error));
