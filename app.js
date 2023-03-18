const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// const staticPath = path.join(__dirname, '/home');
// app.use('/', express.static(__dirname));
app.use('/', express.static(path.join(__dirname, '/home')));
app.use('/about', express.static(path.join(__dirname, '/about')));
app.use('/contact', express.static(path.join(__dirname, '/contact')));
app.use('/services', express.static(path.join(__dirname, '/services')));
app.use('/skills', express.static(path.join(__dirname, '/skills')));
app.use('/teams', express.static(path.join(__dirname, '/teams')));
app.use('/nav', express.static(path.join(__dirname, '/navbar')));
// console.log(staticPath)
// console.log(__dirname)



// app.get('/', (req, res) => {
// url = req.url;
// res.send('this is hone page');
// const staticPath = path.join(__dirname, '');
// app.use(express.static(staticPath));
// });

// app.get('/about', (req, res) => {
// res.send('this is about page');
// const staticPath = path.join(__dirname, '');
// app.use(express.static(staticPath));

// });

// app.get('/contact', (req, res) => {
// res.send('this is contact page');
// });

// app.get('/services', (req, res) => {
// res.send('this is services page');
// });






// const server = http.createServer((req, res) => {
// console.log(req.url)
// url = req.url;
// res.statusCode = 200;
// res.setHeader('Content-Type', 'text/html');
// if (url == '/') {
// const staticPath = path.join(__dirname, '');
// app.use(express.static(staticPath));
// res.end(nav + home + footer);
// }
// else if (url == '/about') {
// const staticPath = path.join(__dirname, '');
// app.use(express.static(staticPath));
// res.end(nav + about + footer);
// }
// else if (url == '/services') {
// res.end(nav + services + footer);
// }
// else if (url == '/skills') {
// res.end(nav + skills + footer);
// }
// else if (url == '/teams') {
// res.end(nav + teams + footer);
// }
// else if (url == '/contact') {
// 
// }
// else {
// res.statusCode = 404;
// res.end('<h1>404 not found</h1>');
// }
// });


app.listen(port, () => {
    console.log(`the app is started successfully on port ${port}`);
})



// server.listen(port, hostname, () => {
    // console.log(`Server running at http://${hostname}:${port}/`);
// });










// console.log('jai shree ram')