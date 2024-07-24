const express = require("express");
const app = express();
// port déclaré dans une variable
const port = 3000;

// Les middlewares doivent être placés dans un autre fichier (ex: authMiddleware.js)
const authMiddleware = (req, res) => {
    if (!req.headers.authorization) {
        res.sendStatus(403);
    }
};

app.get("/profile", authMiddleware, (req, res) => {
    res.send("Profile data");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});