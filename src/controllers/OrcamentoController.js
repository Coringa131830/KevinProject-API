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

		const orcamentos = await Orcamento.find({ approved: false }).populate("cliente").populate("vendedor");
		return res.json({ orcamentos });

	}

	const orcamentos = await Orcamento.find({ approved: false, vendedor: userId }).populate("cliente").populate("vendedor");
	return res.json({ orcamentos });


}

async function showApproved(req, res) {

	const { userId } = req;

	const user = await Vendedor.findOne({ _id: userId });

	if(user.isAdmin) {

		const orcamentos = await Orcamento.find({ approved: true }).populate("cliente").populate("vendedor");
		return res.json({ orcamentos });

	}

	const orcamentos = await Orcamento.find({ approved: true, vendedor: userId }).populate("vliente").populate("vendedor");
	return res.json({ orcamentos });
}

async function approve(req, res) {

	const { _id } = req.params;

	const _orcamento = await Orcamento.findById({ _id });

	if (!_orcamento) return res.json({ err: "Orcamento not found!" });

	const nOrcamento = await Orcamento.findOne({ _id });
	nOrcamento.approved = true;
	nOrcamento.save()

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
	const orcamentos = await Orcamento.find({ vendedor: _id }).populate('Vendedor');

	return res.json({ orcamentos }).status(200);

}


async function getFaturados( req, res ) {
	
	const { userId } = req;

	const user = await Vendedor.findOne({ userId }); 
	
	if(user.isAdmin) {
	
		const faturados = await Orcamento.find({ faturado: true }).populate("cliente").populate("vendedor");
		return res.json({faturados}).status(200);

	}

	const faturados = await Orcamento.find({ faturado: true, vendedor: user.id }).populate("cliente").populate("vendedor");
	return res.json({faturados}).status(200);

}

async function setFaturado( req, res ) {
	const { _id } = req.params;
	await Orcamento.findByIdAndUpdate({ _id }, { faturado: true });
	return res.status(200).send();
}
 

module.exports = { create, 
	showPending, 
	approve, 
	showApproved, 
	orcamentoDetails, 
	remove, 
	showByVendedor,
	getFaturados,
	setFaturado,
};
