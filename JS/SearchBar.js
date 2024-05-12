//The code will work by using one value to compare two arrays.
//eg the value 1 will point to the name "bananas" on the first array and point to the url "bananas.com" on the second array
//<script src="../JS/SearchBar.js"></script>

const entryName = ["test 1", "test 2", "test 3"];
const entryURL = ["other 1", "other 2", "other 3"];

//aC stands for Array Count
let aC = 0;
let input = "";

//Function will prompt user to enter a search value and then compare it to the array
function userSearch(){
    for(aC = 0; aC <= entryName.length; aC++)
        {
            input = search.value;
            
            if(input = entryName[1]) {
                alert("match has been found!");
                document.getElementById("nameHolder").innerHTML = document.write(entryName[1]);
                document.getElementById("URLHolder").innerHTML = document.write(entryURL[1]);
            }
        }
}


