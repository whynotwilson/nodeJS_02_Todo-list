var express = require('express');
var app = express();

app.get('/', function(req, res){   //第一個參數的/，因為這裡是根目錄，所以左斜線就好了
    console.dir(req.query);
    res.send('home page: ' + req.query.find);
});

app.listen(5000);
console.log('Node Server is running on port 5000......');

/*
    nodemon 不是內部或外部命令解決方法
    Windows下NodeJS安裝與npm環境變量配置
    http://www.voidcn.com/article/p-bmgwbblz-bot.html
    https://www.jianshu.com/p/2d9fa3659645
*/

/*3.路由

//路由可以是一個正規表達式
//路由上:表示是變動的，不固定的
app.get('/profile/:id/user/:name', function(req, res) {
    console.dir(req.params);
    res.send("You requested to see a profile with the name of " + req.params.name);
});

app.get('/ab?cd', function(req, res) {
    res.send('/ab?cd');
})
*/


/*
//4.查詢字符串 req.query 可顯示?後的的值
//  app.get('/', function(req, res){   
    console.dir(req.query);
    res.send('home page: ');
});
//  http://localhost:5000/?a=b
//  終端會顯示 { a: 'b' }
*/

/*5.POST 請求和 Postman 工具

var express = require('express');
var bodyParser = require('body-parser')

var app = express();
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(req, res) {
    console.dir(req.query);
    res.send("home page: " + req.query.find);
});

app.post('/', urlencodedParser, function(req, res) {
    console.dir(req.body);
    res.send(req.body.name);
});

app.post('/upload', jsonParser, function(req, res) {
    console.dir(req.body);
    res.send(req.body.name);
});

app.get('/profile/:id/user/:name', function(req, res) {
    console.dir(req.params);
    res.send("You requested to see a profile with the name of " + req.params.name);
});

app.get('/ab?cd', function(req, res) {
    res.send('/ab?cd');
})

app.listen(3000);
console.log('listening to port 3000');


*/
