$('#menuList li').click(function(e){
 e.preventDefault(); //Remove this in your main code
    $('#menuList li').removeClass("active");
    $(this).addClass("active");
});
