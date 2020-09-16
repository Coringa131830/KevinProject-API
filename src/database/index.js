const mongoose = require('mongoose');

mongoose.connect('geonosis.mongodb.umbler.com:46189', {
    user: 'mkdist33',
    pass: 'kevin123432',
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;
