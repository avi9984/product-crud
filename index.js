const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const productRoutes = require('./routers/product');

app.use(express.json());


mongoose.connect(process.env.MONGO_URL).then(() => console.log("MongoDB  is connected")).catch((err) => console.log(err))


app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`server is listing on port http://localhost:${PORT}`);
})