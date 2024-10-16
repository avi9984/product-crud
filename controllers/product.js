const Product = require('../models/product');


const addProduct = async (req, res) => {
    try {
        const { name, description, price, image } = req.body;
        if (!(name && description && price && image)) {
            return res.status(400).json({ status: false, message: "All fields are required" })
        }
        const obj = {
            name,
            description,
            price,
            image
        }
        await Product.create(obj)
        return res.status(201).json({ status: true, message: "Product added successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, message: "Internal Server Error" })
    }
}


const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        if (!products) {
            return res.status(404).json({ status: false, message: "Not have any product" })
        }
        return res.status(200).json({ status: true, message: "Get all product", data: products })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, message: "Internal Server Error" })
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById({ _id: id });
        if (!product) {
            return res.status(404).json({ status: false, message: "Product not found" })
        }
        return res.status(200).json({ status: true, message: "Get product by id", data: product })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, message: "Internal Server Error" })
    }
}

const updageProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, description, price, image } = req.body;
        const product = await Product.findById({ _id: id });
        if (!product) {
            return res.status(404).json({ status: false, message: "Product not found" })
        }
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.image = image || product.image;
        await product.save();
        return res.status(200).json({ status: true, message: "Product updated successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, message: "Internal Server Error" })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete({ _id: id });
        if (!product) {
            return res.status(404).json({ status: false, message: "Product not found or already deleted" })
        }
        return res.status(200).json({ status: true, message: "Product deleted successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, message: "Internal Server Error" })
    }
}
module.exports = { addProduct, getAllProduct, getProductById, updageProduct, deleteProduct }