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

    localStorage.setItem('actors', JSON.stringify(actors));
    alert(JSON.stringify(actor));
    $('#actorsList').append('<li class="' + a + '"><a href="#" class="info" data-act_id="' + a + '">' + actor.first + " " + actor.last + '</a></li>');
    a++;

    // Remove Update/Delete Buttons
    $('#updateButton').remove();
    $('#deleteButton').remove();
}

// Get Actor Function
function getActorInfo() {

    var getActors = JSON.parse(localStorage.getItem('actors'));

    if (getActors == null)
    {
        alert('No Actors.');
    }
    else
    {
        $("#actorsForm").hide();
        var deleteLocalStorage = "<input type='button' id='deleteLocalStorage' value='Delete Actors' /> ";
        $('#results').append(deleteLocalStorage);

        $('#deleteLocalStorage').on('click', function () {

            localStorage.clear();
            location.reload();
        });

        var getActor = {};
        var i;

        for (i = 0; i < getActors.length; i++)
        {
            getActor.first = (getActors[i].first);
            getActor.last = (getActors[i].last);
            getActor.dob = (getActors[i].dob);
            getActor.gender = (getActors[i].gender);
            getActor.genre = (getActors[i].genre);
            $('#actorsList').append('<li><a href="#" class="info" data-act_id="' + i + '">' + getActor.first + " " + getActor.last + '</a></li>');
        }
    }

    // Select Actor from List Function
    $('.info').click(function () {

        var index = $(this).data('act_id');
        $('input[type=checkbox]').prop('checked', false);
        $('#updateButton').remove();
        $('#deleteButton').remove();

        $('#first').val(getActor[index].first);
        $('#last').val(getActors[index].last);
        var splitDate = [];
        splitDate = getActors[index].dob.split('/');   // Break dob into pieces at each slash
        $('#day').val(splitDate[0]);
        $('#month').val(splitDate[1]);
        $('#year').val(splitDate[2]);
        $('input[type=radio][value=' + getActor[index].gender + ']').prop('checked', true);

        var i;
        for (i = 0; i < getActors[index].genre.length; i++)
        {
            $('input[type=checkbox][value=' + getActors[index].genre[i] + ']').prop('checked', true);
        }

        // Create Dynamic Update/Delete Buttons/Variables
        var updateButton = "<input type='button' name='updateButton' id='updateButton' value='Update Info' />";
        var deleteButton = "<input type='button' name='deleteButton' id='deleteButton' value='Delete Actor' />";

        $('#buttonDiv').append(updateButton, deleteButton);

        // Delete Actor Info
        $('#deleteButton').on('click', function () {

            $('.' + index ).remove();
            $('#updateButton').remove();
            $('#deleteButton').remove();
            clearFields();
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

            $('#actorsList').append('<li class="' + index + '"><a href="#" class="info" data-act_id="'+ index + '">' + actor.first + " " + actor.last + '</a></li>');
            $('#updateButton').remove();
            $('#deleteButton').remove();
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