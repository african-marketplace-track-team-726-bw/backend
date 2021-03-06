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
    return db("categorys");
}

function findBy(filter) {
    return db("categorys").where(filter).first();
}

function findById(id) {
    return db("categorys").where({id: id}).first();
}

function add(user) {
    return db("categorys").insert(user, "id").then(ids => findById(ids[0]));
}

function update(changes, id) {
    return db("categorys").where({ id: id }).update(changes).then(() => findById(id));
}

function remove(id) {
    return db("categorys").where({id: id}).delete();
}

