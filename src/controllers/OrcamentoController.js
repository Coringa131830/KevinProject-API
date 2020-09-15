const mongoose = require("mongoose");

const Cliente = mongoose.model("Cliente");
const Vendedor = mongoose.model("Vendedor");
const Orcamento = mongoose.model("Orcamento");

async function create(req, res) {
	const { userId, body } = req;
	const { itens, cliente, valor } = body;

	const _cliente = await Cliente.findOne({ cpf: cliente });
	if (!_cliente.active) return res.json({ err: "This customer isn't active" });

	const orcamento = await Orcamento.create({ cliente: _cliente, vendedor: userId, itens: itens, valor });

	return res.json({ orcamento });
}

async function showPending(req, res) {

	const { userId } = req;

	const user = await Vendedor.findOne({ _id: userId });

	if(user.isAdmin) {

		const orcamentos = await Orcamento.find({ approved: false }).populate("cliente");
		return res.json({ orcamentos });

	}

	const orcamentos = await Orcamento.find({ approved: false, vendedor: userId }).populate("cliente");
	return res.json({ orcamentos });


}

async function showApproved(req, res) {

	const { userId } = req;

	const user = await Vendedor.findOne({ _id: userId });

	if(user.isAdmin) {

		const orcamentos = await Orcamento.find({ approved: true }).populate("cliente");
		return res.json({ orcamentos });

	}

	const orcamentos = await Orcamento.find({ approved: true, vendedor: userId }).populate("cliente");
	return res.json({ orcamentos });
}

async function approve(req, res) {

	const { _id } = req.params;

	const _orcamento = await Orcamento.findById({ _id });

	if (!_orcamento) return res.json({ err: "Orcamento not found!" });

	const nOrcamento = await Orcamento.findOneAndUpdate({ _id }, { approved: true });

	return res.json(nOrcamento);
}

async function orcamentoDetails(req, res) {
	const { _id } = req.params;

	const _orcamento = await Orcamento.findById({ _id });

	if (!_orcamento) return res.json({ err: "Orcamento not found!" });

	const { name, email, phone, cpf, address, active } = await Cliente.findOne({ _id: _orcamento.cliente });
	const vendedor = await Vendedor.findOne({ _id: _orcamento.vendedor });

	return res.json({ _orcamento, cliente: { name, email, phone, cpf, address }, vendedor });
}

async function remove(req, res) {
	const { _id } = req.params;

	const _orcamento = await Orcamento.findById({ _id });

	if (!_orcamento) return res.json({ err: "Orcamento not found!" });

	try {
		await Orcamento.findOneAndDelete({ _id });
	} catch (e) {
		if (e) throw e.message;
		return res.status(500).json({ err: e.message });
	}

	return res.json({});
}

async function showByVendedor( req, res ) {
	const { _id } = req.params;
	const orcamentos = await Orcamento.find({ vendedor: _id });

	return res.json({ orcamentos }).status(200);

}


async function faturarPedido( req, res ) {

}


async function getFaturados ( req, res ) {

	const pedidos = await Orcamento.find({ faturado: true });

	return res.json({ pedidos }).status(200);
	

}

module.exports = { create, 
	showPending, 
	approve, 
	showApproved, 
	orcamentoDetails, 
	remove, 
	showByVendedor,
	getFaturados,
};
