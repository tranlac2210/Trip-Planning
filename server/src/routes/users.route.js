const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

// GET : retrieve all users
router.get('/all-users', usersController.get);

// POST : create a new user
router.post('/add-user', usersController.create);

// POST : update an old user
router.put('/update-user/', usersController.update);

// DELETE : delete a user
router.delete('/delete-user/', usersController.remove);

module.exports = router;
