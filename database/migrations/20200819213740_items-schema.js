exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl.string('email').unique().notNullable();
      tbl.string('location').notNullable();
      tbl.string('username').notNullable();
      tbl.string('name').notNullable();
      tbl.string('password').notNullable();
    })
    .createTable('categorys', tbl => {
      tbl.increments();
      tbl.string('category').unique().notNullable();
    })
    .createTable('items', tbl => {
      tbl.increments();
      tbl.integer('users_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
      tbl.integer('category_id').unsigned().notNullable().references('id').inTable('categorys').onUpdate('CASCADE').onDelete('CASCADE');
      tbl.string('product').notNullable();
      tbl.string('description').notNullable();
      tbl.string('price').notNullable();
    })
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('items')
    .dropTableIfExists('categorys')
    .dropTableIfExists('users')
}; 
