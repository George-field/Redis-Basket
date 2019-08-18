//
const redis = require('redis')
const client = redis.createClient({
    port: 15327,
    host: 'redis-15327.c2.eu-west-1-3.ec2.cloud.redislabs.com'
})

client.auth('86UBWRQ1Pn617DNhcN7MHViVtvoTJsiC', (err, reply) => {
    if(!err){
        console.log(reply)
    }
})

const addToCart = (sessionId, item) => {
    return new Promise((resolve, reject) => {
        getCart(sessionId).then(cart => {
            console.log(cart)
            if(cart === null){
                const newCart = [item]
                client.set(sessionId, JSON.stringify(newCart), (err, stored) => {
                    if(stored){
                        getCart(sessionId).then(cart => { resolve({stored: true, value: stored, updatedCart: JSON.parse(cart)})})
                    }
                })
            }else{
                const parsedCart = JSON.parse(cart)
                parsedCart.push(item)
                client.set(sessionId, JSON.stringify(parsedCart), (err, stored) => {
                    if(stored){
                        getCart(sessionId).then(cart => { resolve({stored: true, value: stored, updatedCart: JSON.parse(cart)})})
                    }
                })
            }
        })
    })
}

const removeFromCart = (sessionId, id) => {
    return new  Promise((resolve, reject) => {
        getCart(sessionId).then(cart => {
            const parsedCart = JSON.parse(cart)
            const newCart = parsedCart.filter(item => {
                if(item.id != id){
                    return item
                }
            })
            client.set(sessionId, JSON.stringify(newCart), (err, stored)  => {
                if(stored){
                    getCart(sessionId).then(cart => { resolve({stored: true, value: stored, updatedCart: JSON.parse(cart)})})
                }
            })
        })
    })
}


const getCart = (sessionId) => {
    return new Promise((resolve, reject) => {
        client.get(sessionId, (err, cart) => {
            if(!err){
                resolve(cart)
            }
        })
    })
}

module.exports = { getCart, removeFromCart, addToCart }