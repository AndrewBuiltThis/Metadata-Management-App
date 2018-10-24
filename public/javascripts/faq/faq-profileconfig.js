var introSetup = {
    steps: [
        {
      	    intro: "Welcome to your personal Profile page! <br /> <br />This is an awesome page and is arguably the most important. Why? <b>Here is the only place you can edit and manage you datasets</b> <br /> <br /> Click the next button to continue!"
        },
        {
            element: '#editTable',
            intro: "This is the Edit Table, the single-place where you can edit your records. <br /> <br />Notice that there are considerably fewer entries here than on the Explore Page. This is because this table contains <i>only</i> the records you submit or have been granted access to via the CoLab. <br /> <br /> Click the next button to see how editing works!"
        },
        {
            element: '#editTable',
            intro: "If you want to edit a record, the process is super simple (and I'm quite proud of that!). Similar to the Explore Table, you can get a modal (pop-up) by clicking on a record. When you click on a record, an editable interface appears with all the fields you can edit against<br /> <br /> Once your modal is expanded, you can then edit the fields. <b>But don't worry, the edits aren't saved until you hit the 'Submit Changes Button'</b><br /><br /> If you click 'Cancel' or click outside the modal, the edits won't be saved. <br /> <br />After the edits are submit, you'll get pushed to either a success or error page.<br /><br />Click next to wrap it up!"
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