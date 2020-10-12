const router = require('express').Router();

const auth = require('../middleware/auth');

const OrcamentoController = require('../controllers/OrcamentoController');

router.post('/create', auth, OrcamentoController.create);
router.get('/pending', auth, OrcamentoController.showPending);
router.post('/approve/:_id', OrcamentoController.approve);
router.get('/more/:_id', OrcamentoController.orcamentoDetails);
router.get('/approved', auth, OrcamentoController.showApproved);
router.delete('/reprove/:_id', OrcamentoController.remove);
router.get('/cliente/:_id', OrcamentoController.getLastPurchase);
router.get('/vendedor/:_id', OrcamentoController.showByVendedor);
router.get('/faturados', OrcamentoController.getFaturados);
router.put('/faturar/:_id', OrcamentoController.setFaturado);

module.exports = router;
