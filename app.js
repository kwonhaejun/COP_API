const express = require('express');
const cors = require('cors');
const mysql = require('mysql')

const app = express();
app.use(cors()); // CORS 미들웨어 추가

const connection = mysql.createConnection({
    host: '54.180.124.191',
    user: 'sonnks',
    password: '@Dkfmtpf08',
    database: 'todo'
  });

connection.connect();
  
connection.query('SELECT * FROM TODO_LIST', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log('result1',results);
});
    
// connection.end();


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
//   res.json(contents);
connection.query('SELECT * from TODO_LIST', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});


app.get('/todo', (req, res) => {
    connection.query('SELECT * from TODO_LIST', (error, rows) => {
      if (error) throw error;
      res.send(rows);
    });
});

//todo 등록
app.get('/add', function(req, res) {
    // url이 http://a.com/topic?id=1&name=siwa 일때
    // contents.push({id:contents.length+1,name:req.query.name,done:false});
    // //res.send(req.query.id+','+req.query.name); // 1,siwa 출력
    // res.json(contents);
    console.log('insert here');
    var sql = 'INSERT INTO TODO_LIST (name,done) VALUES (?,?)'
    var param = [req.query.name, 'N'];
    connection.query(sql, param, (error, rows) => {
        if (error) throw error;
        res.send(rows);
      });
    // INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')
  });

//express 웹서버 리스닝
app.listen(3000, () => console.log(`Listening on port 3000`));