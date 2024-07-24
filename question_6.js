const express = require("express");
const app = express();

// port déclaré dans une variable
const port = 3000;

app.get("/addUser", (req, res) => {
    res.send("User added");
});

app.delete("/deleteUser", (req, res) => {
    res.send("User deleted");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});