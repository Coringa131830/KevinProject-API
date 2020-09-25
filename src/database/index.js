const mongoose = require('mongoose');

mongoose.connect('mongodb://geonosis.mongodb.umbler.com:37768', {
    user: 'admdb',
    pass: 'admin1234321',
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;
