var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080


app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('signup');
})

app.listen(PORT, function() {
 console.log(`Listening on ${ PORT }`)
})
