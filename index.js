const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');
const getFunc = require('./exportsFunctions');

app.use(cors());
app.use(express.json());

const mysqlConnection = mysql.createConnection({
  host: 'sql103.infinityfree.com',
  user: 'if0_38220865',
  password: 'Pa44w0rd491990',
  database: 'if0_38220865_students',
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log('DB Connect');
  } else {
    console.log(`DB not Connect ${err}`);
  }
});

app.listen(3306, () => console.log('Express server is running at port no: 3000!'));

getFunc.getData(app, mysqlConnection);
getFunc.searchStudent(app, mysqlConnection);
getFunc.updateGrades(app, mysqlConnection);
getFunc.deleteData(app, mysqlConnection);
getFunc.loginStudents(app, mysqlConnection);
getFunc.loginAdmin(app, mysqlConnection);
getFunc.loginAuthentication(app, mysqlConnection);
getFunc.removeAuthentication(app, mysqlConnection);
getFunc.studentsDataByAuthentication(app, mysqlConnection);
getFunc.createNewStudent(app, mysqlConnection);
getFunc.updateFavorites(app, mysqlConnection);
