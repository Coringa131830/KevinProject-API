const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.p46k4.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;
