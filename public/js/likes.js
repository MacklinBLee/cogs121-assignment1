/*$(document).ready(function() {

	console.log("lol works");
	// AJAX request
	$('#clickButton').click(function(){		
		// AJAX request
		console.log("works");
		$.get("/data", likes);
	});
});

function likes(result){
	console.log("HIT ID = "+currentEventId)

	// find current user
	var curr;
	for(var i = 0; i < result["logindata"].length; i++){
		// if current user then assign to curr
		if(result["logindata"][i].currentusr == "1"){
			$.post('/view/:id', { 'id': currentEventId, 'user':result["logindata"][i].username });
		}
	}
}
*/

(function($) {
    "use strict";
    /* TODO: Start your Javascript code here */
    var socket = io();
    $('#likes').click(function(e){
        e.preventDefault();
		console.log("lol works");
		$.get("/data", likes);
        //socket.emit('newsfeed', $('#user_input').val());
        //$('#user_input').val('');
    });
	function likes(result){
	   console.log(result);
	   $.post('/chat', {"likes": "1" })
	}
	
	
/*
    socket.on("newsfeed", function(data) {
        var parsedData;
        parsedData = JSON.parse(data);
        // grab and parse data and assign it to the parsedData variable.
        parsedData.posted = new Date(parsedData.posted);

        // other possible solution(s) here.
        $('#messages').prepend($('<li>').html(messageTemplate(parsedData)));

        function messageTemplate(parsedData) {
          // generate HTML text based on some data to be prepended into the list
            var result = '<div class="user">' +
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
    });*/

        
})($);