var koa = require('koa');
var bodyParser = require('koa-bodyparser');
var app = new koa();

app.use(bodyParser())
app.use(route.get('/post',function *(){
    console.log()
    console.log(this.request.body);
    this.bady = JSON.stringify (this.request.body);
}));
    

app.listen(3000);

