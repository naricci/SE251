$(document).ready(function () {

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

var actors = [];    // Array to store submitted actor data in
var a = 0;

// Add Actor Function
$('#addButton').on('click', function () {

    var first = $('#first').val();
    var last = $('#last').val();
    var dob = $('#day').val();
        dob += '/' + $('#month').val();
        dob += '/' + $('#year').val();
    var gender = $('input[type=radio]:checked').val();
    var genre = [];
    $('input[type=checkbox]:checked').each(function () {
        genre.push($(this).val());
    });
    var actor = {};
        actor.first = first;
        actor.last = last;
        actor.dob = dob;
        actor.gender = gender;
        actor.genre = genre;
        actors.push(actor);

    alert(JSON.stringify(actor));
    $('#actorsList').append('<li class=" + a + "><a href="#" class="info" data-actor-id=" + a + ">' + actor.first + " " + actor.last + '</a></li>');
    a++;

    // Remove Update/Delete Buttons
    $('#updateButton').remove();
    $('#deleteButton').remove();
});
    
    // Get Actor Function
    function getActorInfo() {

        $('.info').click(function () {
            var index = $(this).data('actor-id');
            $('input[type=checkbox]').prop('checked', false);
            $('#updateButton').remove();
            $('#deleteButton').remove();

            updateButton = '<input type="button" id="updateButton" value="Update Info"/>';
            deleteButton = '<input type="button" id="deleteButton" value="Delete Actor"/>';
        });
    }
    getActorInfo();
});