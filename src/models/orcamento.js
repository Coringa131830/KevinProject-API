const mongoose = require("mongoose");

const OrcamentoSchema = new mongoose.Schema({
	cliente: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "Cliente",
	},
	vendedor: {
		type: mongoose.Types.ObjectId,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	itens: {
		type: [String],
	},
	valor: {
		type: Number,
	},
	approved: {
		type: Boolean,
		default: false,
	},
});

mongoose.model("Orcamento", OrcamentoSchema);
