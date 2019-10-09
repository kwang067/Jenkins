var jokeContainer = document.getElementById("joke-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    if (jokeContainer.firstChild){
        jokeContainer.removeChild(jokeContainer.firstChild)
        ourRequest.open('GET', 'https://api.chucknorris.io/jokes/random');
        ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
        };
        ourRequest.send();
    }
    else {
        ourRequest.open('GET', 'https://api.chucknorris.io/jokes/random');
        ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
        };
        ourRequest.send();
    }
    
})


function renderHTML(data) {
    var htmlString = data.value;
    jokeContainer.insertAdjacentText('beforeend', htmlString);
};



