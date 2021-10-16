$(document).ready(function () {
    $("h1").css("text-align","center");
    $("h2").css("text-align","center");

    $('.myBannerHeading').toggleClass('myBannerHeading page-header');
    $('#yellowHeading').text("Yellow Team");

    $('#orangeHeading').next('ul').css("background-color","orange");
    $('#blueHeading').next('ul').css("background-color","blue");
    $('#redHeading').next('ul').css("background-color","red");
    $('#yellowHeading').next('ul').css("background-color","yellow");
    $('#yellowTeamList').append("<li>Joseph Banks</li><li>Simon Jones</li>");
    $('#oops').hide();
    $('#footerPlaceholder').remove();
    $('#footer').append("<p style='font-size:24px;font-family:monospace'> hatim hatim.joubair@gmail.com</p>");
    
});