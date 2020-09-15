const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Vendedor = mongoose.model('Vendedor');
const Cliente  = mongoose.model('Cliente');

async function create(req, res) {
    const { name, email, password, phone, cpf, address } = req.body;
    const vendedor = await Vendedor.create({ name, email, password, phone, cpf, address });

    return res.json({ vendedor });
}

async function login(req, res) {

    const { email, password } = req.body;

    const user = await Vendedor.findOne({ email });

    if(!user || user.active) return res.json({ err: "Err! User Not active" });
    if(user.password !== password) return res.json({ err: "Err! User Not active" });

    const { _id } = user;

    const token = jwt.sign({ _id }, 'JWT_SECRET!');

    return res.json({ token, user });

}


async function listCliente( req, res ) {

    const { _id } = req.userId;

    const clientes = await Cliente.find({ vendedor: _id }).populate('vendedor');

    return res.status(200).json({ clientes });

}


async function getAllVendedores( req, res ) {

    const vendedores = await Vendedor.find({});

    return res.status(200).json({ vendedores });

}


async function deleteVendedor( req, res ) {

    const { _id } = req.params;

    await Vendedor.findOneAndDelete({ _id });

    return res.status(200).send();
    
}

module.exports = { create, login, listCliente, getAllVendedores, deleteVendedor };
