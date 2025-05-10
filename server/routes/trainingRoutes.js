const express = require('express');
const router = express.Router();

const {createTraning,  getAllTraining, updateTraning , deleteTraining} = require('../controllers/trainingController');

router.post('/', createTraning);
router.get('/', getAllTraining);
router.put('/:id', updateTraning);
router.delete('/:id', deleteTraining);

module.exports = router;