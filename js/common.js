$(function () {
    const $gnb = $(".gnb > li");
    const $gnbSub = $(".gnb-sub");
    const duration = 250;

    $gnb.on("mouseenter", function () {
        $(this).find($gnbSub).stop().slideDown(duration);
    });

    $gnb.on("mouseleave", function () {
        $gnbSub.stop().slideUp(duration);
    });
});
