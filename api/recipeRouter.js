const express = require('express');

const Recipes = require('./recipeModel.js');

const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then((recipes) => {
            res.json(recipes)
        })
        .catch((error) => {
            res.status(500).json({ message:"Failed to get the recipes." })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    Recipes.getShoppingList(id)
        .then((recipe) => {
            if (recipe === []){
                res.status(404).json({message:"this id does not exist"})
            } else {
                res.status(200).json(recipe)
            }
        })
        .catch((error) => {
            res.status(500).json({message:"nope"})
        })
})

module.exports = router