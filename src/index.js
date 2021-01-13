const express = require('express');
const app = express();
// creando un middleware
const morgan = require('morgan');

// settings
app.set('port',process.env.PORT || 3000);

// middlewares
//app.use(morgan('combined'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); /* para recibir datos del formulario */
app.use(express.json()); 

// routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.use('/api/users',require('./routes/users'));


// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
