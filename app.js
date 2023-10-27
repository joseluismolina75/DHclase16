let express = require('express');
//console.log(express); para ver todas los métodos que implementa el paquete express
let app = express();

//console.log(app)

app.listen(3000, () => console.log('Esto fue exitoso'));

app.get('/', function(req, res) {
    res.send('Bienvenidos al Sitio');
}
)