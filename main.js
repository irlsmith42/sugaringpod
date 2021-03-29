$(document).ready(function(){

  $(function(){
    var note = $('#note'),
    ts = new Date(2021, 7, 1);
    
    $('#countdown').countdown({
    timestamp : ts,
    callback : function(days, hours, minutes, seconds){
    
    var message = "Premiere in ";
    message += days + " day" + ( days==1 ? '':'s' ) + " : ";
    message += hours + " hour" + ( hours==1 ? '':'s' ) + " ";
    message += " ";
    note.html(message);
    }
    });
    
    });

})

console.log(note)
