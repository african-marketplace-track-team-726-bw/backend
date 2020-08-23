const router = require('express').Router();

const db = require('../database/db-config.js');
const validate = require('../api/validate.js');

// Base URL /api

router.get('/by-category/:categorys_id', (req, res) => {
    const {categorys_id} = req.params;
    db('items')
        .where('categorys_id', categorys_id)
        .then((items) => res.status(200).json({data: items}))
        .catch((err) => console.log(err))
});

router.get('/by-user/:users_id', (req, res) => {
    const {users_id} = req.params;
    db('items')
        .where('users_id', users_id)
        .then((items) => res.status(200).json({data: items}))
        .catch((err) => console.log(err))
});

module.exports = router;