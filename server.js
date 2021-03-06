const express = require('express');
const noteApi = require('./routes/noteRoutes');
const indexApi = require('./routes/indexRoutes.js');

const PORT = process.env.PORT || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', noteApi);
app.use('/', indexApi)



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))