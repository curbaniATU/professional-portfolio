const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/education', mainController.education);
router.get('/projects', mainController.projects);

module.exports = router;