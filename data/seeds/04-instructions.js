
exports.seed = function(knex) {

      return knex('instructions').insert([
        {recipe_id: 1, step_number: 1, step_detail: 'pour some water'},
        {recipe_id: 1, step_number: 2, step_detail: 'smash tomatoes'},
        {recipe_id: 1, step_number: 3, step_detail: 'eat'},
        {recipe_id: 2, step_number: 1, step_detail: 'pour some water'},
        {recipe_id: 2, step_number: 2, step_detail: 'make the meat'},
        {recipe_id: 3, step_number: 1, step_detail: 'pour some water'},
        {recipe_id: 3, step_number: 2, step_detail: 'find chicken'}
      ]);

};
