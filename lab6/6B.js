$(document).ready( function () {

    $('tr:odd').css('background-color', '#ccc');

    // Obtain and display some JSON data
    $.getJSON('http://jsonplaceholder.typicode.com/albums', function( data ) {
        var items = [];
        var index = 0;
        var tbl = "";
            tbl = "<table>";
            tbl += "<tr> <th>UserID</th> " +
            "<th>ID</th> " +
            "<th>Album</th> " +
            "</tr>";

        $.each( data, function( key, val ) {

            tbl += ("<tr><td>" + data[index].userId + "</td><td>" + data[index].id + "</td><td>" + data[index].title + "</td></tr>");
            index++;
        });
        $(tbl).appendTo("body");
    });
})
