function theFetch() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            var objUserName = document.getElementById("fetchNameDropdownID").value;
            var objKey = document.getElementById("fetchKey").value;
            for (var i = 0; i < json.length; i++) {
                if (json[i].username == objUserName) {
                    var jvarstr = JSON.stringify(json[i][objKey]).replace(/\"/g, ""); //Is there a better way to remove quotation marks from json return data?
                    document.getElementById("submitResponse").innerHTML = jvarstr;
                    document.getElementById("fetchFeedback").innerHTML = "Fetched";
                    console.log(json);
                }
            }
        })
        .catch(err => {
            console.error('Error: ', err)
        })
}



let dropdown = document.getElementById("fetchNameDropdownID");
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Full Name';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(response => {
/*        if (response.status !== 200) {
            console.warn('Oops. Status Code: ' + response.status); // could use error() instead?
            return; // do I need return here even if already console.warn?
        }
*/
        response.json().
            then(theData => {
                let option;
                for (let i = 0; i < theData.length; i++) {
                    option = document.createElement('option');
                    option.text = theData[i].name;
                    option.value = theData[i].username;
                    dropdown.add(option);
                }
            });
    }
    )
    .catch(err => {
        console.error('Error: ', err);
    });