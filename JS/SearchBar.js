//Written by Matthew Gormley, G00431064. This is the main rudementry search engine that I spent the majority of my time building for this project.
//The code works on the principal of using one value to compare two different arrays.
//eg the value 1 will point to the name "bananas" on the first array and point to the url "bananas.com" on the second array
//if I could go back and do it differently with my now increased knowlege of javascript, I would instead use something like {bananas.name = "", bananas.url = ""}, but I did not know of this before my code was almost finished.

const entryName = ["Central Processing Unit (CPU)", "Graphics Card (GPU)", "Headphones", "PC (Personal Computer)", "Lego", "Jerma985", "Hatsune Miku", "Chemistry", "Physics", "Biology", "Science", "Video Game", "Pokemon", "Dark Souls", "Black-Billed Magpie", "Razorbill", "Turkey Vulture", "The Eastern Kingbird", "Common Raven", "Archive of Our Own (ao3)"];
const entryURL = ["../Archive Entries (HTML)/Document1.html", "../Archive Entries (HTML)/Document2.html", "../Archive Entries (HTML)/Document3.html", "../Archive Entries (HTML)/Document4.html", "../Archive Entries (HTML)/Document5.html", "../Archive Entries (HTML)/Document6.html", "../Archive Entries (HTML)/Document7.html", "../Archive Entries (HTML)/Document8.html", "../Archive Entries (HTML)/Document9.html", "../Archive Entries (HTML)/Document10.html", "../Archive Entries (HTML)/Document11.html", "../Archive Entries (HTML)/Document12.html", "../Archive Entries (HTML)/Document13.html", "../Archive Entries (HTML)/Document14.html", "../Archive Entries (HTML)/Document15.html", "../Archive Entries (HTML)/Document16.html", "../Archive Entries (HTML)/Document17.html", "../Archive Entries (HTML)/Document18.html", "../Archive Entries (HTML)/Document19.html", "../Archive Entries (HTML)/Document20.html", ];
const cutArrayName = [];
const cutArrayURL = [];

//aC stands for Array Count
let aC = 0;
let input = ""; //It's in string form so it can be compared to the arrays
let cutResult = "";

//Function will prompt user to enter a search value and then compare it to the array
function userSearch()
{
    document.getElementById("nameHolder").innerHTML = "";
    cutResult = "";

    //Reset arrays to prevent stacking of results on repeat search
    cutArrayName.length = 0;
    cutArrayURL.length = 0;

    for(aC = 0; aC < entryName.length; aC++)
    {
        //input value imported from html, made case insensitive with rest of code
        input = search.value;
        input = input.toString().toLowerCase();

        let currentName = entryName[aC].toLowerCase();
        let currentURL = entryURL[aC];

        //Compare search input to current entry name. If the result isn't -1, add it and the url to their respective cut array.
        let cutSearch = currentName.search(input);
        let cutLoop = 0;
        let cutName = "test";
        let cutURL = "test";

        if(cutSearch != -1)
        {
            cutArrayName.push(currentName);
            cutArrayURL.push(currentURL);
        }

        cutResult = "";
        
        //When the loop reaches the end of its lifespan, this code is executed. It adds all the names/links together and displays them for the user.
        if(aC <= entryName.length)
            {
                cutResult = "Search Results:" + '<br>';
                for(cutLoop = 0; cutLoop < cutArrayName.length; cutLoop++)
                {
                    cutName = cutArrayName[cutLoop];
                    cutURL = cutArrayURL[cutLoop];
                    cutResult += '<a href="' + cutURL + '">' + cutName + '</a><br>';
                }

                cutArrayName.forEach(function(item) {
                    console.log(item);
                });
            }
        
        document.getElementById("nameHolder").innerHTML = cutResult;
        
        //This is the old testing code
        /*
        if(input.toUpperCase() == currentName.toUpperCase())
        {
            alert("match has been found!");
            document.getElementById("nameHolder").innerHTML = '<a href="'+currentURL+'">'+currentName+'</a>';
            aC = entryName.length + 1;
        }
        */

        
    }
}