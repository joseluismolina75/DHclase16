const express = require('express');
//console.log(express); para ver todas los métodos que implementa el paquete express
const app = express();

//console.log(app)

app.listen(3000, () => console.log('Esto fue exitoso'));


app.get('/', function(req, res){
    res.send('Bienvenidos al sitio');
});

app.get('/contacto', function(req, res){
    res.send('Dejanos tu contacto');
});

app.get('/un-array', function(req, res){
    res.send([1,2,3,4]);
});

app.get('/un-objeto', function(req, res){
    res.send({name: "Dario"});
});