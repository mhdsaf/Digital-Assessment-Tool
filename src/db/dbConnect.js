const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Digital-Assessment-Tool',{ // connection to database
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
