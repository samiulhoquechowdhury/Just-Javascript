const apiUrl = 'https://jsonplaceholder.typicode.com/users';

async function fetchUserData() {
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        const userContainer = document.getElementById('user-container');
        userContainer.innerHTML = '';

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card')
            userCard.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong>${user.email}</p>
                <p><strong>Phone:</strong>${user.phone}</p>
                <p><strong>Website:</strong>${user.website}</p>
            `;
            userContainer.appendChild(userCard)
        });

    } catch (error) {
        console.error("Fetchind data error..")
    }
}
fetchUserData()