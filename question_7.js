const express = require("express");
const app = express();
// port déclaré dans une variable
const port = 3000;

app.get("/hello", (req, res) => {
    res.send("Hello, World!");
});

app.use((req, res) => {
    // console.log("Request received");
    // pas de reponse renvoyée -> attente infinie
    res.send("Request received");
});

// app.get("/hello", (req, res) => {
//     // On ne passera jamais dans cette route puisque le app.use précédent intercepte toutes les requetes
//     res.send("Hello, World!");
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});