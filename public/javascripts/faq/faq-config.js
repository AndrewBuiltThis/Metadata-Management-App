var introSetup = {
    steps: [
        {
      	    intro: "Welcome to the Data Hub! <br /> <br />Right now you are on the Home page, which is the best place to be if you are new to the site. <br /> <br /> Click the next button to continue!"
        },
        {
            element: '#navigationBar',
            intro: "This is the Navigation Bar, or Nav Bar for short. <br /> <br />The Nav Bar will be on every page and allows you to move from page to page. The Navbar will not vary between pages, so you should always have the same options available.<br /> <br /> Click the next button to see what the Nav Bar Items do!"
        },
        {
            element: '#navigationHome',
            intro: "This is the Home Button. <br /> <br /> The Home Button will return you to the Home Page. If you're ever lost, click on the 'Home' button. <br /> <br /> Click the next button to see what the other Nav Bar Items do!"
        },
        {
            element: '#navigationCatalog',
            intro: "This is the Catalog Data Button. <br /> <br /> When you are looking to add a dataset to the City's Dataset Census you'd start here. Note, that you can only add datasets to the Dataset Census via this wokflow. We'll cover editing the Dataset Census later. <br /> <br /> The Catalog Data workflow is tailored for datasets that are either unstructured/non-tabular (such as .PDF files, images, reports or documents) or datasets that aren't inteded to be shared. <br /> <br /> If you're looking to add a dataset to the Dataset Census that is both structured (such as a database table) and is intended to be shared, you'd click on the next Nav Bar Item, Upload Metadata. <br /> <br /> Click the next button to see what the other Nav Bar Items do!"
        },
        {
            element: '#navigationExplore',
            intro: "This is the Search for Data Button. <br /> <br /> When a dataset is added to the Dataset Census (either by catalogging the data via the Catalog Data workflow or via the Upload Metadata workflow), it becomes discoverable. This button allows you to search the Dataset Census<br /> <br /> It is important to remember that adding data to the Dataset Census does not make the data itself available. Instead, it just makes the data discoverable via this application. <br /> <br /> Click the next button to see what the other Nav Bar Items do!"
        },
        {
            element: '#navigationLearn',
            intro: "This is the Learn Button. <br /> <br /> New to data? Thinking about learning a new skillset such as Python, JavaScript, R or SQL? This is where you want to be!<br /> <br /> Through the Operational Excellence Academcy (OpEx), peer mentors, external-resources and some dedicated employees, you can elevate yourself to the next level. <br /> <br /> Click the next button to see what the other Nav Bar Items do!"
        },
        {
            element: '#navigationFAQ',
            intro: "This is the FAQ Button. <br /> <br /> The FAQ Button directs you to a FAQ page where the application, the terminology, the purpose and a whole host of important questions are answered. If you're ever confused about what is 'actually happening' when you go through a workflow, use this button to get you to the right place. <br /> <br /> Click the next button to see what the other Nav Bar Items do!"
        },
        {
            element: '#navigationProfile',
            intro: "This is the My Profile Button. <br /> <br /> When a dataset is added to the Dataset Census, you may need to go back and edit the record. Here is where you can see datasets you have priveleges to edit. <br /> <br /> Data Editors and Data Auditors can edit their department's datasets through the My Profile page as well. <br /> <br /> Click the next button to see what the other Nav Bar Items do!"
        },
        {
            element: '#navigationTutorial',
            intro: "This is the Tutorial Button. <br /> <br /> Each page in this application has a unique tutorial, just like this one, so you know what all the buttons and elements do. <br /> <br /> If you get to a page and are confused, aren't sure what to do or how to do it, click on this button for a quick tutorial. <br /> <br /> Click the next button to continue!"
        },
        {
            intro: "That covers this page! <br /> <br /> If you're brand new to all of this, you may want to start at the FAQ Page. <br /> <br /> To close this dialogue, click anywhere on the page. <br /> <br /> Good luck and have fun!"
        }
    ]
};

function helpTutorial(){
    introJs().setOptions(introSetup).onchange(function(){
        }).onexit(function(){
        }).oncomplete(function(){
        }).start()
};