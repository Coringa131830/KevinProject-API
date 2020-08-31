const { json } = require('express');
const app = require('express')();

app.use(json());

require('./database');

require('./models/cliente');
require('./models/orcamento');
require('./models/vendedor');

app.use(require('./routes'));

app.listen(process.env.PORT || 3001);
