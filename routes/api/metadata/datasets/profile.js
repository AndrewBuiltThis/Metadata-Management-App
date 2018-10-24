var express = require('express');
var router = express.Router();

// GET API Metadata Datasets Page. 
router.get('/', function(req, res) {
// This is the function to actually establish a connection to the database   
	var sql = require('mssql/msnodesqlv8');
	var config = {
		user: req.connection.user,
		driver: 'msnodesqlv8',
		connectionString: `Driver={ODBC Driver 11 for SQL Server};Server={${process.env.DB_SERVER}};Database={${process.env.DB_INSTANCE}};Trusted_Connection={yes}; Integrated Security={SSPI}`,
	};
	
	// This is just a smoke-test to ensure that authentication is working properly
	console.log(req.connection.user)
	
	const pool = new sql.ConnectionPool(config).connect().then(pool => {
			return pool.request()
			.input('user', sql.NVarChar, req.connection.user)
			.execute('master.dbo.GetRecords', '@user')
			}).then(result => {
				let rows = result.recordset;
				//console.log(rows);
				res.send(rows);
			});
  });

module.exports = router;
