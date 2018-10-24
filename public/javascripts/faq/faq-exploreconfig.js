var introSetup = {
    steps: [
        {
      	    intro: "Exploring the City's Data! <br /> <br />This handsome fella is the Explore Data page and allows users to search for datasets and a couple of other nifty tricks. <br /> <br /> Click the next button to continue!"
        },
        {
            element: '#exploreTable',
            intro: "Let's meet the Explore Table, a dynamic table that allows you to search for Datasets on the City's Dataset Census. <br /> <br />As you can see, the table looks rather simple (especially since a bunch more fields seemed to be required!), but we'll cover that. First let's cover searching.<br /> <br /> Click the next button to learn about the features!"
        },
        {
            element: '#tableSearch',
            intro: "Sure, navigating this table manually sounds fun, but there <i>has to be a better way</i> (foreshadowing)! <br /> <br /> Meet your new best friend: the search bar. The search bar does exactly what you'd expect (and a bit more). First and foremost, you can type into the Search Bar and the table will filter to show only those results.<br /> <br /> The Search Bar searches beyond just the fields you can see, too. All the fields in the dataset get searched! <br /> <br /> Click the next button for some more brain-food!"
        },
        {
            element: '#exportButton',
            intro: "Looking to use this information on your own? Great news -- we have an Export Button! <br /> <br />The Export Button allows you to get a .csv of the data (in its current state). That means that if you searched for 'dogs,' your csv would only contain the reuslts. <br /> <br /> <b> The current view-extent (the number of rows in the table) has no effect on this. So if hit the 'Export' button while on 'page 1 or 5,' you'll get five pages of records.</b> <br /> <br />Click the next button to keep this party alive!"
        },
        {
            element: '#showButton',
            intro: "Maybe you want to show more records than the default ten-per-page. Meet the Show Button! <br /> <br />  If you click on this button, you can change how many rows appear in this awesome table. <br /> <br />Click the next button to absorb more knowledge!"
        },
        {
            element: '#exploreTable',
            intro: "Back to the star of the show, the Explore Table. Interested in sorting? Woohoo, so is the Explore Table! <br /> <br />If you hover over the table headers (i.e. the column names), you will see some arrow-icons load. If you take it even further and click on a table-header, the table will sort based on that field. <br /> <br />Click the next button hop on the train!"
        },
        {
            element: '#exploreTable',
            intro: "There must be more information than this, right? Yes, there is and its hidden to improve your experience. <br /> <br />If you click on a row, a full-page modal (pop-up) will show up in the app with all of the information associated with that record. That's pretty sweet, if I do say so myself. <br /> <br /><b>Pro Tip: if you click on the Data Steward or Owner, you can email them directly!</b>!<br /> <br />Click the next button to roll on through'!"
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