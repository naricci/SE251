var actors = [];
var result;
var i = 0;
var a = 0;

function addActor() {

    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var DOB = $('#day').val();
    DOB += '/' + $('#month').val();
    DOB += '/' + $('#year').val();
    var gender = $('input[type=radio]:checked').val();
    var genre = [];
    $('input[type=checkbox]:checked').each(function () {
        genre.push($(this).val());
    });
    var actor = {};
    actor.firstName = firstName;
    actor.lastName = lastName;
    actor.DOB = DOB;
    actor.gender = gender;
    actor.genre = genre;

    var str = JSON.stringify(actor);

    $.ajax({
        type:"POST",
        url: "addActor.php"  ,
        data: {data: str},
        success: function(data){
            console.log('success', data);
        }
    });
}
function getActor(){
    $.getJSON( 'getActor.php', function( data ) {
        var items = [];
        var index=0;
        var tbl = "";
        $.each( data, function( key, val ) {

            tbl += ("<tr><td>"+data[index].firstName+"</td><td>"+data[index].lastName+"</td><td><input class='list' data-q_id=" + index + "  type=button value='?'</td></tr>" );
            index++;

        });

        $(tbl).appendTo( "#actorTable" );

        $('.list').on('click', function(){
            clearValues();
            var number = $(this).data('q_id');

            var edit = confirm("First name: "+data[number].firstName +"\nLast name: "+data[number].lastName+"\nDOB: "+data[number].DOB +"\nGender: "+data[number].gender+"\nGenre: "+data[number].genre+"\n\nWould you like to edit actor?")

            if (edit == true) {
                $('#addActor').remove();
                $('#deleteActor').remove();
                $('#updateActor').remove();

                $('#firstName').val(data[number].firstName);
                $('#lastName').val(data[number].lastName);
                splitDate = [];
                splitDate = data[number].DOB.split('/');
                $('#day').val(splitDate[0]);
                $('#month').val(splitDate[1]);
                $('#year').val(splitDate[2]);

                $('input[type=radio][value=' + data[number].gender + ']').prop('checked', true);

                for (i = 0; i < data[number].genre.length; i++) {
                    $('input[type=checkbox][value=' + data[number].genre[i] + ']').prop('checked', true);
                }
                console.log(data[number].genre);

                var updateButton = "<input type='button' id='updateActor' value='Update' /> ";
                var deleteButton = "<input type='button' id='deleteActor' value='Delete' /> ";

                $('#actorsForm').append(updateButton, deleteButton);

                $('#deleteActor').on('click', function () {
                    actor = {};

                    actor.firstName = data[number].firstName;
                    actor.lastName = data[number].lastName;

                    var str = JSON.stringify(actor);

                    $.ajax({
                        type: "POST",
                        url: "deleteActor.php",
                        data: {data: str},
                        success: function (data) {
                            console.log('success', data);
                        }
                    });

                    $('#deleteActor').remove();
                    $('#updateActor').remove();
                    clearValues();
                    location.reload();

                });

                $('#updateActor').on('click', function () {

                    var firstName = $('#firstName').val();
                    var lastName = $('#lastName').val();
                    var DOB = $('#day').val();
                    DOB += '/' + $('#month').val();
                    DOB += '/' + $('#year').val();
                    var gender = $('input[type=radio]:checked').val();
                    var genre = [];
                    $('input[type=checkbox]:checked').each(function () {
                        genre.push($(this).val());
                    });

                    actor = {};
                    actor.id = data[number].id;
                    actor.firstName = firstName;
                    actor.lastName = lastName;
                    actor.DOB = DOB;
                    actor.gender = gender;
                    actor.genre = genre;

                    var str = JSON.stringify(actor);

                    $.ajax({
                        type: "POST",
                        url: "updateActor.php",
                        data: {data: str},
                        success: function (data) {
                            // console.log('success', data);
                        }

                    });

                    $('#deleteActor').remove();
                    $('#updateActor').remove();
                    clearValues();
                    location.reload();
                });
            }
        });
    });


}

function clearValues(){

    $('#firstName').val("");
    $('#lastName').val("");
    $('input[type=radio]').prop('checked',false);
    $('input[type=checkbox]').prop('checked', false);
}

function validActor(){

    var result = true;

    if($('#firstName').val() == '') {

        alert('Cannot leave first name field blank');
        result = false;
    }
    if($('#lastName').val() == ''){

        alert('Cannot leave last name field blank');
        result = false;
    }

    if(!$("input[name='gender']").is(":checked")) {
        alert('Cannot leave gender field blank');
        result = false;
    }

    if(!$("input[name='genre']").is(":checked")){
        alert('Cannot leave genre field blank');
        result = false;
    }
    return result;
}

$(function () {
    getActor();

    $('select').material_select();

    $('#addActor').on('click', function() {

        if (validActor()){
            addActor();
            $("tr").empty();
            location.reload();
        }
    });
});




