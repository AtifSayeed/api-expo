const express = require('express')
const mongoose = require('mongoose')
const data = require('./models/user.model')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})


app.get('/datas', async(req, res) => {
    try {
        const datas = await data.find({});
        res.status(200).json(datas);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.post('/datas', async(req, res) => {
    try {
        const datas = await data.create(req.body)
        res.status(200).json(datas);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// delete a product

app.delete('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://mdatifsayeed:fsa%4012345@cluster0.5mwqfpc.mongodb.net/')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3001, ()=> {
        console.log(`Node API app is running on port 3001`)
    });
}).catch((error) => {
    console.log(error)
})