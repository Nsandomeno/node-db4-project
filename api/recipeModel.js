// import config object as db
const db = require('../data/dbConfig.js');
// export all function to recipe-router.js 
// - add functions to the exported object as you go
module.exports = {
    // helper functions:
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

// getShoppingList(recipe_id): 
// - should return a list of all ingredients...
// - ... and quantities for a given recipe
function getShoppingList(id) {
    return db('recipe_details')
        .where('recipe_details.recipe_id', id)
}

// getInstructions(recipe_id):
//  should return a list of step by step instructions
//  for preparing a recipe
function getInstructions(id) {
    return db('instructions')
        .where('instructions.recipe_id', id)
}

// - GET /api/ingredients/:id/recipes:
// all recipes in the system that utilize a single ingredient
// function containedIn(id) {
//     return db('')
// }

