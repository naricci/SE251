var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function showCalendar(mth, yr) {


    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date(firstDayOfMonth);
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    var str = "<ul>";
    str += "<li>Number of days in the month: " + numberOfDaysInMonth + "</li>";
    str += "<li>First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")</li>";

    str += "</ul>";
    $("#results").html(str);
    // this is where you'll generate the grid, for now I will just show first day of week
}

function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(),
        anyDateInMonth.getMonth() + 1,
        0).getDate();
}
$(document).ready(function() {

    var d = new Date();
    var mth = d.getMonth() + 1;
    var yr = d.getFullYear();

    $("#month").val(mth);
    $("#year").val(yr);
    showCalendar(mth, yr);

    $("#month,#year").click(function(e) {
        showCalendar($("#month").val(), $("#year").val());

    });
});