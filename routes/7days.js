const express = require('express');
const router = express.Router();
const weekController = require('../controllers/7days_controller');

router.get("/",weekController.home);
router.get("/update/:id/:day/:value",weekController.update);
module.exports = router;