const express = require('express');
const router = express.Router();
const Tag = require('../models/tag');

///POST: Creates a new tag:
router.post('/tags', (req, res) => {
    const tag = new Tag(req.body);
    tag.save().then(tag => {
        res.status(200).send('Tag was saved');
    }).catch(console.error)
})

////GET: returns All Tags (JSON)
router.get('/tags', (req, res) => {
    Tag.find({}).then(tags => {
        res.json(tags);
    }).catch(console.error)
})

router.delete('/tags/:id', (req, res) => {
    Tag.findOneAndRemove({ _id: req.params.id}).then(tag => {
        res.status(200).send('Tag was deleted');
    }).catch(console.error);
})
module.exports = router;
