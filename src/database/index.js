const mongoose = require('mongoose');

mongoose.connect('mongodb://admdb:admin1234321@geonosis.mongodb.umbler.com:37768/mkdist', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;
