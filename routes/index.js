const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');



router.get('/',homeController.home);


router.post('/add-habit',homeController.addHabit);
router.get('/delete/:id',homeController.deleteHabit);
router.use("/7-days",require("./7days"));

module.exports = router;