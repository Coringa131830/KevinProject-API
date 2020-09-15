const router = require('express').Router();

const auth = require('../middleware/auth');

const OrcamentoController = require('../controllers/OrcamentoController');

router.post('/create', auth, OrcamentoController.create);
router.get('/pending', auth, OrcamentoController.showPending);
router.post('/:_id', OrcamentoController.approve);
router.get('/more/:_id', OrcamentoController.orcamentoDetails);
router.get('/approved', auth, OrcamentoController.showApproved);
router.delete('/reprove/:_id', OrcamentoController.remove);
router.get('/:_id', OrcamentoController.showByVendedor);
router.get('/faturado', OrcamentoController.getFaturados);
router.put('/faturar/:_id', OrcamentoController.faturarPedido);

module.exports = router;

