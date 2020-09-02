const router = require('express').Router();

const auth = require('../middleware/auth');

const OrcamentoController = require('../controllers/OrcamentoController');

router.post('/create', auth, OrcamentoController.create);
router.get('/pending', OrcamentoController.showPending);
router.post('/:_id', OrcamentoController.approve);
router.get('/more/:_id', OrcamentoController.orcamentoDetails);
router.get('/approved', OrcamentoController.showApproved);
router.delete('/reprove/:id', OrcamentoController.remove);

module.exports = router;
