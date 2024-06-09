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

app.post('/api/nuevousuario', (req,res)=>{
    let cuerpoRequest = req.body;
    
    let nombre = cuerpoRequest.nombre;
    let apellido = cuerpoRequest.apellido;
    let telefono = cuerpoRequest.telefono;

    let respuesta = "El nombre es:" + nombre + "El apellido es: "+ apellido + "y el telefono es:" + telefono;

    res.send(respuesta);

});

app.post('/api/nuevasuma', (req,res)=>{
    let bodyRequest = req.body;
    
    let numero1 = bodyRequest.numero1;
    let numero2 = bodyRequest.numero2;

    let suma = (numero1) + (numero2);

    let resultado ="La suma es: " + suma;

    res.send(resultado);

});

app.put('/api/actualizarusuario/',(req,res)=>{
    let cuerpoRequest =  req.body
    res.send ("Usuario actualizado");

});

app.delete('api/eliminarusuario/',(req,res)=>{
    let cuerpoRequest = req.body
    res.send("Usuario eliminado")
});

//////////////////////////////////////////////////////////////////
//CRUD (CRATE, READ,UPDATE,DELETE)

let items =[];
let id = 1;

app.get('/api/traeritems',(req,res)=>{
    res.json(items);
});

app.post('/appi/agregaritems',(req,res)=>{
    let cuerpoRequest = req.body
    const newitem={
        id:id++,
        descripcion:cuerpoRequest.descripcion,
        precio:cuerpoRequest.precio
    }
     items.push(newitem);
     res.json(newitem);
   
})

app.put('/api/actualizaritem/:idenvio',(req,res)=>{
    let id =req.params.id;
    let cuerpoRequest = req.body;
    let item= items.find((item)=>item.id==idenvio);
    if (item){
        item.descripcion = cuerpoRequest.descripcion
        item.precio =cuerpoRequest.precio;
        res.json(item);
    }else{
        res.status(404).send ('Item no encontrado');
    }
})

app.delete('/api/eliminaritem/:idenvio', (req,res)=>{
    let idenvio = req.params.idenvio;
    items = items.filter((item)=>item.id != idenvio);
    res.json({mensaje: 'item eliminado'});
});

app.listen(puerto,()=>{
    console.log('servidor escuchando en el puerto' + puerto);

});
