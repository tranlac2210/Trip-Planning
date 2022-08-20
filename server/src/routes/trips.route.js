const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips.controller');

// GET : retrieve all groups
router.get('/all-trips', tripsController.get);

// POST : create a new group
router.post('/add-trip', tripsController.create);

// POST : update an old group
router.put('/update-trip/', tripsController.update);

// DELETE : delete a group
router.delete('/delete-trip/', tripsController.remove);

module.exports = router;
