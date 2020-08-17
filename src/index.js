const { json } = require('express');
const app = require('express')();

app.use(json());

require('./database');

require('./models/cliente');
require('./models/orcamento');
require('./models/vendedor');

app.use(require('./routes'));

app.listen(3001);
