const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const { application } = require('express');
const api = express();
const porta = 3000;
const router = express.Router();

const loginRouter = require('./router/loginRouter');
const registerRouter = require('./router/registerRouter');

api.use(cors( ));

api.use(bodyparser.urlencoded({extended: true})); 
api.use(bodyparser.json({limit: '20mb', extended: true}));

router.get("/", (req, resp)=> resp.json({
  mensagem: 'API online'
})) 

api.use("/", router);
api.use("/login", loginRouter);
api.use("/register", registerRouter);

api.listen(porta);
console.log("Run API express")