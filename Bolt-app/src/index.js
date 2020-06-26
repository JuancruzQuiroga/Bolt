const express = require('express');
//const session = require('express-session');
const dataBase = require('./database');
//const methodOverride = require('method-override');
//inicializaciones
const app = express();

//settings
app.set('port', process.env.PORT || 8080);

//middlewares

//global variables

//routes

app.use('/api/users', require('./routes/users'))
app.use('/api/baterias',require('./routes/cargadores'))
app.use('/api/random', require('./routes/random'))
module.exports = app;
//archivos estaticos

//prender el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});