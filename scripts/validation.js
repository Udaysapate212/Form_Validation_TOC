// Common validation patterns
const patterns = {
    name: /^[A-Za-z]{2,20}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[6-9]\d{9}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
};

// Clear all errors
function clearErrors() {
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
}

// Login Form Validation
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrors();
        
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        let isValid = true;

        if (!patterns.email.test(email)) {
            document.getElementById('loginEmailError').textContent = 'Please enter a valid email address';
            isValid = false;
        }

        if (!patterns.password.test(password)) {
            document.getElementById('loginPasswordError').textContent = 'Password must contain at least 8 characters, one uppercase letter, one number, and one special character';
            isValid = false;
        }

        if (isValid) {
            showToast('Login successful! Redirecting...');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        } else {
            showToast('Please fix the errors in the form', 'error');
        }
    });
}

// Google Login Handler
if (document.getElementById('googleLogin')) {
    document.getElementById('googleLogin').addEventListener('click', function() {
        showToast('Redirecting to Google authentication...');
        
        setTimeout(() => {
            showToast('Google login successful!');
            window.location.href = 'index.html';
        }, 3000);
    });
}

// Google Sign Up Handler
if (document.getElementById('googleSignUp')) {
    document.getElementById('googleSignUp').addEventListener('click', function() {
        showToast('Redirecting to Google authentication...');
        
        setTimeout(() => {
            showToast('Google sign up successful!');
            window.location.href = 'index.html';
        }, 3000);
    });
}

// Signup Form Validation
if (document.getElementById('signupForm')) {
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        clearErrors();
        
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        let isValid = true;

        if (!patterns.name.test(firstName)) {
            document.getElementById('firstNameError').textContent = 'First name must be 2-20 letters';
            isValid = false;
        }

        if (!patterns.name.test(lastName)) {
            document.getElementById('lastNameError').textContent = 'Last name must be 2-20 letters';
            isValid = false;
        }

        if (!patterns.email.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            isValid = false;
        }

        if (!patterns.phone.test(phone)) {
            document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number';
            isValid = false;
        }

        if (!patterns.password.test(password)) {
            document.getElementById('passwordError').textContent = 'Password must contain at least 8 characters, one uppercase letter, one number, and one special character';
            isValid = false;
        }

        if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
            isValid = false;
        }

        if (isValid) {
            showToast('Account created successfully! Redirecting...');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        } else {
            showToast('Please fix the errors in the form', 'error');
        }
    });
}