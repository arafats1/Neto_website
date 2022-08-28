const express = require('express');
const path = require('path');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about-us', (req, res) => {
    res.render('page-about');
})

app.get('/more-about-us', (req, res) => {
    res.render('page-about-detail');
})

app.get('/about-team', (req, res) => {
    res.render('page-about-team');
})

app.get('/careers', (req, res) => {
    res.render('page-about-careers');
})

app.get('/services', (req, res) => {
    res.render('page-services');
})

app.get('/services-details', (req, res) => {
    res.render('page-services-detail');
})

app.get('/projects', (req, res) => {
    res.render('page-projects');
})

app.get('/project-details', (req, res) => {
    res.render('page-project-detail');
})

app.get('/clients', (req, res) => {
    res.render('page-testimonial');
})

app.get('/blog', (req, res) => {
    res.render('page-blog');
})

app.get('/blog-1', (req, res) => {
    res.render('page-blog-single');
})

app.get('/contact', (req, res) => {
    res.render('page-contact-2');
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
} );