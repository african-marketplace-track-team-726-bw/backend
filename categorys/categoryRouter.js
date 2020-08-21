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

// Put Request
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;
    db('categorys')
        .where('id', id)
        .update(changes)
        .then(count => {
            if (count > 0) {
                res.status(200).json({mesasge: 'Record numbers changed', count});
            } else {
                res.status(404).json({message: 'That id does not exist'});
            }
        })
        .catch((err) => console.log(err));
});

// Delete Request
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    db('categorys')
        .where('id', id)
        .delete()
        .then(count => {
            if (count > 0) {
                res.status(200).json({message: 'Number of records deleted', count});
            } else {
                res.status(404).json({message: 'That is not a valid id'});
            }
        })
        .catch((err) => console.log(err));
});


module.exports = router;