
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 255).notNullable().unique()
  })
  .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('ingredient_name', 255).notNullable() // for now they will not be unique due to the ability to have the same ingredient used in many recipes
  })
  .createTable('instructions', tbl => {
        // tbl.primary(['recipe_id'])
        tbl.increments('step_id')

        // foreign key
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        // other fields
        tbl.integer('step_number')
            .notNullable()
            .unsigned()

        tbl.string('step_detail', 255)
            .notNullable()           
  })
  .createTable('recipe_details', tbl => {
      tbl.primary(['recipe_id', 'ingredient_id'])

      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

        tbl.string('recipe_name', 255)
        tbl.string('ingredient_name', 255)

    tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')

        tbl.float('quantity').notNullable()
        tbl.string('units', 4)
  })
};

exports.down = function(knex) {
  return knex.schema 
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_details')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
