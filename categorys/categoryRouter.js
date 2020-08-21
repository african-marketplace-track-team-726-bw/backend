const router = require('express').Router();
// const Category = require('./categoryModel.js');
const db = require('../database/db-config.js');
const validate = require('../api/validate.js');

// Base URL /api/categorys

router.use('/:id', validate.user);

// Get Requests
router.get('/', (req, res) => {
    db.select('*')
        .from('categorys')
        .then(categorys => res.status(200).json({data: categorys}))
        .catch((err) => console.log(err));
});


// Post Requests
router.post('/', (req, res) => {
    const categoryData = req.body;
    db('categorys')
        .insert(categoryData)
        .then(id => res.status(201).json({data: id}))
        .catch((err) => console.log(err));
});


module.exports = router;