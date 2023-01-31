const { Router } = require('express');
const productsRoutes = require('./Products/prod.routes');
const cartRoutes = require('./Cart/cart.routes');
const chatRoutes = require('./Chat/chat.routes');

const router = Router()

router.use('/products', productsRoutes)
router.use('/carts', cartRoutes)
router.use('/chat', chatRoutes)

module.exports = router