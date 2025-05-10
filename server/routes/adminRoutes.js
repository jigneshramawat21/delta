const express = require('express'); 
const router = express.Router();

const { registerAdmin, loginAdmin } = require('../controllers/adminController');


const rateLimiter = require('../midlewares/rateLimiter');

router.post('/register', registerAdmin);
router.post('/login', rateLimiter, loginAdmin);
module.exports = router;

