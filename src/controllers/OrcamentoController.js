const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente');
const Vendedor = mongoose.model('Vendedor');
const Orcamento = mongoose.model('Orcamento');

async function create(req, res) {

    const { userId, body } = req;
    const { itens, cliente } = body;

    const _cliente = await Cliente.findOne({ cpf: cliente });
    if (_cliente.ative) return res.json({ err: "This customer isn't active" });

    const itensListParsed = itens.split(";");

    const orcamento = await Orcamento.create({ cliente: _cliente, vendedor: userId, itens: itensListParsed });

    return res.json({ orcamento });
    
}


async function showPending(req,res) {

    const orcamentos = await Orcamento.find({ approved: false });

    return res.json({ orcamentos });

}

async function showApproved(req,res) {

    const orcamentos = await Orcamento.find({ approved: true });

    return res.json({ orcamentos });

}

async function approve(req, res) {

    const { _id } = req.params;

    const _orcamento = await Orcamento.findById({ _id });

    if(!_orcamento) return res.json({ err: "Orcamento not found!" });

    const nOrcamento = await Orcamento.findOneAndUpdate({ _id }, {approved: true});

    return res.json(nOrcamento);

}


async function orcamentoDetails(req, res) {
    
    const { _id } = req.params;

    const _orcamento = await Orcamento.findById({ _id });

    if(!_orcamento) return res.json({ err: "Orcamento not found!" });

    const { name, email, phone, cpf, address, active } = await Cliente.findOne({ _id: _orcamento.cliente });
    const vendedor = await Vendedor.findOne({ _id: _orcamento.vendedor });

    return res.json({  _orcamento, 
        cliente: { name, email, phone, cpf, address }, 
        vendedor 
    });

}   


module.exports = { create, showPending, approve, showApproved, orcamentoDetails };
