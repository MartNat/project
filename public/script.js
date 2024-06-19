const signUpForm = document.getElementById('signUpForm');
const signUpBtn = document.getElementById('create_account');
const loginBtn = document.getElementById('login');

signUpBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission
    
    const formData = new FormData(signUpForm);
    
    try {
        const response = await fetch('/create_account', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            const message = await response.text();
            alert(message); // Display success message
            
            // Optionally, reset the form after successful submission
            signUpForm.reset();
        } else {
            alert('Failed to create account.'); // Display error message if something went wrong
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred.'); // Display error message if fetch fails
    }
});
