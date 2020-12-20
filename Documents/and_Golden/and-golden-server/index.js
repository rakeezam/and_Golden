// Set up Express. Library for easily creating a server application
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import {} from 'dotenv/config.js';
import path from 'path';

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URL;
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })  // connect to database with username and password encoded in url.
    .then(() => app.listen({port}, () => console.log('Server running on port 5000')))
    .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);

//bodyparse to send out requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use(express.static('images'));
app.use('/images', express.static('images'));

// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// })



const ProductSchema = new mongoose.Schema({ //things i can parse into Schema
    name: String,
    descripton: String,
    price: Number,
    stock: Number,
    quantity:Number
});
const Product = mongoose.model('Product', ProductSchema);

app.get('/', (request, response) => {
    Product.find()
        .then((products) => {
            response.send(products);
        })
        .catch((err) => {
            response.status(500).send("Unable to retrieve products");
        });
});

app.get('/:productId', (request, response) => {
    Product.findById(request.params.productId)
        .then((product) => {
            response.send(product);
        })
        .catch((err) => {
            response.status(500).send("Unable to find product");
        });
});

app.get('/stock/:productId', (request, response) => {
    console.log(request.params);
    Product.findById(request.params.productId)
        .then((product) => {
            response.send({stock : product.stock});
        })
        .catch((err) => {
            response.status(500).send("Unable to find product");
        });
});

app.post('/buy', (request, response) => {
    request.body.forEach(product => {
        Product.findOneAndUpdate (
            { _id: product._id },
            {
                $inc:
                    { stock: -product.quantity }
            })
            .then((product) => {
                response.send({stock : product.stock});
            })
            .catch((err) => {
                response.status(500).send("Something went wrong please retry or contact support");
            });
    });
});

// console.log("Listening on localhost:5000");
// app.listen(5000);

// module.exports= ProductSchema; //export so can be used later

export default ProductSchema;