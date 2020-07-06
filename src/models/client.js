const mongoose = require('mongoose');

const table1 = new mongoose.Schema({ // define
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    company:{
        type: String,
        required: true,
        trim: true
    },
    title:{
        type: String,
        required: true,
        trim: true
    },
    ContactAgreement:{
        type: Boolean,
        required: true
    },
    results:[]
},{
    timestamps: true
});

const clients = mongoose.model('Clients', table1); // create

module.exports = clients;