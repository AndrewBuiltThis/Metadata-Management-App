var express = require('express');
var router = express.Router();
var sql = require('mssql/msnodesqlv8');

const config = {
	//user: req.connection.user,
	driver: 'msnodesqlv8',
	connectionString: `Driver={ODBC Driver 11 for SQL Server};Server={${process.env.DB_SERVER}};Database={${process.env.DB_INSTANCE}};Trusted_Connection={yes}; Integrated Security={SSPI}`,
};

router.use(function (req,res,next) {
    // This is just a smoke-test to ensure that authentication is working properly
    console.log(req.connection.user)
	next();
});


// GET API Metadata Datasets Page. 
router.get('/', function(req, res) {

    const pool = new sql.ConnectionPool(config).connect().then(pool => {
        return pool.request().query("Select * From masterview")
    }).then(result => {
        let rows = result.recordset;

        res.send(rows);
    });
});


// GET API Metadata result for an individual entry
router.get('/:idMasterRecord', function(req, res) {

    const pool = new sql.ConnectionPool(config).connect().then(pool => {
        var queryString = 'Select * From masterview WHERE idMasterRecord =@idMasterRecord';
        return pool.request()
            .input('idMasterRecord', sql.Int, req.params.idMasterRecord)
            .query(queryString)
    }).then(result => {
        let rows = result.recordset;
        console.log(req.params.idMasterRecord);
        res.send(rows);
    });
});

// POST an update to an existing dataset 
router.post('/update', function(req, res) {

    // This is just a smoke-test to ensure that authentication is working properly
    console.log(req.connection.user)

    const pool = new sql.ConnectionPool(config).connect().then(pool => {
        var queryString = 'UPDATE masterrecord SET summary = @datasetSummary, tags = @datasetTags, datasetSource = @datasetSource, datasetType = @datasetType, dataSteward = @datasetSteward, dataStewardEmail = @datasetStewardEmail, dataOwner = @datasetOwner, dataOwnerEmail = @datasetOwnerEmail, publicAccessLevel = @datasetSharing, description = @datasetDescription, dataStatus = @datasetStatus, topic = @datasetTopic, useConstraints = @datasetUseConstraints, securityConstraints = @datasetUseConstraints, notes = @datasetAdditionalInfo, lineage = @datasetLineage, downloadURL = @datasetOpenDataURL, endpoint = @datasetRESTEndpoint, relatedDocument = @datasetRelatedDocuments,  metadataValidated = @datasetValidated, sharingApproval = @datasetSharingApproval, updatedBy = @updatedBy WHERE idMasterRecord = @idMasterRecord';
        return pool.request()
            .input('idMasterRecord', sql.Int, req.body.datasetID)
            .input('datasetSummary', sql.NVarChar, req.body.datasetSummary)
            .input('datasetTags', sql.NVarChar, req.body.datasetTags)
            .input('datasetSource', sql.NVarChar, req.body.datasetSource)
            .input('datasetType', sql.NVarChar, req.body.datasetTypeForm)
            .input('datasetSteward', sql.NVarChar, req.body.datasetSteward)
            .input('datasetStewardEmail', sql.NVarChar, req.body.datasetStewardEmail)
            .input('datasetOwner', sql.NVarChar, req.body.datasetOwner)
            .input('datasetOwnerEmail', sql.NVarChar, req.body.datasetOwnerEmail)
            .input('datasetSharing', sql.NVarChar, req.body.datasetSharingLevelForm)
            .input('datasetDescription', sql.NVarChar, req.body.datasetDescription)
            .input('datasetStatus', sql.NVarChar, req.body.datasetStatusForm)
            .input('datasetTopic', sql.NVarChar, req.body.datasetTopicForm)
            .input('datasetUseConstraints', sql.NVarChar, req.body.datasetUseConstraints)
            .input('datasetMetadataUpdate', sql.NVarChar, req.body.datasetMetadataUpdate)
            .input('datasetSecurityConstraints', sql.NVarChar, req.body.datasetSecurityConstraints)
            .input('datasetAdditionalInfo', sql.NVarChar, req.body.datasetAdditionalInfo)
            .input('datasetLineage', sql.NVarChar, req.body.datasetLineage)
            .input('datasetOpenDataURL', sql.NVarChar, req.body.datasetOpenDataURL || undefined)
            .input('datasetRESTEndpoint', sql.NVarChar, req.body.datasetRESTEndpoint || undefined)
            .input('datasetRelatedDocuments', sql.NVarChar, req.body.datasetRelatedDocuments)
            .input('datasetValidated', sql.Bit, req.body.datasetValidated || 0)
            .input('datasetSharingApproval', sql.Bit, req.body.datasetSharingApproval || 0)
            .input('updatedBy', sql.NVarChar, req.connection.user)
            .query(queryString)
    }).then(result => {
        console.log(result);
		res.redirect('../../../profile/#successModal');
    }).catch(err => {
		console.log(err);
		res.redirect('../../../profile/#errorModal');
	});
	
	sql.on('error', err=> {
		console.log(err)
	});
});

module.exports = router;