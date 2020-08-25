
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categorys').del()
    .then(function () {
      // Inserts seed entries
      return knex('categorys').insert([
        {category: 'Testing category'},
        {category: 'Anther Test'}
      ]);
    });
};
