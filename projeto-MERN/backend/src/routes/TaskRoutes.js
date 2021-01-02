const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacAddressValidation = require('../middlewares/MacAddressValidation');

/*********** ROTAS ***********/
router.post('/', TaskValidation, TaskController.create);

router.put('/:id', TaskController.update);
router.get('/:id', TaskController.show);
router.delete('/:id', TaskController.delete);

router.get('/filter/all', MacAddressValidation, TaskController.all);

module.exports = router;