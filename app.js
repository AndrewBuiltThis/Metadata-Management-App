
/* -- The City of Charlotte Data Hub --
  Description: This is the web application that acts as a master resource for handling
    organizational metadata.
  Objective: This will allow users to upload, edit, and discover shared data resources within
    the City.
  Author: Andrew Valenski, Spatial Intelligence Developer
  Date: 9/23/2018
*/ 

// Import necessary node modules
const express = require('express'), // This is the core module for creating a scalable server
      bodyParser = require('body-parser'), // This module is for parsing the body of requests
      multer = require('multer'), // This is the module for parsing multi-part forms
      favicon = require('serve-favicon'), // This is required to serve the favicon
      path = require('path'); // This is required so we can dynamically build folder paths

// Initiate the express class
const app = express();
//Initiate the multer class
const upload = multer();

// Define the view enginer (how the application will render the pages)
app.set('view engine','pug');

// Define the views folder
app.set('views', __dirname + '/views');

// Define the public folder for static files
app.use(express.static(__dirname + '/public'));

// Define the specific path of the favicon
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon', 'favicon.ico')));

// Define the body parsing logic for POST requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Create primary middleware function to authenticate users and forward
// the request the subsequent routers thereafter
app.use(function (req, res, next) {
    var nodeSSPI = require('node-sspi')
    var nodeSSPIObj = new nodeSSPI({
      retrieveGroups: false,
      authoritative: true,
      perRequestAuth: true
    })
    nodeSSPIObj.authenticate(req, res, function(err){
      res.finished || next()
    })
  });

// Define the routes for the underlying API
const apiRouter = require('./routes/api/index');
const apiMetadataRouter = require('./routes/api/metadata/index');
const apiMetdataDatasetsRouter = require('./routes/api/metadata/datasets/index');
const apiMetdataUploadRouter = require('./routes/api/metadata/datasets/upload');
const apiProfileRouter = require('./routes/api/metadata/datasets/profile');
const apiInfoRouter = require('./routes/api/info/index');

// Define the routes for the actual website
const siteRouter = require ('./routes/site/index');
const siteCatalogRouter = require ('./routes/site/catalog');
const siteExploreRouter = require ('./routes/site/explore');
const siteLearnRouter = require ('./routes/site/learn');
const siteFAQRouter = require ('./routes/site/faq');
const siteProfileRouter = require ('./routes/site/profile');

// Define what the application will do when the API is invoked
app.use('/api',apiRouter);
    app.use('/api/metadata',apiMetadataRouter);
    app.use('/api/metadata/datasets',apiMetdataDatasetsRouter);
    app.use('/api/metadata/datasets/upload',apiMetdataUploadRouter);
    app.use('/api/metadata/myData',apiProfileRouter);
    app.use('/api/info',apiInfoRouter);

// Define what the application will do when serving web pages
app.use('/',siteRouter);
    app.use('/catalog', siteCatalogRouter);
    app.use('/explore', siteExploreRouter);
    app.use('/learn', siteLearnRouter);
    app.use('/profile', siteProfileRouter);
    app.use('/FAQ', siteFAQRouter);

// This makes the app object available to all other files
// By doing this, we startup our app elsewhere and keep the 
// start-up function clean and isolated.
module.exports = app;