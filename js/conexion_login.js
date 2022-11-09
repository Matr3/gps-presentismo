$(document).ready(function() {
    $('#login').on('submit', function(e) {
        e.preventDefault();
        const usuario = $('#user').val();
        const password = $('#pass').val();
            $.ajax({
                type: 'POST',
                dataType: 'html',
                data: { 
                    user: usuario,
                    pass: password
                      },
                url: 'php/login.php',
                success: function(data) {
                    if(data == 'True'){
                       window.location.replace('./dashboard.html?user='+usuario);
                    }else{
                        console.log(data)
                    }
                }
            })
        })
    })

