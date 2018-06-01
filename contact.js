$(document).ready(function() {
    $("#contact").submit(function(event) {
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: "/contact.php",
            data: {
                name: $("#name").val(),
                email: $("#email").val()
            },
            success: function() {
                $("#contact").css("background-color", "green");
            },
            fail: function() {
                $("#contact").css("background-color", "red");
            }
        });
    });
})
