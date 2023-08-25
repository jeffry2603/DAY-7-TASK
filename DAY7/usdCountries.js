// Import the 'fetch' function if you are using Node.js
// const fetch = require('node-fetch');

// Function to fetch data and display countries using USD
function displayUSDCountries() {
    // Make an API request to fetch the data
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Use the filter function to get countries using USD
        const usdCountries = data.filter(country => {
          return country.currencies && country.currencies.USD;
        });
  
        // Display the countries using USD
        if (usdCountries.length > 0) {
          const resultElement = document.createElement('div');
          resultElement.innerHTML = '<h2>Countries Using US Dollars (USD)</h2>';
          
          const ul = document.createElement('ul');
          usdCountries.forEach(country => {
            const li = document.createElement('li');
            li.textContent = country.name.common;
            ul.appendChild(li);
          });
  
          resultElement.appendChild(ul);
          document.body.appendChild(resultElement);
        } else {
          const noResultsElement = document.createElement('p');
          noResultsElement.textContent = 'No countries found using US Dollars (USD).';
          document.body.appendChild(noResultsElement);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Call the displayUSDCountries function to fetch and display data
  displayUSDCountries();
  