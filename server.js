const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db/database')


//import route 

const atencion = require('./routes/atencion');
const operador = require('./routes/operador');
const auth = require('./routes/auth');



// settings

const app = express();
app.use(morgan('dev'));

app.use(cors());
app.set('port', process.env.PORT || 5000);


//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



//Use Routes
app.use('/api/atencion', atencion);
app.use('/api/operador', operador);
app.use('/api/auth', auth);




// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
};


//Conecting DB

db.sequelize.authenticate()
    .then(() => console.log('Database conected...'))
    .catch((err) => console.log('error' + err));


// server listening

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));

});


// manejo de errores http

app.use((err, req, res, next) => {
    res.locals.error = err;
    if (err.status >= 100 && err.status < 600)
        res.status(err.status);
    else {

        res.status(500);
        res.send('error code: 500')
    }
});
