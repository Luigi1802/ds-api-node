const express = require("express");
const app = express();
// port déclaré dans une variable
const port = 3000;

app.use(express.json());

app.post("/register", (req, res) => {
    const { username, password } = req.body;
    // ajout du controle !password, sinon on pourrait avoir un undefined.length
    if (!username || !password || password.length < 6) {
        return res.status(400).send("Invalid data");
    }
    res.status(201).send("User registered");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});