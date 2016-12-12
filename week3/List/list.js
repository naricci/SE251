/**
 * Created by 001405200 on 10/19/2016.
 */
/*
window.onload = function () {
    document.getElementById('button').onclick = function () {
        var item = document.getElementById('item');
        if (item.value != "") {
            var list = document.getElementById('list');
            if (document.getElementsByTagName('ul')[0] === undefined ){
                ul = document.createElement('ul');
                list.appendChild(ul);
            }
            ul = document.getElementsByTagName('ul')[0];
            li = document.createElement('li');
            text = document.createTextNode( item.value );
            li.appendChild(text);
            // ul.appendChild(li);
            ul.insertBefore( li, ul.firstChild );
        }
    }
}
*/
$(function () {
   $('#button').click(function () {
       var item = $('#item').val();
       if ( item != "") {
           if ( $('ul').length === 0 ) {
               $('<ul></ul>').appendTo('#list');
           }
           $('<li>' + item + '</li>').appendTo('ul');
       }
   });
});
