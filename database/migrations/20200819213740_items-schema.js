
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments();
      tbl.string('email').unique().notNullable();
      tbl.string('location').notNullable();
      tbl.string('username').notNullable();
      tbl.string('name').notNullable();
  })
  .createTable('categorys', tbl => {
      tbl.increments();
      tbl.string('category').unique(),notNullable();
  })
  .createTable('items', tbl => {
      tbl.increments();
      tbl.integer('users_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  
};
