const router = require('express').Router();

const ProdutosController = require('../controllers/ProdutosController');

router.get('/all', ProdutosController.listAll);
router.get('/search', ProdutosController.search);

module.exports = router;
