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

    // Array to store submitted actor data in
    var actors = [];

    // Add Actor on Click Function
    $('#addActor').on('click', function () {
        var first = $('#first').val();
        var last = $('#last').val();
        var day = $('#day').val();
        var month = $('#month').val();
        var year = $('#year').val();
        var dob = month + "/" + day + "/" + year;
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
            
        $('#actors-list').append('<li><a href="#" class="info" data-actor-id=" + a + ">' + actor.first + " " + actor.last + '</a></li>');
        alert(JSON.stringify(actor));
    });

        function getActorInfo() {

            $('.info').click(function () {
                var index = $(this).data('actor-id');
                $('input[type=checkbox]').prop('checked', false);
                // remove delete button
                // remove update button

                updateButton = '<input type="button" id="updateButton" value="Update"/>';
                deleteButton = '<input type="button" id="deleteButton" value="Delete"/>';


            });
        }


});