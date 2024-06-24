// src/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const basicAuth = require('../middleware/basicAuth');

const router = express.Router();

router.get('/worko/user', basicAuth, userController.getUsers);
router.get('/worko/user/:userId', basicAuth, userController.getUser);
router.post('/worko/user', basicAuth, userController.createUser);
router.put('/worko/user/:userId', basicAuth, userController.updateUser);
router.patch('/worko/user/:userId', basicAuth, userController.patchUser);
router.delete('/worko/user/:userId', basicAuth, userController.deleteUser);

module.exports = router;
