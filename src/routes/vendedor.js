const router = require('express').Router();

const auth = require('../middleware/auth');

const VendedorController = require('../controllers/VendedorController');

router.post('/create', VendedorController.create);
router.post('/login', VendedorController.login);
router.get('/clientes', auth, VendedorController.listCliente);
router.get('/', VendedorController.getAllVendedores);
router.delete('/:_id', VendedorController.deleteVendedor);

module.exports = router;
