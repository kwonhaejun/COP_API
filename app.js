var express = require('express');

const cors = require('cors');

var app = express();

app.use(cors()); // CORS 미들웨어 추가

//api 서비스를 할 배열
const contents = [
    {
        id:1,
        name:'HTML 공부하기',
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
]

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  //res.send('hello world');
  res.json(contents);
});


//express 웹서버 리스닝
app.listen(3000, () => console.log(`Listening on port 5000`));