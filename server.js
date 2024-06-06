//Inicializar mi express body parser y cors
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//configurar express como app
const app = express();
app.use(cors());
app.use(bodyParser.json());

const puerto= 3002;

//crear un endpoint

app.get('/api/hola',(req,res)=>{
    res.send('Hola Mundoooooo');
});

app.get('/api/nombre',(req,res)=>{
    res.send('Gerardo Gomez');
});

app.post('/api/suma/:n1/:n2',(req,res)=>{
    let numero1 = req.params.n1;
    let numero2 = req.params.n2;
    let suma = Number (numero1) + Number (numero2);
    res.send ('La suma con post: ' + suma);
});

app.get('/api/resta/:n1/:n2',(req,res)=>{
    let numero1 = req.params.n1;
    let numero2 = req.params.n2;
    let resta = Number (numero1) - Number (numero2);
    res.send ('La resta es: ' + resta);
});

app.listen(puerto,()=>{
    console.log('servidor escuchando en el puerto' + puerto);

});
