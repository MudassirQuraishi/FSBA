


// importing express
const express = require('express');

// imporitng controllers
const userController = require('../controller/userController');

const router = express.Router();

// write the router code here
router.post('/data',userController.saveDataToDatabase);

router.delete('/delete-user/:id',userController.deleteDataFromDatabase);

router.get('/user-data',userController.getAllData);


// export routes
module.exports = router;