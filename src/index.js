const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

// const indexRoutes = require('./routes/index');
const taskRoutes = require('./routes/task');

// Setting
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
// app.use(indexRoutes);
app.use('/api', taskRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'dist')));

// Start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
