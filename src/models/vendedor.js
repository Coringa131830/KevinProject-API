const mongoose = require('mongoose');

const VendedorSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
    },

});

mongoose.model('Vendedor', VendedorSchema);
