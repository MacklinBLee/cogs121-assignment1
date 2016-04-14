(function($) {
    "use strict";
    /* TODO: Start your Javascript code here */
    var socket = io();
    $('#send_message').submit(function(e){
        e.preventDefault();
        socket.emit('newsfeed', $('#user_input').val());
        $('#user_input').val('');
    });

    socket.on("newsfeed", function(data) {
        var parsedData;
        parsedData = JSON.parse(data);
        // grab and parse data and assign it to the parsedData variable.
        parsedData.posted = new Date(parsedData.posted);

        // other possible solution(s) here.
        $('#messages').append($('<li>').html(messageTemplate(parsedData)));

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
