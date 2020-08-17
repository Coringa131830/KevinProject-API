const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente');

async function create(req, res) {

    const { name, email, phone, cpf, address } = req.body;
    const cliente = await Cliente.create({ name, email, phone, cpf, address });

    return res.json({ cliente });
    
}
    
async function clientePendente(req, res) {

    const clientes = await Cliente.find({ active: false });

    return res.json({ clientes });

}

async function activateCustomer(req, res) {

    const { _id } = req.params;

    const cliente = Cliente.findById({_id});

    if(!cliente) return res.json({ err: "Customer not found!" });
    if(cliente.active) return res.json({ err: "this Customer wasnt pending" });

    const nCliente = await Cliente.findByIdAndUpdate({ _id }, { active: true });

    return res.json({ nCliente });

}

module.exports = { create, clientePendente, activateCustomer };