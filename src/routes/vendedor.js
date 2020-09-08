const router = require('express').Router();

const VendedorController = require('../controllers/VendedorController');

router.post('/create', VendedorController.create);
router.post('/login', VendedorController.login);
router.get('/clientes', VendedorController.listCliente);

module.exports = router;
