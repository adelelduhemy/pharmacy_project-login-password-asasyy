const express = require("express");
const path = require("path");
const collection = require("./config");
const bcrypt = require('bcrypt');

const app = express();
// convert data into json format
app.use(express.json());


// Serve static files from the "public" directory
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

// Set up EJS as the view engine
app.set("view engine", "ejs");

// Set up views directory
app.set("views", path.join(__dirname, "..", "views"));

// Handle HTML files with EJS
app.engine("html", require("ejs").renderFile);


app.get("/", (req, res) => {
    res.render("login");
});





app.get("/signup", (req, res) => {
    res.render("signup");
});

// Register User
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    }

    // Check if the username already exists in the database
    const existingUser = await collection.findOne({ name: data.name });

    if (existingUser) {
        res.send('User already exists. Please choose a different username.');
    } else {
        // Hash the password using bcrypt
        const saltRounds = 10; // Number of salt rounds for bcrypt
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword; // Replace the original password with the hashed one

        const userdata = await collection.insertMany(data);
        console.log(userdata);
        res.redirect("/");    }
    
});

// Login user 
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            res.send("User name cannot found")
        }
        // Compare the hashed password from the database with the plaintext password
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (!isPasswordMatch) {
            res.send("wrong Password");
        }
        else {
            // Redirect to index.html after successful login
            res.redirect("/index.html");
        }
    }
    catch {
        res.send("wrong Details");
    }
});



// Define route for serving index.html
app.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

// Define route for serving Medicine Store.html
app.get("/Medicine%20Store.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Medicine Store.html"));
});

// Define route for serving Medicine Store.html
app.get("/access_location.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "access_location.html"));
});

// Define route for serving Add and Remove.html
app.get("/Add%20and%20Remove.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Add and Remove.html"));
});

// Define route for serving Admin Verification.html
app.get("/Admin%20Verification.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Admin Verification.html"));
});

// Define route for serving Buy_Medicine1.html
app.get("/Buy_Medicine1.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Buy_Medicine1.html"));
});
// Define route for serving Buy_Medicine1.html
app.get("/Buy_Medicine2.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Buy_Medicine2.html"));
});
// Define route for serving Buy_Medicine1.html
app.get("/Buy_Medicine3.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Buy_Medicine3.html"));
});
// Define route for serving Buy_Medicine1.html
app.get("/Buy_Medicine4.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Buy_Medicine4.html"));
});
// Define route for serving Buy_Medicine1.html
app.get("/Buy_Medicine5.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Buy_Medicine5.html"));
});
// Define route for serving Buy_Medicine1.html
app.get("/Buy_Medicine6.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Buy_Medicine6.html"));
});


// Define route for serving cash_card.html
app.get("/cash_card.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "cash_card.html"));
});

// Define route for serving Check Expired Data.html
app.get("/Check%20Expired%20Data.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Check Expired Data.html"));
});

// Define route for serving congrats_change_pass.html
app.get("/congrats_change_pass.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "congrats_change_pass.html"));
});


// Define route for serving Contact Customer Service.html
app.get("/Contact%20Customer%20Service.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Contact Customer Service.html"));
});

// Define route for serving Contact Suppliers.html
app.get("/Contact%20Suppliers.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Contact Suppliers.html"));
});


// Define route for serving credit_card.html
app.get("/credit_card.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "credit_card.html"));
});

// Define route for serving forget_password.html
app.get("/forget_password.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "forget_password.html"));
});


// Define route for serving location.html
app.get("/location.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "location.html"));
});

// Define route for serving login_signup.html
app.get("/login_signup.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "login_signup.html"));
});

// Define route for serving login.html
app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "login.html"));
});


// Define route for serving Medicine 1.html
app.get("/Medicine%201.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Medicine 1.html"));
});
// Define route for serving Medicine 1.html
app.get("/Medicine%202.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Medicine 2.html"));
});
// Define route for serving Medicine 1.html
app.get("/Medicine%203.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Medicine 3.html"));
});
// Define route for serving Medicine 1.html
app.get("/Medicine%204.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Medicine 4.html"));
});
// Define route for serving Medicine 1.html
app.get("/Medicine%205.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Medicine 5.html"));
});
// Define route for serving Medicine 1.html
app.get("/Medicine%206.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Medicine 6.html"));
});


// Define route for serving Medicine Inventory.html
app.get("/Medicine%20Inventory.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Medicine Inventory.html"));
});


// Define route for serving order_successfuly_completed.html
app.get("/order_successfuly_completed.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "order_successfuly_completed.html"));
});

// Define route for serving Pharmacy Management System.html
app.get("/Pharmacy%20Management%20System.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Pharmacy Management System.html"));
});


// Define route for serving Product Review.html
app.get("/Product%20Review.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Product Review.html"));
});


// Define route for serving recovery_password.html
app.get("/recovery_password.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "recovery_password.html"));
});

// Define route for serving Report.html
app.get("/Report.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Report.html"));
});


// Define route for serving signup.html
app.get("/signup.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "signup.html"));
});

// Define route for serving Store Location.html
app.get("/Store%20Location.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Store Location.html"));
});

// Define route for serving successfully_registered.html
app.get("/successfully_registered.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "successfully_registered.html"));
});

// Define route for serving type_medicine.html
app.get("/type_medicine.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "type_medicine.html"));
});

// Define route for serving verification.html
app.get("/verification.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "verification.html"));
});


// Define route for serving Waiting list.html
app.get("/Waiting%20list.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Waiting list.html"));
});


// Define route for serving Admin Verification.js
app.get("/Admin%20Verification.js", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "Admin Verification.js"));
});


// Define route for serving bot3.js
app.get("/bot3.js", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "bot3.js"));
});

// Define route for serving chatbot.html
app.get("/chatbot.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "chatbot.html"));
});

// Define route for serving contactus.html
app.get("/contactus.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "contactus.html"));
});

// Define Port for Application
const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});


