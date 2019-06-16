$(function () {
    var $usertext = $('#usertext');
    var $msgarea = $('#msgarea');
    // var $yousaid=$('#yousaid');

    // $.ajax({
    //     type:'GET',
    //     url: '/messages',
    //     success: function(Message){
    //         $messages.append('<li>Message</li>');  
    //     }
    // })


    $('#sendbtn').on('click', function () {
        if ($('#usertext').val() != '') {
            $.ajax({
                type: 'POST',
                url: '/messages',
                data: {
                    message: $usertext.val()
                },
                success: function (response) {
                    console.log(response)

                    $msgarea.append('<p id="right"><b>User</b>:' + response.reply+'</p>');
                    
                    myresponses(response.reply);

                    $msgarea.append('<p id="left"><b>Bot</b>:' + myresponses(response.reply)+'</p>');
                   

                },
                error: function (error) {
                    alert('error saving message');
                }



            })
            $('#usertext').val("");
        }
        else {
            alert("No input");
        }
    });
});

function ifEnter(){
    if (event.keyCode == 13) 
                document.getElementById('sendbtn').click();
}