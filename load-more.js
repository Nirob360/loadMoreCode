// A $( document ).ready() block.
$(document).ready(function () {
    

    $(".main-load-box").slice(0, 3).show();

    $(".load-more-btn").on("click", function(){
        $(".main-load-box:hidden").slice(0, 3).slideDown()
        if ($(".main-load-box:hidden").length == 0) {
            $(".load-more-btn").fadeOut('slow');
        }
    })



});






