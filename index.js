const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');
const getFunc = require('./exportsFunctions');
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

const mysqlConnection = mysql.createConnection({
  host: 'mysql-stevegel.alwaysdata.net',
  user: 'stevegel',
  password: 'Pa%%w0rd419990',
  database: 'stevegel_students',
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log('DB Connect');
  } else {
    console.log(`DB not Connect ${err}`);
  }
});

// Serve React Build Files
app.use(express.static(path.join(__dirname, "build"))); 

// Catch-All Route for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => console.log('Express server is running at port no: 3000!'));

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
