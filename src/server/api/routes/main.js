//import all routes into this file
const redis = require('../../redis/index')
const cookie = require('cookie')

module.exports = (app) => {
    app.get('/v1.0/cart/', (req, res) => {
        try{
            const cookies = cookie.parse(req.headers.cookie)
            const sessionId = cookies.sessionId

            redis.getCart(sessionId).then(cart => {
                res.json({cart: JSON.parse(cart)}).status(200)
            })
        }catch(e){
            res.json({err:  error}).status(500)
        }
       
    })

    app.get('/v1.0/cart/remove/:id', (req, res) => {
        try{
            const cookies = cookie.parse(req.headers.cookie)
            const sessionId = cookies.sessionId

            const id = req.params.id
            redis.removeFromCart(sessionId, id).then(response => {
                res.json({response: response}).status(200)
            })
        }catch(e){
            res.json({err:  error}).status(500)
        }
       
    })

    app.post('/v1.0/cart/add/', (req, res) => {
        try{
            const cookies = cookie.parse(req.headers.cookie)
            const sessionId = cookies.sessionId
            
            const item = req.body.item
            console.log(item)
            redis.addToCart(sessionId, item).then(response => {
                res.json({response: response}).status(200)
            })
        }catch(e){
            res.json({err:  e}).status(500)
        }
       
    })
}