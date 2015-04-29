$('#slide').click(function(){
    var hidden = $('.slider');
    if (hidden.hasClass('visible')){
        hidden.animate({"right":"-200px"}, "slow").removeClass('visible');
    } else {
        hidden.animate({"right":"0px"}, "slow").addClass('visible');
    }
});
$('#slide2').click(function(){
    var hidden = $('.slider');
    if (hidden.hasClass('visible')){
        hidden.animate({"right":"-150px"}, "fast").removeClass('visible');
    } else {
        hidden.animate({"right":"0px"}, "slow").addClass('visible');
    }
});

