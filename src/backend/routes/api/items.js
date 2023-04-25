const express = require('express');
const router = express.Router();
//router.get('/', (req, res) => {res.send('testing get / item route')});
//router.get('/:id', (req,res) => {res.send('testing get /:id route')});
//router.post('/', (req,res ) => {res.send('testing post / route')});
//router.put('/:id', (req, res ) => {res.send('testing put /:id route')});


const Item = require('../../models/Item');

//Get Items
//@route GET api/items
router.get('/', (req, res) => {
    Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(404).json({ noitemsfound: 'No Items found'}))
});
//@route GET api/items/:id
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({ noitemfound: 'No Item Found'}));
});

//Add a new item
//@route POST api/items
router.post('/', (req, res) => {
    console.log(req.body);
    Item.create(req.body)
    .then((item) => res.json({msg: 'Item added successully'}))
    .catch((err) => res.status(400).json({ error: 'Unable to add this item'}));
});

//Update item
//@route GET api/items/:id
router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => res.json({msg: 'Updated successfully'}))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database'})
            );
});

//Delete item
router.delete('/:id', (req,res) => {
    Item.findByIdAndRemove(req.params.id, req.body)
        .then((item) => res.json({msg: 'Item entry deleted successfully'}))
        .catch((err) => res.status(400).json({ error: 'No such item'}));
});

module.exports = router;



