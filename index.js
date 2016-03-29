var express = require('express'),
    app = express();
    
app.use('/assets',  express.static('/home/auth/auth/assets'));
app.use('/login', express.static('/home/auth/auth/serve/login.html'));
app.use('/register', express.static('/home/auth/auth/serve/register.html'));

app.listen(5000);
console.log('Listening on port 5000');