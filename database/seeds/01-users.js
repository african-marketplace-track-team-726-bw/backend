
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "testuser", password: "Lambda", email: "testuser@email.com", name: "Jane Doe", location: "Africa"}
      ]);
    });
};
