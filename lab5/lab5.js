$(document).ready(function () {

    // Create Add Update Delete Actor Button
    $('#aud-buttons').append('<input type="button" name="add" value="Add"/>');
    $('#aud-buttons').append('<input type="button" name="update" value="Update"/>');
    $('#aud-buttons').append('<input type="button" name="delete" value="Delete"/>');

    // Create List of Days for Day Drop-Down
    var d;
    for (d = 1; d < 32; d++) {
        $('#day').append('<option value="' + d +'">' + d + '</option>');
    }

    // Create List of Years for Year Drop-Down
    var y;
    for (y = 1950; y < 2016; y++) {
        $('#year').append('<option value="' + y + '">' + y + '</option>');
    }


});