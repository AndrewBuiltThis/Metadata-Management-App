# Metadata Management Made Easy

### I come from the GIS world, where managing metadata is almost too easy through Esri's ArcCatalog tool. However, not all data is spatial, but all data needs metadata.

### This application makes managing all metadata too easy.

Specifically, this application provides a web-interface for metadata input, editing, discovery and feedback. It also provides the scaffolding for any inventory management (data, applications, servers, etc.). It's not perfect and is stil undergoing permutations to get it truely enterprise-ready, but it is a hell of a lot beter than using excel.

# Here are the bones

The application was originally built as a fully open-source solution, but once some people at my job got into it, they wanted to integrated the application out of MariaDB and into SQL. The current components are:
* A boostrap front-end;
* Usage of the awesome FooTable plugin;
* A NodeJS backend / middleware; and
* 2017 SQL Server; 

# Some Important Details

* One of the requirements of this app was to use intergrated windows authentication, which was accomplished via the node-sspi package and a bit of database hocus-pocus. Specifically, my genius DBA friend Larry built a stored procedure to impersonate users based on the requester. The important takeaway: this is built for windows, unfortunately.
* The node_modules were not uploaded to github as that would be a comical amount of data to copy. 
* The REST API in this application does not have a GUI yet, so the calls are all constructed via the app.

## How To Make it Work For You

Fork it / Clone it / Download it! Then let's get it goin'

Here are the moving parts you need to update in order to deploy this application yourself:
1. After you've got your local copy of this handsome fella', the first thing you'll want to do is run 'npm install' or 'npm rebuild' in the directory. This will download the appropriate node_modules.
2. Until I post the stored procedure on here, you'll likely need build out your database on your own. The database I'm using derived its schema from the Metadata Standard that I wrote for the City of Charlotte. For simplicity's sake, I'd suggest building the database according to the schema outlined in the app.
3. Once your database is happy as a clam and matches the fields that the application is looking for, you're ready to connect the two. This is done by creating a 'prod.env' file in the main app directory and including the appropriate connection information. The fields you need to define are 'DB_SERVER', 'DB_INSTANCE' and potentially 'APP_USER' and 'APP_PASS' depending on how you decide to implement this solution.

Once the database is proper, the node_modules imported, and the environmental variables are set, you should be good to go.

I'll post the database build scripts and procedures in a bit so the whole package is nice and neat. 

Feel free to reach out for help or question!

Cheers,
A
