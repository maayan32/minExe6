const express = require('express')
const app = express()
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}))

app.post('/login', function(req,res){
var user = req.body.username;
var password = req.body.password;
if((user == 'guest') && (password == 'pass')){
    res.end('welcome!')
}
else{
    res.end('incorrect username and/or password')
}

})
app.listen(8080)