$(document).ready(function() {

    var ends;
    var weekRow;

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

    // Date Func
    var date = function() {

        if (year == 2016)
        {

            switch (month)
            {

                case "0":
                    month = "January";
                    dayStarts = -4;
                    ends = 31;
                    weekRow = 6;
                    break;
                case "1":
                    month = "February";
                    ends = 29;
                    dayStarts = 0;
                    weekRow = 5;
                    break;
                case "2":
                    month = "March";
                    ends = 31;

                    dayStarts = 0;
                    weekRow = 5;
                    break;
                case "3":
                    month = "April";
                    ends = 30;
                    prevDays = 27;
                    dayStarts = -4;
                    weekRow = 5;
                    break;
                case "4":
                    month = "May";
                    ends = 31;
                    dayStarts = 1;
                    weekRow = 5;
                    break;
                case "5":
                    month = "June";
                    ends = 30;
                    dayStarts = -2;
                    weekRow = 5;
                    break;
                case "6":
                    month = "July";
                    ends = 31;
                    dayStarts = -4;
                    weekRow = 6;
                    break;
                case "7":
                    month = "August";
                    ends = 31;
                    dayStarts = 0;
                    weekRow = 5;
                    break;
                case "8":
                    month = "September";
                    ends = 30;
                    dayStarts = -3;
                    weekRow = 5;
                    break;
                case "9":
                    month = "October";
                    ends = 31;
                    dayStarts = -5;
                    weekRow = 6;
                    break;
                case "10":
                    month = "November";
                    ends = 30;
                    dayStarts = -1;
                    weekRow = 5;
                    break;
                case "11":
                    month = "December";
                    ends = 31;
                    dayStarts = -3;
                    weekRow = 5;
                    break;
            }
        }

        if (year == 2017)
        {

            switch (month)
            {

                case "0":
                    month = "January";
                    dayStarts = 1;
                    ends = 31;
                    weekRow = 5;
                    break;
                case "1":
                    month = "February";
                    ends = 28;
                    dayStarts = -2;
                    weekRow = 5;
                    break;
                case "2":
                    month = "March";
                    ends = 31;
                    dayStarts = -2;
                    weekRow = 5;
                    break;
                case "3":
                    month = "April";
                    ends = 30;
                    prevDays = 27;
                    dayStarts = -5;
                    weekRow = 5;
                    break;
                case "4":
                    month = "May";
                    ends = 31;
                    dayStarts = 0;
                    weekRow = 5;
                    break;
                case "5":
                    month = "June";
                    ends = 30;
                    dayStarts = -3;
                    weekRow = 5;
                    break;
                case "6":
                    month = "July";
                    ends = 31;
                    dayStarts = -5;
                    weekRow = 6;
                    break;
                case "7":
                    month = "August";
                    ends = 31;
                    dayStarts = -1;
                    weekRow = 5;
                    break;
                case "8":
                    month = "September";
                    ends = 30;
                    dayStarts = -4;
                    weekRow = 5;
                    break;
                case "9":
                    month = "October";
                    ends = 31;
                    dayStarts = 1;
                    weekRow = 5;
                    break;
                case "10":
                    month = "November";
                    ends = 30;
                    dayStarts = -2;
                    weekRow = 5;
                    break;
                case "11":
                    month = "December";
                    ends = 31;
                    dayStarts = -4;
                    weekRow = 6;
                    break;
            }
        }

        if (year == 2018)
        {

            switch (month)
            {

                case "0":
                    month = "January";
                    dayStarts = -1;
                    ends = 31;
                    weekRow = 5;
                    break;
                case "1":
                    month = "February";
                    ends = 29;
                    dayStarts = -4;
                    weekRow = 5;
                    break;
                case "2":
                    month = "March";
                    ends = 31;
                    dayStarts = -4;
                    weekRow = 5;
                    break;
                case "3":
                    month = "April";
                    ends = 28;
                    dayStarts = 1;
                    weekRow = 4;
                    break;
                case "4":
                    month = "May";
                    ends = 31;
                    dayStarts = -1;
                    weekRow = 5;
                    break;
                case "5":
                    month = "June";
                    ends = 30;
                    dayStarts = -4;
                    weekRow = 5;
                    break;
                case "6":
                    month = "July";
                    ends = 31;
                    dayStarts = 1;
                    weekRow = 5;
                    break;
                case "7":
                    month = "August";
                    ends = 31;
                    dayStarts = -2;
                    weekRow = 5;
                    break;
                case "8":
                    month = "September";
                    ends = 30;
                    dayStarts = -5;
                    weekRow = 6;
                    break;
                case "9":
                    month = "October";
                    ends = 31;
                    dayStarts = 0;
                    weekRow = 5;
                    break;
                case "10":
                    month = "November";
                    ends = 30;
                    dayStarts = -3;
                    weekRow = 5;
                    break;
                case "11":
                    month = "December";
                    ends = 31;
                    dayStarts = -5;
                    weekRow = 6;
                    break;
            }
        }
    }

    // Table Cell Func
    function clickColor() {

        $('tbody').find('td').hover(function () {
            var cc = 0;
            $('.day, .today').click(function () {
                cc++;

                if (cc == 1)
                {
                    $(this).css('background-color', 'rgb(0 , 255 , 0');
                    $('p').attr("id", "1");

                }

                if (cc == 2)
                {
                    $(this).css('background-color', 'rgb(255 , 0 , 0');
                    $('p').attr("id", "2");
                    cc = 0;
                }
            });
        });
    }

    var currentDate = new Date();
    var year = currentDate.getFullYear().toString();
    var month = currentDate.getMonth().toString();
    var day = currentDate.getDate();
    $("#month").val(month);
    $("#year").val(year);
    date();
    createGrid();
    clickColor();

    // Select Function
    $("#year , #month").change(function () {

        year = $("#year option:selected").val();
        month = $("#month option:selected").val();

        if (month == currentDate.getMonth().toString())
        {
            day = currentDate.getDate();
        }
        else
        {
            day = 0;
        }

        date();
        $("table , h2").remove();
        createGrid();
        clickColor();
    });

    $('.available').click(function () {

        $('.day, .today').css('background-color', 'rgb(0 , 255 , 0');
    });

    $('.unavailable').click(function () {

        $('.day, .today').css('background-color', 'rgb(255 , 0 , 0');
    });
});
