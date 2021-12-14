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

//todo 조회
app.get('/', function(req, res) {  
    connection.query('SELECT * from TODO_LIST', (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

//todo 등록
app.get('/add', function(req, res) {    
    var sql = 'INSERT INTO TODO_LIST (name,done) VALUES (?,?)'
    var param = [req.query.name, 'N'];
    connection.query(sql, param, (error, rows) => {
        if (error) throw error;
        res.send(rows);
      });
  });

//express 웹서버 리스닝
app.listen(3000, () => console.log(`Listening on port 3000`));