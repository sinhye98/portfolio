function fnMove(seq){
    var offset = $("#content" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 600);
}

// btn 클릭하면 class추가
$(document).on("click", "button", function(e) {
e.preventDefault();
$(this).addClass("active").siblings().removeClass("active");

fnMove($(this).data("n"));

});
/* //헤더 누를시 이동 */

$btn.filter('.site_tag').mouseover(function() {
    $(this).find('.bg').stop().animate ({
        width: '100%'
    },100);
}).mouseout(function() {
    $(this).find('.bg').stop().animate({
        width: 0
    },200)
});