
const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes'); 

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(recipeRoutes);

mongoose.connect('mongodb://localhost:27017/recipeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(err => console.error(err));
