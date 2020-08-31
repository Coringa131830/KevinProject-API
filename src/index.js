const { json } = require('express');
const app = require('express')();
const cors = require('cors');

app.use(json());
app.use(cors());

require('./database');

require('./models/cliente');
require('./models/orcamento');
require('./models/vendedor');

app.use(require('./routes'));

app.listen(process.env.PORT || 3001);
