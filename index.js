var express = require('express'),
    app = express();
    
app.use('/assets',  express.static('./assets'));
app.use('/login', express.static('./serve/login.html'));
app.use('/register', express.static('./serve/register.html'));

app.listen(8081);
console.log('Listening on port 8081');