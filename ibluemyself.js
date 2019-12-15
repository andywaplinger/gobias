var quotes = [];
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var text = xmlhttp.responseText;
        // Now convert it into array using regex
        quotes = text.split(/\n|\r/g);
    }
}
xmlhttp.open("GET", "data/quotes.txt", true);
xmlhttp.overrideMimeType("text/html");
xmlhttp.send();