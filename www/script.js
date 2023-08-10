$(document).ready(function () {
    $('#login-form').submit(function (e) {
        // Prevent the form from actually submitting
        e.preventDefault();

        // Get the email and password values from the form
        var email = $('#email').val();
        var password = $('#password').val();

        // Send the POST request to the login route
        $.post('/login', { email: email, password: password }, function (response) {
            // Handle the response from the server
            if (response.valid) {
                $('#message').text('Login successful!');
                // Modify the homepage content on successful login
                $('#content').html('<h2>Welcome to your account!</h2>');
            } else {
                $('#message').text('Login failed! Incorrect email or password.');
                // Modify the homepage content on failed login
                $('#content').html('<h2>Please try again.</h2>');
            }
        });
    });
});
