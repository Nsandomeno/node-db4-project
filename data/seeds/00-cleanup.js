const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode: 'truncate', // resets the ids
    ignoreTables: ['knex_migrations', 'knex_migration_lock'], // don't empty migration tables
  })


  // DEFAULT --- :
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
    //   return knex('table_name').insert([
    //     {id: 1, colName: 'rowValue1'},
    //     {id: 2, colName: 'rowValue2'},
    //     {id: 3, colName: 'rowValue3'}
    //   ]);
    // });
};
