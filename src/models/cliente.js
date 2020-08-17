const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
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
    active: {
        type: Boolean,
        default: false,
    }

});

mongoose.model('Cliente', ClienteSchema);
