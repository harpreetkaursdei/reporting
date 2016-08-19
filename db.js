/*var mysql      = require('mysql');
connection = mysql.createConnection({
  host     : '52.39.212.226',
  user     : 'alisthubmarket',
  password : 'alisthubmarket@2016',
  database : 'db_AlistMarketing',
  insecureAuth: true
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId)
});*/

var mysql = require('mysql');

module.exports.connection=function (){

var connection = mysql.createConnection({
host : '52.39.212.226',
user : 'alisthubmarket',
password : 'alisthubmarket@2016',
database : 'alisthubmarketing',
port:3306
});
return connection;

}    
