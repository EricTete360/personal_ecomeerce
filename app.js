const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 8787;
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');

// Routes
const authOp = require("./routes/userRoute");
const categoryOp = require("./routes/categoryRoute");
const productOp = require("./routes/productRoute");
const cartOp = require("./routes/cartRoute");
const orderOp = require("./routes/orderRoute");


const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(cors());

// Routes Configuration
app.use('/api-auth',authOp);
app.use('/api-category',categoryOp);
app.use('/api-product',productOp);
app.use('/api-cart',cartOp);
app.use('/api-order',orderOp);

// Connection for the database
mongoose.Promise = global.Promise; 
mongoose.connect(dbConfig.url,{
   useNewUrlParser:true 
}).then(()=>{
    console.log("Successfully Connected To The Database")
}).catch(err=>{
    console.log('Could Not Connect to the Database',err)
    process.exit();
});

// PORT configuration
app.listen(port,()=>{
    console.log(`Listening to ${port}`);
});
