const { Router } = require('express')
const messageModel = require('../models/message.model')
const productModel = require('../models/product.models')

const router = Router()

router.get('/', async (req, res) => {
    const products = await productModel.find().lean()
    res.render('index', {
        title: "E-commerce 🍃",
        products
    })
})

router.get('/chat', async (req,res)=>{
    const messages = await messageModel.find().lean()
    res.render('chat', {messages})
})



module.exports = router