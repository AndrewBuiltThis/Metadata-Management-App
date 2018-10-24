var introSetup = {
    steps: [
        {
      	    intro: "Catalogging Your Data! <br /> <br />Welcome to the Catalog page of the Data Hub. Here you can submit entries to the City's Dataset Census. <br /> <br /> Click the next button to continue!"
        },
        {
            element: '#catalogContainer',
            intro: "This is the Catalog Window, or the place that you'll be entering your dataset's information. <br /> <br />The Catalog Window has six sections: 'Introductions,' 'Maintenance,' 'Checkpoint,' 'Required Metadata Fields' 'Optional Fields,' and 'Terms and Whatnot.'<br /> <br /> Click the next button for some more information!"
        },
        {
            element: '#datasetName',
            intro: "We won't go through all the fields, but here's the low-down. <br /> <br /> The form is made up of six pages. The form only requires that you complete the first two, 'Introductions' and 'Maintenance', however it is recommended you complete the entire form. <br /> <br /> You'll notice red asketrisks (*) next to required fields. If you attempt to submit or click next without completing these properly, you'll get an error. <br /> <br /> Click the next button for some more details!"
        },
        {
            element: '#datasetNameIcon',
            intro: "This little fellow is the Field Info button. <br /> <br /> You can click on these icons and get information about the field, if there are any specifics to how it should be submit, or for a sample value. <br /> <br /> Click the next button to keep on rockin'!"
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