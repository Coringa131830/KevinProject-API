const router = require('express').Router();

const ClienteController = require('../controllers/ClienteController');

router.post('/create', ClienteController.create);
router.get('/pending', ClienteController.clientePendente);
router.post('/pending/:_id', ClienteController.activateCustomer);

module.exports = router;
