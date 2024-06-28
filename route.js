const express = require('express')
const route = express.Router()
const userModel = require('./model/user.model');

// Accueil à la racine du projet
// Permet de tester le serveur 
route.get('/', (req, res) => {
    res.send('Exo CRUD Api **LinkedIn Users**');
})

// CREATE user(s)
route.post('/userCreate', async (req, res) => {
    try {
        const userCreate = await userModel.create(req.body);
        res.status(200).json(userCreate);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
})

// READ pour toute la collection "users"
route.get('/usersList', async (req, res) => {
    try {
        const usersList = await userModel.find({});  // on veut récupérer tous les documents de la collection
        res.status(200).json(usersList);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
})

// READ pour un id donné
route.get('/userById/:id', async (req, res) => {
    try {
        const userById = await userModel.findById(id, req.body)  // on veut récupérer un seul document correspondant à un id donné
        res.status(200).json(userById);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
})


// UPDATE user(s)
route.put('/userUpdate/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const userUpdate = await userModel.findByIdAndUpdate(id, req.body)
        if(!userUpdate) {
            res.status(400).json({
                message: `l'utilisateur ayant l'id : ${id} n'existe pas.`
            })
        }
        res.status(200).json(userUpdate);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
})

// DELETE user(s)
route.delete('/userDelete/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const userDelete = await userModel.findByIdAndDelete(id, req.body)
        if(!userDelete) {
            res.status(400).json({
                message: `L'utilisateur ayant l'id : ${id} n'existe pas`
            })
        }
        res.status(200).json({
            message: error.message
        })
    } catch (error) {
        console.log(error);
        res.status
    }
})



module.exports = route; 