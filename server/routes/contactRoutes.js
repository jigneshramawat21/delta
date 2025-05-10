const express = require('express');

const router = express.Router();

const { getContacts, getAllContacts}= require('../controllers/contactController');

router.post('/', getContacts);
router.get('/', getAllContacts);

module.exports = router;