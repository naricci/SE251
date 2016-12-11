var actors = [];    // Array to store submitted actor data in
var a = 0;
var results;

// Add Actor Function
function addActorInfo() {

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
<<<<<<< HEAD
    $('#actorsList').append('<li class=" + a + "><a href="#" class="info" data-actor-id=" + a + ">' + actor.first + " " + actor.last + '</a></li>');
=======
    $('#actorsList').append('<li class="' + a + '"><a href="#" class="info" data-actor-id="' + a + '">' + actor.first + " " + actor.last + '</a></li>');
>>>>>>> week4
    a++;

    // Remove Update/Delete Buttons
    $('#updateButton').remove();
    $('#deleteButton').remove();
}
<<<<<<< HEAD
=======

>>>>>>> week4
// Get Actor Function
function getActorInfo() {

    $('.info').click(function () {
        var index = $(this).data('actor-id');   // index used to keep track of actors as they are added and incremented
        $('input[type=checkbox]').prop('checked', false);
        $('#updateButton').remove();
        $('#deleteButton').remove();

        $('#first').val(actors[index].first);
        $('#last').val(actors[index].last);
<<<<<<< HEAD
        splitDate = [];
=======
        var splitDate = [];
>>>>>>> week4
        splitDate = actors[index].dob.split('/');   // Break dob into pieces at each slash
        $('#day').val(splitDate[0]);
        $('#month').val(splitDate[1]);
        $('#year').val(splitDate[2]);
        $('input[type=radio][value=' + actors[index].gender + ']').prop('checked', true);

<<<<<<< HEAD
        var i = 0;
=======
        var i;
>>>>>>> week4
        for (i = 0; i < actors[index].genre.length; i++)
        {
            $('input[type=checkbox][value=' + actors[index].genre[i] + ']').prop('checked', true);
        }
        // Create Dynamic Update/Delete Buttons/Variables
<<<<<<< HEAD
        var updateButton = "<input type='button' id='updateButton' value='Update Info'/>";
        var deleteButton = "<input type='button' id='deleteButton' value='Delete Actor'/>";

        $('#addButton').append(updateButton, deleteButton);
=======
        var updateButton = "<input type='button' name='updateButton' id='updateButton' value='Update Info' />";
        var deleteButton = "<input type='button' name='deleteButton' id='deleteButton' value='Delete Actor' />";

        $('#buttonDiv').append(updateButton, deleteButton);
>>>>>>> week4

        // Delete Actor Info
        $('#deleteButton').on('click', function () {

            $('.' + index ).remove();
            $('#updateButton').remove();
            $('#deleteButton').remove();
            clearFields();
            getActorInfo();
        });

        // Update Actor Info
        $('#updateButton').on('click', function () {

            $('.'+ index ).remove();
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
                actors.splice(index, 1, actor);

<<<<<<< HEAD
            $('#actorsList').append('<li class=" + a + "><a href="#" class="info" data-actor-id=" + a + ">' + actor.first + " " + actor.last + '</a></li>');
=======
            $('#actorsList').append('<li class="' + index + '"><a href="#" class="info" data-actor-id="'+ index + '">' + actor.first + " " + actor.last + '</a></li>');
>>>>>>> week4
            $('#updateButton').remove();
            $('#deleteButton').remove();
            getActorInfo();
            clearFields();
        });
    });
}

// Form Validation
function formValidation() {

    var results = true;

    if ( $('#first').val() == "" )
    {
        alert("Please enter your first name.  Field cannot be left blank.");
        results = false;
    }

    if ( $('#last').val() == "" )
    {
        alert("Please enter your last name.  Field cannot be left blank.");
        results = false;
    }

    if ( !$("input[name='gender']").is(":checked") )
    {
        alert("Please choose a gender.  Field cannot be left blank.");
        results = false;
    }

    if ( !$("input[name='genre']").is(":checked") )
    {
        alert("Please choose at least 1 genre.  Field cannot be left blank.");
        results = false;
    }

    return results;
}

// Clear Actor Info
function clearFields() {

    $('#first').val("");
    $('#last').val("");
    $('input[type=radio]').prop('checked', false);
    $('input[type=checkbox]').prop('checked', false);
}

$(document).ready(function () {

    // Create List of Days for Day Drop-Down
    var d;
    for (d = 1; d < 32; d++) {
        $('#day').append('<option value="' + d + '">' + d + '</option>');
    }

    // Create List of Years for Year Drop-Down
    var y;
    for (y = 1970; y < 2017; y++) {
        $('#year').append('<option value="' + y + '">' + y + '</option>');
    }

    // Add Actor Button On Click Func
    $('#addButton').on('click', function () {

        if ( formValidation() )
        {
            addActorInfo();
            getActorInfo();
        }
    });
});