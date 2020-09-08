const router = require('express').Router();


router.use('/vendedor', require('./routes/vendedor'));
router.use('/cliente', require('./routes/cliente'));
router.use('/orcamento', require('./routes/orcamento'));

module.exports = router;
