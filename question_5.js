// pour utiliser ce type d'imports (ECMAScript), on doit définir le "type":"module" dans package.json
// import express from "express";
const express = require("express");
const app = express();
// port déclaré dans une variable
const port = 3000;

app.get("/hello", (req, res) => {
 res.send("Hello, World!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
