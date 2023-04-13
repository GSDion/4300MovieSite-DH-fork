const express = require('express');
const router = express.Router();

//capitalze Item?
const Item = require('../../models/Item');

router.get('/', (req, res) => {res.send('tesing get / item route')});
router.get('/:id', (req, res) => {res.send('tesing get /:id route')});

//@route POST api/items
router.post('/', (req, res) => {
    Item.create(req.body)
    .then((item) => res.json({msg: 'Item added successully'}))
    .catch((err) => res.status(400).json({msg: 'Item added successully'}));
});
router.put('/:id', (req, res) => {res.send('tesing put /:id route')});


module.exports = router;



