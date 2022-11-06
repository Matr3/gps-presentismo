$(document).ready(function() {
    $('#login').on('submit', function(e) {
        e.preventDefault();
            $.ajax({
                type: 'POST',
                dataType: "html",
                data: { 
                    user: $('#user').val(),
                    pass: $('#pass').val()
                      },
                url: 'php/login.php',
                success: function(data) {
                    console.log(data)
                }
            })
        })
    })

