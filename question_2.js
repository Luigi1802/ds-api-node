const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
// port déclaré dans une variable
const port = 3000;
// secretkey en const, plutot dans une variable du .env caché
const secretkey = "ma_secretket_mystere"

app.post("/login", (req, res) => {
    const user = { id: 1, username: "john" };
    const token = jwt.sign(user, secretkey);
    res.json({ token });
});

app.get("/protected", (req, res) => {
    const token = req.headers.authorization;
    jwt.verify(token, secretkey, (err, decoded) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({ message: "Welcome to the protected route!" });
        }
    });
});

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});