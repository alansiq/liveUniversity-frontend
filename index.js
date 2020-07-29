const express = require('express');
const path = require('path');
const app = express();


app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');


app.get('/', (request, response) => {

    const { quantity, type, page } = request.query;
    response.render('index', { quantity, type, page });

})


app.listen(3333, () => console.log('Listening on localhost:3333 - I hope you enjoy my application'));