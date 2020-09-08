const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Vendedor = mongoose.model('Vendedor');

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

    const { userId } = req;

    return res.status(200).json({ userId });

}

module.exports = { create, login, listCliente };
