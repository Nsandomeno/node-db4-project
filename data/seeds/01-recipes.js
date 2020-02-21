
exports.seed = function(knex) {
      return knex('recipes').insert([
        {recipe_name: 'sauce'},
        {recipe_name: 'meatloaf'},
        {recipe_name: 'cutlet'}
      ]);
};
