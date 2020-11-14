const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('index', { myVar: 'woohoo' })
});

app.get('/about', function(req, res) {
    res.render('about')
});

app.get('/blog/:date', (req, res) => {
    const theDateTheyWant = req.params.date
    
    res.render('blog', { date: theDateTheyWant })
});

app.get('/blog', (req, res) => {
    res.render('blog.ejs', { date: 'a generic date' })
})

app.listen(8000, () => {
    console.log('server started!');
});
