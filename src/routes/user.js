/*
 * Author: Muhassin Babu MM
 * Created Date: Monday November 22nd 2021
 * Version : 1.0.0
 * Product : API Routes.
 */

const express = require('express');
const router = express.Router();

const { createUser, getUsers, getUser } = require('../controllers/apiController');


router.get('/api/users', getUsers);
router.get('/api/users/:id', getUser);
router.post('/api/users', createUser);

module.exports = router;