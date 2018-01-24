const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bootcampday4");

const Schema = mongoose.Schema;

const productdetailSchema = new Schema({
    nama : String,
    kategori : String,
    harga : Number,
    warna : String,
    ukuran : String,
    gambar : String
});

const Product = mongoose.model("product", productdetailSchema);

module.exports = Product;