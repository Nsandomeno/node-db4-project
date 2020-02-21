// import config object as db
const db = require('../data/dbConfig.js');
// export all function to recipe-router.js 
// - add functions to the exported object as you go
module.exports = {
    // helper functions:
    getRecipes,
    getShoppingList
}

function getRecipes() {
    return db('recipes')
}

// getShoppingList(recipe_id): 
// - should return a list of all ingredients...
// - ... and quantities for a given recipe
function getShoppingList(id) {
    return db('recipes')
                .join('recipe_details', 'recipe_details.recipe_id', 'recipes.id')
                .select('recipes.id', 'recipes.name', 'recipe_details.ingredient_name', 'recipe_details.quantity', 'recipe_details.units', 'recipe_details.recipe_id')
                
}