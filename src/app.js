import express from 'express'
import morgan from 'morgan'

import alumnoRoutes from './routes/alumno.routes'

const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));

app.get('/', function(req, res, next) {
    res.send('CORRECTO');
});

app.use('/alumno', alumnoRoutes);

export default app;