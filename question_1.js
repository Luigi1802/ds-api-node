const express = require("express");
const app = express();
// port déclaré dans une variable
const port = 3000;

// On déclare la constante users en globale pour y avoir accès partout
const users = [{ name: "Alice", age: 25 },{ name: "Bob", age: 30 },];

app.get("/users", (req, res) => {
    // const users = [{ name: "Alice", age: 25 },{ name: "Bob", age: 30 },];
    // erreur : on redeclare à chaque fois et non accessible dans d'autres portées
    res.json(users);
});

app.post("/users", (req, res) => {
    // Vérification du body entré
    if (req.body && req.body.name && req.body.age) {
        // const newUser = req.body; 
        // erreur : la structure n'est pas bonne
        const newUser = {name: req.body.name, age: req.body.age}; 
        users.push(newUser);
        res.status(201).json(newUser);
    } else {
        res.status(400).json({message:"Un nom (name) et un age (age) sont requis."});
    }
});

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});