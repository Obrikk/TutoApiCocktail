// Imoprt des omdules nécessaires
const express = require('express') 
const User = require('../models/user')

// Récupération du router d'express
let router = express.Router()

//Routage de la ressource User
router.get('', (req,res) => {
    User.findAll()
        .then( users => res.json({data: users}))
        .catch( err => res.status(500).json({message: 'Database error', error: err}))
})

router.get('/:id', (req,res) => {
    let userId = pa(req.params.id)
})

router.put('')

router.patch('/:id')

router.delete('/:id')