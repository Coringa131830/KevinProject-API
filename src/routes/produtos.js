const router = require('express').Router();

const ProdutosController = require('../controllers/ProdutosController');

router.get('/all', ProdutosController.listAll);

module.exports = router;
