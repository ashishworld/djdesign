$(function () {

    $('#contactus_form').validator();

    $('#contactus_form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contactus_form').find('.messages').html(alertBox);
                        $('#contactus_form')[0].reset();
                        grecaptcha.reset();
                    }
                }
            });
            return false;
        }
    })
});