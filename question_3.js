const express = require("express");
const mongoose = require("mongoose");

const app = express();
// port déclaré dans une variable
const port = 3000;

mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

// La définition du modèle doit être fait dans un fichier à part (ex: userModel.js)
const userSchema = new mongoose.Schema({
 name: String,
 age: Number,
});

const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
    const user = new User(req.body);
    // erreur : la gestion d'erreur est mal executée
    // user.save((err) => {
    // if (err) return res.status(500).send(err);
    //     res.status(201).send(user);
    // });
    const savedUser = await user.save();
    try {
        res.status(201).send(user);
    } catch (err) {
        return res.status(500).send(err)
    }

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});