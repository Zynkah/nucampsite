$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    });

    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });

    $('#reserveButton').click('shown.bs.modal', function() {
    $('#reserveModal').modal('show')
    });

    $('#loginButton').click('shown.bs.modal', function() {
    $('#loginModal').modal('show')
    });
