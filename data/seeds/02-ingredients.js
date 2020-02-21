
exports.seed = function(knex) {
      return knex('ingredients').insert([
          {ingredient_name: 'tomato'},
          {ingredient_name: 'garlic'},
          {ingredient_name: 'meat'},
          {ingredient_name: 'onion'},
          {ingredient_name: 'water'}
      ]);

};
