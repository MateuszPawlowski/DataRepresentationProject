// constants
const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const mongodDB = 'mongodb+srv://Admin:Admin@cluster0-vmkhm.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongodDB, { useNewUrlParser: true });

// use cors
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongoose schema for the price product and image
const Schema = mongoose.Schema;
const productSchemaa = new Schema({
    price: String,
    product: String,
    image: String
});

// create a schema in mongoose
const ProductModel = mongoose.model('products', productSchemaa)

// in order to create a product
app.post('/api/products', (req, res) => {
    console.log(req.body);
    ProductModel.create({
        price: req.body.price,
        product: req.body.product,
        image: req.body.image
    });
    res.json('Data Uploaded');
})

// in order to find the id of a product
app.get('/api/products/:id', (req, res) => {
    console.log(req.params.id);
    ProductModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

// in order to delete a product using its id
app.delete('/api/products/:id', (req, res) => {
    console.log(req.params.id);
    ProductModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            res.json(data);
        });
})

// in order to edit a product using its id
app.put('/api/products/:id', (req, res) => {
    console.log("Edit: " + req.params.id);
    ProductModel.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (error, data) => {
            res.json(data);
        })
})

// finds a product
app.get('/api/products', (req, res) => {
    ProductModel.find((error, data) => {
        res.json({ products: data });
    })
})

// shows in the terminal that the app is running
app.listen(port, () => console.log(`App listening on port ${port}`))