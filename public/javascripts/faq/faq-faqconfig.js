var introSetup = {
    steps: [
        {
      	    intro: "This is the Frequently Asked Questions (FAQ) page <br /> <br />In case you've never been to a FAQ page, this help tutorial will get you oriented. <br /> <br /> Click the next button to continue!"
        },
        {
            element: '#accordion',
            intro: "Why do help-pages always feel so cluttered? Not anymore (so cheesy, I know).<br /><br /> You'll notice that there's essentially just a single list, known as the Accordion. The Accordion is named appropriately. If you click on a section, it will minimize the currenly expanded section and expand the one you clicked on!<br /> <br />Click the next button to see what happens!"
        },
        {
            intro: "That covers this page! <br /> <br /> I suggest exploring around and getting familiar. I am a big 'learn by doing' kinda guy. <br /> To close this dialogue, click anywhere on the page. <br /> <br /> Good luck and have fun!"
        }
    ]
};

function helpTutorial(){
    introJs().setOptions(introSetup).onchange(function(){
        }).onexit(function(){
        }).oncomplete(function(){
        }).start()
};