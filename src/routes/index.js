/*
 * Author: Muhassin Babu MM
 * Created Date: Monday November 22nd 2021
 * Version : 1.0.0
 * Product : Web Routes.
 */

const express = require('express');
const router = express.Router();

const { getUsers, getUser, createUser } = require('../controllers/usersController');

router.get('/users/create', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);


module.exports = router;