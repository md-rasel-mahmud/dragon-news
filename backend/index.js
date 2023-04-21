const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;


const categories = require('../public/data/categories.json')

app.use(cors())

app.get('/', (req, res) =>{
    res.send('Server is live')
})

app.get('/categories', (req, res) =>{
    res.send(categories)
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})