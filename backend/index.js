const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;

// category data
const categories = require('./data/categories.json');

// news data 
const categoryNews = require('./data/news.json');

// using cors 
app.use(cors())

// check is server running 
app.get('/', (req, res) => {
    res.send('Server is live')
})


// send Category data 
app.get('/categories', (req, res) => {
    res.send(categories)
})

// category news 
app.get('/news/:newsId', (req, res) => {

    const id = req.params.newsId;

    const singleNews = categoryNews.find(news => news._id === id)
    res.send(singleNews)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(categoryNews)
    } else {
        const selectedNews = categoryNews.filter(news => news.category_id === id);
        res.send(selectedNews);
    }
})

// check port 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})