const express = require('express')
const app = express()
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}))

app.get('/login', function(req,res){
var user = req.query.username;
var password = req.query.password;
if((user == 'guest') && (password == 'pass')){
    res.end('welcome')
}
else{
    res.end('incorrect username and/or password')
}

})
app.listen(8080)