/*
var express = require('express');
var app = express();

app.get('/', function(req, res){   //第一個參數的/，因為這裡是根目錄，所以左斜線就好了
    console.dir(req.query);
    res.send('home page: ' + req.query.find);
});

app.listen(5000);
console.log('Node Server is running on port 5000......');
*/
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
/* //8.使用模板引擎
var express = require('express');
var bodyParser = require('body-parser');//解析 POST GET
var fs = require('fs');
var app = express();

app.set('view engine', 'ejs' );//模板

var multer = require('multer');//上傳檔案用

var createFolder = function(folder){
    try{
        fs.accessSync(folder);//讀取目錄
    }catch (e) {
        fs.mkdirSync(folder)//建立目錄
    }
};

var uploadFolder = './upload'; //設定客戶端上傳目錄

createFolder(uploadFolder);

var storage = multer.diskStorage({
    //設定要上傳的目錄
    destination: function(req, file, cb) {
        cb(null, uploadFolder);
    },
    //上傳檔案的名字
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage});

//create application/json parser
var jsonParser = bodyParser.json();

//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', function(req, res){
    console.dir(req.query);
    res.send('home page: ');
});

app.get('/test/:name', function(req, res){
    console.dir(req.query);
    res.send(req.query.name);
});

app.get('/form/:name', function(req, res){
    var data = {age: 29, job : 'preprogrammer', hobbie : ['eatting', 'sleeping', 'fighting'] };
    res.render('form' , {data : data});
});


app.get('/about', function(req, res) {
    res.render('about');
});

app.post('/', urlencodedParser, function(req, res){
    console.dir(req.body);
    res.send(req.body.name);
});

app.post('/upload', upload.single('logo'), function(req, res) {
    console.dir(req.file);
    res.send({'ret_code' : 0});
});

app.get('/profile/:id/user/:name', function(req,res){
    console.dir(req.params);
    console.dir(req.body);
    console.dir(req.query);
    res.send('You requested to see a profile with the name of ' + req.params.name);
});

app.listen(5000);
console.log('Node.js server is running on port 5000......');
*/

/*//9.中間件


var express = require('express');

var app = express();

app.use('/access', express.static('public'));//可使用靜態檔案，ex: png

app.use(function(req, res, next) {
    console.log('first middleware');
    next();//遇到next 會先跳到下一個中間件，執行完再回來
    console.log('first middleware after');
});

app.use('/home', function(req, res, next) {
    console.log('second middleware');
    res.send('ok');
});

app.listen(5000);
console.log('listening to port 5000');

*/

/*  //10.路由中間件
    //將各路由分開為不同的js文件，使用module.export 導出
    //再從index.js 導入，
    //好處：方便維護，閱讀方便
*/

var express = require('express');

var app = express();

var indexRouter = require('./routers/index');
var usersRouter = require('./routers/users');

app.use('/', indexRouter);
app.use('/', usersRouter);

app.listen(5000);
console.log('listening to port 5000');