var actors = [];    // Array to store submitted actor data in
var a = 0;

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
    $('#actorsList').append('<li class=" + a + "><a href="#" class="info" data-actor-id=" + a + ">' + actor.first + " " + actor.last + '</a></li>');
    a++;

    // Remove Update/Delete Buttons
    $('#updateButton').remove();
    $('#deleteButton').remove();
}
// Get Actor Function
function getActorInfo() {

    $('.info').click(function () {
        var index = $(this).data('actor-id');   // index used to keep track of actors as they are added and incremented
        $('input[type=checkbox]').prop('checked', false);
        $('#updateButton').remove();
        $('#deleteButton').remove();

        $('#first').val(actors[index].first);
        $('#last').val(actors[index].last);
        splitDate = [];
        splitDate = actors[index].dob.split('/');   // Break dob into pieces at each slash
        $('#day').val(splitDate[0]);
        $('#month').val(splitDate[1]);
        $('#year').val(splitDate[2]);
        $('input[type=radio][value=' + actors[index].gender + ']').prop('checked', true);

        for (i = 0; i < actors[index].genre.length; i++)
        {
            $('input[type=checkbox][value=' + actors[index].genre[i] + ']').prop('checked', true);
        }
        // Create Dynamic Update/Delete Buttons
        updateButton = "<input type='button' id='updateButton' value='Update Info'/>";
        deleteButton = "<input type='button' id='deleteButton' value='Delete Actor'/>";

        $('#addButton').append(updateButton, deleteButton);

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

            $('#actorsList').append('<li class=" + a + "><a href="#" class="info" data-actor-id=" + a + ">' + actor.first + " " + actor.last + '</a></li>');
            $('#updateButton').remove();
            $('#deleteButton').remove();
            getActorInfo();
            clearFields();
        });
    });
}

// Clear Actor Data
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
    for (y = 1950; y < 2016; y++) {
        $('#year').append('<option value="' + y + '">' + y + '</option>');
    }

    $('#addButton').on('click', function () {
        addActorInfo();
        getActorInfo();
    });
});