const express = require("express");
const mongoose = require("mongoose");

const app = express();
// port déclaré dans une variable
const port = 3000;

mongoose.connect("mongodb://localhost/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// La définition du modèle doit être fait dans un fichier à part (ex: userModel.js)
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model("User", userSchema);

app.use(express.json());

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
        return res.status(500).send(err);
    }
});

app.get("/users/:id", async (req, res) => {
    const id = req.params.id;
    // ajout d'un contrôle sur l'id
    if (!id) {
        return res.status(400).send("A user ID is required.");
    }
    // erreur : la gestion d'erreur est mal executée
    // erreur : il manque un code statut en cas de réussite
    // User.findById(req.params.id, (err, user) => {
    // if (err) return res.status(500).send(err);
    //     res.send(user);
    // });
    const result = await User.findById(req.params.id);
    try {
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});