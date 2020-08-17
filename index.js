const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080

app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');


app.get('/', (request, response) => {
    
    const { quantity, type, page } = request.query;
    response.render('index', { quantity, type, page });

})


app.listen(process.env.PORT || 8080);