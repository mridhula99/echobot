$(function() {
    var $msg=$('#msg');
    var $messages=$('#messages');
    
    // $.ajax({
    //     type:'GET',
    //     url: '/messages',
    //     success: function(Message){
    //         $messages.append('<li>Message</li>');  
    //     }
    // })
   
               
    $('#send').on('click', function() {
        if($('#msg').val() != '') {
        $.ajax({
            type:'POST',
            url: '/messages',
            data: {
                message: $msg.val()
            },
            success: function(response) {
                console.log(response)
                $messages.append('<br>'+ response.reply);
            },
            error: function(error) {
                alert('error saving message');
            } 
        
            

        })
        $('#msg').val("");
    }
    else {
        alert("No input");
    }

    });
    

});
