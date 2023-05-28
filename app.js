//Imports Resource
const express = require("express");
const router = express.Router();
const app = express();

//Config EJS
app.set('view engine', 'ejs');

//Config archive statics
app.use(express.static('public'));

//Config routes
app.get('/', (req, res) => {
    res.render("index")
});


//Config server
app.listen(3000, ()=> {console.log("Rodando na porta 3000")})