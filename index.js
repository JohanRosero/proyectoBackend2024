const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');

let app = express();

//middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
//Cargamos el modulo de direccionamiento de rutas
//app.use('/api/agente', require('./routes/agente.route.js'));
//app.use('/api/sector', require('./routes/sector.route'));
//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});
