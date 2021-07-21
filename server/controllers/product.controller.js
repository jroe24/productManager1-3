const Product = require("../models/product.model");

module.exports.createProduct = (req, res) => {
    console.log(req.body);

    Product.create(req.body)
        .then((newProduct) => {
            res.json(newProduct);
            console.log(newProduct)
        })
        .catch((err) => {
            res.json(err);
            console.log(err)
        })
}

module.exports.getAllProducts = (req, res) => {
    console.log(req.body);

    Product.find({})
        .then((products) => {
            res.json(products);
            console.log(products)
        })
        .catch((err) => {
            res.json(err);
            console.log(err)
        })
}

module.exports.getProduct = (req, res) => {
    console.log(req.body);

    Product.findOne({ _id: req.params.id })
        .then((product) => {
            res.json(product);
            console.log(product)
        })
        .catch((err) => {
            res.json(err);
            console.log(err)
        })
}

module.exports.updateProduct = (req, res) => {
    console.log(req.body);

    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updatedProduct) => res.json(updatedProduct))
        .catch((err) => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    console.log(req.body);

    Product.deleteOne({ _id: req.params.id })
        .then((deletedProduct) => res.json(deletedProduct))
        .catch((err) => res.json(err))
}