var express = require('express');

const cors = require('cors');

var app = express();

app.use(cors()); // CORS 미들웨어 추가

//api 서비스를 할 배열
const contents = [
    {
        id:1,
        name:'HTML 공부하기 시러',
        done:true
    },
    {
        id:2,
        name:'JS 공부하기',
        done:true
    },
    {
        id:3,
        name:'CSS 공부하기',
        done:false
    },
    {
        id:4,
        name:'angular 공부하기',
        done:false
    },
]

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  //res.send('hello world');
  res.json(contents);
});

//todo 등록
app.get('/add', function(req, res) {
    // url이 http://a.com/topic?id=1&name=siwa 일때
    contents.push({id:contents.length+1,name:req.query.name,done:false});
    //res.send(req.query.id+','+req.query.name); // 1,siwa 출력
    res.json(contents);
  })

//express 웹서버 리스닝
app.listen(3000, () => console.log(`Listening on port 3000`));