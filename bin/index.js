
/* -- The City of Charlotte Data Hub --
  Description: This is the web application that acts as a master resource for handling
    organizational metadata.
  Objective: This will allow users to upload, edit, and discover shared data resources within
    the City.
  Author: Andrew Valenski, Spatial Intelligence Developer
  Date: 9/23/2018
*/ 

// Import necessary modules
const app = require('../app'); // This requires the app.js file's exported object


const dotenv = require('dotenv').config({path : '../prod.env'}); 
	//const dotenv = require('dotenv').config({path : '../z_dev.env'}); 
	//const dotenv = require('dotenv').config({path : '../z_test.env'});	
	//const dotenv = require('dotenv').config({path : '../z_prod.env'}); 

const port = 704; // This can be set to any available port on your machine

// The listen method instructs the application to begin listening,
// i.e. to to launch the application and wait for requests. This can
// be though of as the 'startup' function.
app.listen(port,() => {
    console.log(`Application listening on Port ${port}`);
});

