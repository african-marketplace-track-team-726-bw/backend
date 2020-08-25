
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {users_id: 1, categorys_id: 1, product: 'Test Product #1', description: 'Please test me', price: 'Free today only'},
        {users_id: 1, categorys_id: 2, product: 'Test Product #2', description: 'Please work', price: 'Free today only'},
        {users_id: 1, categorys_id: 1, product: 'Testing', description: 'Testing 123', price: 'Free today only'}
      ]);
    });
};
