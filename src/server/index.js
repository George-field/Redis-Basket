import Express from 'express';
import handleRender from './handleRender';
import { products } from './data/products'
// this is a very simple express app designed only for the purpose of this repo
const app = Express();
const port = 3000;
const uuidv1 = require('uuid/v1');
const cookie = require('cookie')


const bodyParser = require('body-parser')


app.use((req, res, next) => {
  const cookies = cookie.parse(req.headers.cookie)
  console.log(cookies)
  if(!cookies.sessionId){
    res.setHeader('Set-Cookie', cookie.serialize('sessionId', uuidv1(), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7
    }))
  }
  next()
})
app.use(bodyParser.json())
 
app.use(bodyParser.urlencoded({ extended: true }))
 

 



 


require('./api/routes/main')(app)

app.get('/v1.0/products', (req, res) => {
  res.json({products: products}).status(200)
})

// server static content
app.use('/dist', Express.static('dist'));

// register route handler
app.use(handleRender);

// listen out for incoming requests
app.listen(port, () => {
  console.log('app now listening on port', port);
});
