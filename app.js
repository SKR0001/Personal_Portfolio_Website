const express = require('express');
const path = require('path');
const app = express();
const port = 80;


app.use('/', express.static(path.join(__dirname, '/home')));
app.use('/about', express.static(path.join(__dirname, '/about')));
app.use('/contact', express.static(path.join(__dirname, '/contact')));
app.use('/services', express.static(path.join(__dirname, '/services')));
app.use('/skills', express.static(path.join(__dirname, '/skills')));
app.use('/teams', express.static(path.join(__dirname, '/teams')));
app.use('/nav', express.static(path.join(__dirname, '/navbar')));



app.listen(port, () => {
    console.log(`the app is started successfully on port ${port}`);
})
