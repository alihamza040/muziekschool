

$(document).ready(function () {
    $.ajax({
        url: '\log_1.html',
        success: function (data) {
            $('#divResult').html(data);
            $(".box-2, .box-3").accordion({
                collapsible: true,
                heightStyle: "content"
            });


            document.getElementById("divResult").style.border = "black 1px solid";
            document.getElementById("divResult").style.boxShadow = "0px 5px 9px 5px rgba(0,0,0,0.3)";

        },
        error: function () {
            $('#divResult').append('FOUT: er is iets fout gegaan!')
        }
    });
});


