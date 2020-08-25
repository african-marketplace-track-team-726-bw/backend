const router = require('express').Router();
// const Items = require('./itemsModel.js');
const db = require('../database/db-config.js');
const validate = require('../api/validate.js');

// Base URL /api/items


// Get Requests
router.get('/', (req, res) => {
    db.select('*')
        .from('items')
        .then(items => res.status(200).json({data: items}))
        .catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    db.select('*')
        .from('items')
        .where('id', id)
        .then(items => res.status(200).json({data: items}))
        .catch((err) => console.log(err));
})

// router.get('/:categorys_id', (req, res) => {
//     const {categorys_id} = req.params;
//     db('items')
//         .where('categorys_id', categorys_id)
//         .then((items) => res.status(200).json({data: items}))
//         .catch((err) => console.log(err))
// });

// router.get('/users/:users_id', (req, res) => {
//     const {users_id} = req.params;
//     db('items')
//         .where('users_id', users_id)
//         .then((items) => res.status(200).json({data: items}))
//         .catch((err) => console.log(err))
// });

// Post Requests
router.post('/', (req, res) => {
    const itemData = req.body;
    db('items')
        .insert(itemData)
        .then(id => res.status(201).json({data: id}))
        .catch((err) => console.log(err));
});

// Put Request
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;
    db('items')
        .where('id', id)
        .update(changes)
        .then(count => {
            if (count > 0) {
                res.status(200).json({message: 'Record numbers changed', count });
            } else {
                res.status(404).json({message: 'that id does not exist'});
            }
        })
        .catch((err) => console.log(err));
});

// Delete Request
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    db('items')
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