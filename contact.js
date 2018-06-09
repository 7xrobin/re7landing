$(document).ready(function() {
    $("#contact").submit(function(event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "/contact.php",
            data: {
                "name": $("#name").val(),
                "email": $("#email").val(),
                "interest-user": $("input[name='interest-user']").is(":checked"),
                "interest-partner": $("input[name='interest-partner']").is(":checked"),
                "comment": $("#comment").val(),
            },
            success: function() {
                console.log("Contact saved.");
                $("#contact").css("background-color", "green");
            },
            fail: function() {
                console.log("Failed to save contact.");
                $("#contact").css("background-color", "red");
            }
        });
    });
})
