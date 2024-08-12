// URL of the API
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Function to fetch data from the API and display it
async function fetchAndDisplayUsers() {
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Get the user container element
        const userContainer = document.getElementById('user-container');

        // Clear any existing content
        userContainer.innerHTML = '';

        // Loop through the user data and create user cards
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            userCard.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> ${user.website}</p>
            `;

            // Append the user card to the container
            userContainer.appendChild(userCard);
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Call the function to fetch and display the users
fetchAndDisplayUsers();
