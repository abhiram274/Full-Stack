const express = require("express")
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express()
const PORT = 3000;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Setup file upload using multer
const upload = multer({ dest: 'uploads/' });

// Serve the HTML form
app.use(express.static(path.join(__dirname)));

// Handle form submission
app.post('/submit', upload.single('photo'), (req, res) => {
    console.log("=== New Form Submission ===");
    console.log("First Name:", req.body.fname);
    console.log("Last Name:", req.body.lname);
    console.log("Email:", req.body.email);
    console.log("Password:", req.body.password);
    console.log("Phone:", req.body.phone);
    console.log("Date of Birth:", req.body.dob);
    console.log("Age:", req.body.age);
    console.log("Website:", req.body.website);
    console.log("Gender:", req.body.gender);
    console.log("Course:", req.body.course);
    console.log("Skills:", req.body.skills);
    console.log("Hobbies:", req.body.hobbies);
    console.log("Favorite Color:", req.body.color);
    console.log("Self-Rating:", req.body.rating);
    console.log("Preferred Time:", req.body.time);
    console.log("Country:", req.body.country);
    console.log("Address:", req.body.address);
    if (req.file) {
        console.log("Photo Uploaded:", req.file.originalname);
    }

    res.send("<h2>Form submitted successfully! Check the server console for details.</h2>");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
