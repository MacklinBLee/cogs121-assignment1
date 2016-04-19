(function($) {
    "use strict";
    /* TODO: Start your Javascript code here */
    var socket = io();
    $('#send_message').submit(function(e){
        e.preventDefault();
        socket.emit('newsfeed', $('#user_input').val());
        $('#user_input').val('');
    });

    var objDiv = document.getElementById("inner");
    objDiv.scrollTop = objDiv.scrollHeight;

    socket.on("newsfeed", function(data) {
        var parsedData;
        parsedData = JSON.parse(data);
        // grab and parse data and assign it to the parsedData variable.
        parsedData.posted = new Date(parsedData.posted);

       /* $(document).keypress(function(e){
            if(e.which == 13) {
                objDiv.scrollTop = objDiv.scrollHeight;
                //window.scrollTo(0,objDiv.scrollHeight);
                //alert('You pressed enter!');
            }
        });*/

        // other possible solution(s) here.
        $('#messages').append($('<li>').html(messageTemplate(parsedData)));

		objDiv = document.getElementById("inner");
        objDiv.scrollTop = objDiv.scrollHeight;
		
        function messageTemplate(parsedData) {
          // generate HTML text based on some data to be prepended into the list
            var result = '<hr><br><div class="user">' +
                '<div class="user-image">' +
                '<img src="' + parsedData.userPhoto + '" alt="">' +
                '</div>' +
                '<div class="user-info">' +
                '<span class="username">' + parsedData.user + '</span><br/>' +
                '<span class="posted">' + parsedData.posted + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="message-content">' +
                parsedData.message +
                '</div>';
            return result;
        }

    });
})($);

function minChat(){
  if(document.getElementById("minBtn").value == "1") {  
    document.getElementById("inner").style.width = "0px";
    document.getElementById("submitBtn").style.visibility = "hidden";
    document.getElementById("send_message").style.height = "0px";
    document.getElementById("send_message").style.border = "none";
    document.getElementById("gamePosition").style.width = "71%";
    document.getElementById("minBtn").innerHTML="Show Chat Box";
    document.getElementById("minBtn").value = "0";
  }
  else{
    document.getElementById("inner").style.width = "33%";
    document.getElementById("submitBtn").style.visibility = "visible";
    document.getElementById("send_message").style.height = "50px";
    document.getElementById("send_message").style.border = "none";
    document.getElementById("gamePosition").style.width = "45%";
    document.getElementById("minBtn").innerHTML="Hide Chat Box";
    document.getElementById("minBtn").value = "1";
  }
}
