//The code will work by using one value to compare two arrays.
//eg the value 1 will point to the name "bananas" on the first array and point to the url "bananas.com" on the second array

const entryName = ["Google", "Wikipedia", "Github", "Test 1", "Test 2", "Test 3"];
const entryURL = ["https://google.com", "https://www.wikipedia.org/", "https://github.com/", "../Archive Entries (HTML)/Test Entry 1.html", "../Archive Entries (HTML)/Test Entry 2.html", "../Archive Entries (HTML)/Test Entry 3.html"];

//aC stands for Array Count
let aC = 0;
let input = ""; //It's in string form so it can be compared to the arrays

//Function will prompt user to enter a search value and then compare it to the array
function userSearch()
{
    for(aC = 0; aC < entryName.length; aC++)
    {
        input = search.value;
        input = input.toString();

        let currentName = entryName[aC];
        let currentURL = entryURL[aC];

        //Compare search input to current entry name. If the result isn't -1, add it to an array. Then show the results of this array
        let cutSearch = currentName.search(input);
        alert(cutSearch);
        
        
        if(input.toUpperCase() == currentName.toUpperCase())
        {
            alert("match has been found!");
            document.getElementById("nameHolder").innerHTML = '<a href="'+currentURL+'">'+currentName+'</a>';
            aC = entryName.length + 1;
        }
        

        
    }
}