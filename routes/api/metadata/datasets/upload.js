var express = require('express');
var router = express.Router();

// GET API Metadata Datasets Page. 
router.post('/', function(req, res) {
    // This is the function to actually establish a connection to the database   
	const sql = require('mssql/msnodesqlv8');
	var config = {
		user: req.connection.user,
		driver: 'msnodesqlv8',
		connectionString: `Driver={ODBC Driver 11 for SQL Server};Server={${process.env.DB_SERVER}};Database={${process.env.DB_INSTANCE}};Trusted_Connection={yes}; Integrated Security={SSPI}`,
    };
    // console.log(sqlStatement);

    sql.connect(config, function(err) {
        if (err) {
            console.log(err);
            res.render('error');
            sql.close();
        }

        var sqlRequest = new sql.Request();
        sqlRequest.input('datasetName',sql.NVarChar,req.body.datasetName)
        sqlRequest.input('datasetSummary',sql.NVarChar,req.body.datasetSummary)
        sqlRequest.input('datasetTags',sql.NVarChar,req.body.datasetTags)
        sqlRequest.input('datasetSource',sql.NVarChar,req.body.datasetSource)
        sqlRequest.input('datasetType',sql.NVarChar,req.body.datasetType)
        sqlRequest.input('datasetDepartment',sql.NVarChar,req.body.datasetDepartment)
        sqlRequest.input('datasetSteward',sql.NVarChar,req.body.datasetSteward)
        sqlRequest.input('datasetStewardEmail',sql.NVarChar,req.body.datasetStewardEmail)
        sqlRequest.input('datasetOwner',sql.NVarChar,req.body.datasetOwner)
        sqlRequest.input('datasetOwnerEmail',sql.NVarChar,req.body.datasetOwnerEmail)
        sqlRequest.input('datasetUpdateFrequency',sql.NVarChar,req.body.datasetUpdateFrequency)
        sqlRequest.input('datasetPointRecords',sql.NVarChar,req.body.datasetPointRecords)
        sqlRequest.input('datasetSharing',sql.NVarChar,req.body.datasetSharing)
        sqlRequest.input('datasetDescription',sql.NVarChar,req.body.datasetDescription)
        sqlRequest.input('datasetStatus',sql.NVarChar,req.body.datasetStatus)
        sqlRequest.input('datasetTopic',sql.NVarChar,req.body.datasetTopic)
        sqlRequest.input('datasetUseConstraints',sql.NVarChar,req.body.datasetUseConstraints)
        sqlRequest.input('datasetMetadataUpdate',sql.NVarChar,req.body.datasetMetadataUpdate)
        sqlRequest.input('datasetSecurityConstraints',sql.NVarChar,req.body.datasetSecurityConstraints)
        sqlRequest.input('datasetAdditionalInfo',sql.NVarChar,req.body.datasetAdditionalInfo)
        sqlRequest.input('datasetLineage',sql.NVarChar,req.body.datasetLineage)
        sqlRequest.input('datasetOpenDataURL',sql.NVarChar,req.body.datasetOpenDataURL || undefined)
        sqlRequest.input('datasetProgramURL',sql.NVarChar,req.body.datasetProgramURL || undefined)
        sqlRequest.input('datasetRESTEndpoint',sql.NVarChar,req.body.datasetRESTEndpoint || undefined)
        sqlRequest.input('datasetRelatedDocuments',sql.NVarChar,req.body.datasetRelatedDocuments)
        sqlRequest.input('datasetShareStatusId',sql.Int,0)
        sqlRequest.input('datasetValidated',sql.Int,0)
        sqlRequest.input('datasetSharingApproval',sql.Int,0)
		sqlRequest.input('updatedBy', sql.NVarChar, req.connection.user)
        var sqlStatement = 'INSERT INTO masterrecord (title,summary,tags,datasetSource,datasetType,department,dataSteward,dataStewardEmail,dataOwner,dataOwnerEmail,updateFrequency,recordCount,publicAccessLevel,description,dataStatus,topic,useConstraints,metadataUpdateFrequency,securityConstraints,notes,lineage,downloadURL,programLink,endpoint,relatedDocument,shareStatus,metadataValidated,sharingApproval, updatedBy) VALUES (@datasetName ,@datasetSummary ,@datasetTags ,@datasetSource ,@datasetType ,@datasetDepartment ,@datasetSteward ,@datasetStewardEmail ,@datasetOwner ,@datasetOwnerEmail ,@datasetUpdateFrequency ,@datasetPointRecords ,@datasetSharing ,@datasetDescription ,@datasetStatus ,@datasetTopic ,@datasetUseConstraints ,@datasetMetadataUpdate ,@datasetSecurityConstraints ,@datasetAdditionalInfo ,@datasetLineage ,@datasetOpenDataURL ,@datasetProgramURL ,@datasetRESTEndpoint ,@datasetRelatedDocuments ,@datasetShareStatusId ,@datasetValidated, @datasetSharingApproval, @updatedBy)'
        sqlRequest.query(sqlStatement, function(err){
            //console.log(sqlStatement);
            if(err) {
                console.log(err);
                res.render('error');
                sql.close();
            }
            res.status(200).render('site/index');
            sql.close();
        });
    });
	
	const nodemailer = require('nodemailer');
    const smtpConfig = {
      host: 'transport.ci.charlotte.nc.us',
      port: 25,
      secure: false,
	  tls: {
		  rejectUnauthorized: false
	  }
      };	
    const transporter = nodemailer.createTransport(smtpConfig);
	
	var datasetOwner = req.body.datasetOwner;
    var datasetOwnerEmail = req.body.datasetOwnerEmail;
    var datasetSteward = req.body.datasetSteward;
    var datasetStewardAndOwnerEmail = req.body.datasetOwnerEmail + ' , ' + req.body.datasetStewardEmail;
    var datasetName = req.body.datasetName;
    var datasetSharing = req.body.datasetSharing;
	
	var notifySubject = `🐻 The Dataset ${datasetName} was just added to the Dataset Census!🐻`;
    var notifyMessage = `<p>Hello, <strong>${datasetOwner}</strong>!</p><p>We're just reaching out to let you know that a new dataset, <strong>${datasetName}</strong>, was added to the City of Charlotte's 🔮<a href="http://datahub:704" target="_blank" rel="noopener">Data Hub</a>🔮. Your colleague, <strong>${datasetSteward}</strong>, submit this record so if this is coming out of the blue, I'd suggest reaching out to them so we're all on the same page (I'm just a program... beep boop bop 🤖).</p><p>Currently the dataset's sharing level is : <strong>${datasetSharing}</strong></p><p>There are four sharing levels: Open (O.K. to go to the public), Internal (O.K. for all City employees to see it), Departmental (Only a select number of departments have access) and Restricted (just for you).</p><p>Since you were marked as the Dataset Owner's (Congrats, by the way 🎉), we wanted to reach out and let you know so you can review the dataset to ensure its metadata looks good and that is sharing level is appropriate.</p><p>Please review the dataset and approve it via the My Profile section of the Data Hub. You can edit and approve the record by clicking on the row in the table and a beautiful pop-up will emerge that allows you to edit the content. Make sure you check the appropriate boxes at the bottom of the page before hitting the submit button also!</p><p>Hmmm ... I think that's everything ... If I missed anything (or you have no idea what the Data Hub is, check out the DH's FAQ page!</p><p>Thank you so much for adding this dataset to the City's Dataset Census -- you are killing it and making the City a better place for everyone. Seriously. You're nailing it.</p><p>Thanks so much!<br />Primary Key<br />The Data Hub Data Cub<br />🐻</p>`;
		
    let message = {
      from: 'rcerrato@charlottenc.gov',
      to: datasetStewardAndOwnerEmail,
      cc: 'rcerrato@charlottenc.gov',
      subject: notifySubject,
      html: notifyMessage
    };
	//console.log(message);
    transporter.sendMail(message);
	
});

module.exports = router;