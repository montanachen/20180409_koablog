var koa = require('koa');
var views = require('co-views');
var app = Koa();
var render = views('d:/montana/node_modules')
app.use(function * (){
    this.bady = yield render ('home',{message:'Koa is gread'})
    

app.listen(3000);

