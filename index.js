function sendMail() {
    // Initialize EmailJS with your user ID
    emailjs.init('fxQNi_61L4sWlxQGr'); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID

    // Handle form submission
    document.getElementById('emailForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission 

        // Get user input
        var email = document.getElementById('email').value;
        var name = document.getElementById('name').value;
        var message = document.getElementById('message').value;

        // Validate recipient email address
        if (!email.trim()) {
            alert('Please enter a valid email address.');
            return;
        }

        // Log the email, name, and message values
        console.log('Email:', email);
        console.log('Name:', name);
        console.log('Message:', message);

        // Send email using EmailJS
        emailjs.send('service_hbklltx', 'template_gdqw4p1', { // Replace placeholders with your actual service and template IDs
            email: email,
            name: name, // Add sender's name
            message: message
        })
        .then(function(response) {
            console.log('Email sent successfully:', response);
            alert('Email sent successfully!');
            closeModal(); // Call function to close modal
        }, function(error) {
            console.error('Error sending email:', error);
            alert('Error sending email.');
        });
    });
}

// Function to close modal
function closeModal() {
    // Get the modal element
    var modal = document.getElementById('myModal');

    // Close the modal
    modal.style.display = 'none';

    // Refresh the page
    location.reload();
}
