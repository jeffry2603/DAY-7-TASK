// Import the 'fetch' function if you are using Node.js
// const fetch = require('node-fetch');

// Function to fetch data and calculate total population
function calculateTotalPopulation() {
    // Make an API request to fetch the data
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Use the reduce function to calculate total population
        const totalPopulation = data.reduce((accumulator, country) => {
          return accumulator + (country.population || 0); // Ensure population is a number and handle missing data
        }, 0);
        
        // Display the total population
        const resultElement = document.createElement('p');
        resultElement.textContent = `Total Population: ${totalPopulation}`;
        document.body.appendChild(resultElement);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Call the calculateTotalPopulation function to fetch and calculate data
  calculateTotalPopulation();
  