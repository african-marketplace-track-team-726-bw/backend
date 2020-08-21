const db = require("../database/db-config.js");

module.exports = {
    findAll,
    findBy,
    findById,
    add,
    update,
    remove
};

function findAll() {
    return db("items");
}

function findBy(filter) {
    return db("items").where(filter).first();
}

function findById(id) {
    return db("items").where({id: id}).first();
}

function add(user) {
    return db("items").insert(user, "id").then(ids => findById(ids[0]));
}

function update(changes, id) {
    return db("items").where({ id: id }).update(changes).then(() => findById(id));
}

function remove(id) {
    return db("items").where({id: id}).delete();
}

