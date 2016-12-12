$(document).ready(function() {

    var ends;
    var weekRow;

    //Create table
    var createGrid = function () {
        var tbl = "<table style='border:solid 2px; cellspacing=40; border-color:black'>";
        tbl += "<h2>" + month + " " + year + "</h2>"
        tbl += "<thead>";
        tbl += "<tr> <td class ='dayHeader'>Sunday</td> " +
            "<td class ='dayHeader'>Monday</td> " +
            "<td class ='dayHeader'>Tuesday</td> " +
            "<td class ='dayHeader'>Wednesday</td> </td> " +
            "<td class ='dayHeader'>Thursday</td> " +
            "<td class ='dayHeader'>Friday</td> " +
            "<td class ='dayHeader'>Saturday</td>";
        tbl += "</thead>";
        var num = 1;
        tbl += "<tbody>"

        for (var row = 0; row < weekRow; row++) {
            tbl += "<tr>";

            for (var col = 0; col < 7; col++) {

                if (dayStarts < 1) {

                    tbl += "<td></td>";
                }
                else if (dayStarts <= ends) {
                    var dateStatus = num + "/" + month + "/" + year;

                    if (day == num && year == 2016) {
                        tbl += "<td id=" + dateStatus + " <div class='today'><p>" + dayStarts + "</p></div></td>";
                        num++;
                    }
                    else {
                        tbl += "<td id=" + dateStatus + " <div class='day'><p id>" + dayStarts + "</p></div></td>";
                        num++;
                    }
                }

                dayStarts++;
            }
            tbl += "</tr>";
        }
        tbl += "</tbody>";
        tbl += "</table>";

        $(tbl).appendTo('#calendar');

    };
});
