// Import the 'fetch' function if you are using Node.js
// const fetch = require('node-fetch');

// Function to fetch data and display it
function displayCountryDetails() {
    // Make an API request to fetch the data
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Use the forEach function to print details for each country
        data.forEach(country => {
          // Create a new paragraph element for each country's details
          const countryDetails = document.createElement('p');
          
          // Set the text content for the paragraph
          countryDetails.textContent = `Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`;
          
          // Append the paragraph to the document body
          document.body.appendChild(countryDetails);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Call the displayCountryDetails function to fetch and display data
  displayCountryDetails();
  