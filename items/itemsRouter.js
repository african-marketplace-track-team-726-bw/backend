const router = require('express').Router();
// const Items = require('./itemsModel.js');
const db = require('../database/db-config.js');
const validate = require('../api/validate.js');

// Base URL /api/items

router.use('/:id', validate.user);

// Get Requests
router.get('/', (req, res) => {
    db.select('*')
        .from('items')
        .then(items => res.status(200).json({data: items}))
        .catch((err) => console.log(err));
});


// Post Requests
router.post('/', (req, res) => {
    const itemData = req.body;
    db('items')
        .insert(itemData)
        .then(id => res.status(201).json({data: id}))
        .catch((err) => console.log(err));
});


module.exports = router;