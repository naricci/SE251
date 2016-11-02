$(document).ready(function () {
    // alert("THIS WORKS");
    displayCalendar(daysOfWeek);
});

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function displayCalendar(months, years) {
    var cal += "<table style='border: 2px solid black;'>";
    cal += "<th>";
    for (i = 0; i < daysOfWeek.length; i++)
    {
        cal += "<td> + daysOfWeek[i] + </td>";
    }
    cal += "</th>";
    cal += "</table>";
    document.getElementById('results').innerHTML;
}

//$('#results').display()