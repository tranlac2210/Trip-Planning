const express = require('express');
const router = express.Router();
const groupsController = require('../controllers/groups.controller');

// GET : retrieve all groups
router.get('/all-groups', groupsController.get);

// POST : create a new group
router.post('/add-group', groupsController.create);

// POST : update an old group
router.put('/update-group/', groupsController.update);

// DELETE : delete a group
router.delete('/delete-group/', groupsController.remove);

module.exports = router;
