const router = require('express').Router();

const auth = require('../middleware/auth');

const ClienteController = require('../controllers/ClienteController');

router.post('/create', auth, ClienteController.create);
router.get('/pending', ClienteController.clientePendente);
router.post('/pending/:_id', ClienteController.activateCustomer);

module.exports = router;
