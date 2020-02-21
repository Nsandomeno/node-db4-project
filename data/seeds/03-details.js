
exports.seed = function(knex) {
      return knex('recipe_details').insert([
        {recipe_id: 1, recipe_name: 'sauce', ingredient_name: 'tomato', ingredient_id: 1, quantity: 40.04, units: 'oz.'},
        {recipe_id: 1, recipe_name: 'sauce', ingredient_name: 'garlic', ingredient_id: 2, quantity: 0.04, units: 'oz.'},
        {recipe_id: 2, recipe_name: 'meatloaf', ingredient_name: 'meat', ingredient_id: 3, quantity: 10, units: 'oz.'},
        {recipe_id: 2, recipe_name: 'meatloaf', ingredient_name: 'onion', ingredient_id: 4, quantity: 6, units: 'oz.'},
        {recipe_id: 3, recipe_name: 'cutlet', ingredient_name: 'water', ingredient_id: 5, quantity: 90, units: 'floz'},
      ]);

};
