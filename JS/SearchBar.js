//Written by Matthew Gormley, G00431064. This is the main rudementry search engine that I spent the majority of my time building for this project.
//The code works on the principal of using one value to compare two different arrays.
//eg the value 1 will point to the name "bananas" on the first array and point to the url "bananas.com" on the second array
//if I could go back and do it differently with my now increased knowlege of javascript, I would instead use something like {bananas.name = "", bananas.url = ""}, but I did not know of this before my code was almost finished.

const entryName = ["Test 1", "Test 2", "Test 3"];
const entryURL = ["../Archive Entries (HTML)/Test Entry 1.html", "../Archive Entries (HTML)/Test Entry 2.html", "../Archive Entries (HTML)/Test Entry 3.html"];
const cutArrayName = [];
const cutArrayURL = [];

//aC stands for Array Count
let aC = 0;
let input = ""; //It's in string form so it can be compared to the arrays

//Function will prompt user to enter a search value and then compare it to the array
function userSearch()
{
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

        let cutResult = "";
        
        //When the loop reaches the end of its lifespan, this code is executed. It adds all the names/links together and displays them for the user.
        if(aC <= entryName.length)
            {
                for(cutLoop = 0; cutLoop < cutArrayName.length; cutLoop++)
                {
                    cutName = cutArrayName[cutLoop];
                    cutURL = cutArrayURL[cutLoop];
                    cutResult += '<br><a href="' + cutURL + '">' + cutName + '</a>';
                }

                cutArrayName.forEach(function(item) {
                    console.log(item);
                });
            }
        
        document.getElementById("nameHolder").innerHTML = cutResult;

        //It may not seem like much, but I believe this the most amount of effort of outside the box thinking I've had to do for coding.
        
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