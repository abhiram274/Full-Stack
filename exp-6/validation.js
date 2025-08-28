document.getElementById("registrationForm").addEventListener("submit", function(event) {
    let valid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    // First Name Validation
    const fname = document.getElementById("fname").value.trim();
    if (fname.length < 2) {
        document.getElementById("fnameError").textContent = "First name must be at least 2 characters.";
        valid = false;
    }

    // Last Name Validation
    const lname = document.getElementById("lname").value.trim();
    if (lname.length < 2) {
        document.getElementById("lnameError").textContent = "Last name must be at least 2 characters.";
        valid = false;
    }

    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        valid = false;
    }

    // Password Validation
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    // Phone Validation
    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (phone && !phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone must be in format 123-456-7890.";
        valid = false;
    }

    // Date of Birth Validation
    const dob = document.getElementById("dob").value;
    if (!dob) {
        document.getElementById("dobError").textContent = "Please select your date of birth.";
        valid = false;
    }

    // Age Validation
    const age = document.getElementById("age").value;
    if (age && (age < 1 || age > 100)) {
        document.getElementById("ageError").textContent = "Age must be between 1 and 100.";
        valid = false;
    }

    // Gender Validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("").textContent = "Please select your gender.";
        valid = false;
    }
genderError
    // Course Validation
    const course = document.getElementById("course").value;
    if (!course) {
        document.getElementById("courseError").textContent = "Please select a course.";
        valid = false;
    }

    if (!valid) {
        event.preventDefault(); // Stop form submission
    }
});
