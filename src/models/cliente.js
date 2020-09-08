const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	vendedor: {
		type: mongoose.Types.ObjectId,
		ref: 'Vendedor',
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
		cep: {
			type: String,
			require: true,
		},
		estado: {
			type: String,
			require: true,
		},
		cidade: {
			type: String,
			require: true,
		},
		endereco: {
			type: String,
			require: true,
		},
	},
	active: {
		type: Boolean,
		default: false,
	},
});

mongoose.model("Cliente", ClienteSchema);
