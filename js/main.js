$(document).ready(() => {
    $(window).bind("mousewheel", (event, delta) => {
        return false;
    });
    const page = $(".page");
    let page_index = Math.round($(document).scrollTop() / page.height());
    let flag = 0;
    $(document).on("mousewheel", (event) => {
        if (flag) return;

        const delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? -1 : 1))
        const page_height = page.height()
        if (page_index + delta >= 0 && page_index + delta <= page.length - 1) {
            page_index += delta;
            $('html,body').animate({scrollTop: page_index * page_height}, 600);
            if (page_index === 0) {
                $(".page-bg0-top").addClass("jelly");
                $("#p0-left").addClass("po-left-a");
                $("#p0-right").addClass("po-right-a");
                setTimeout(() => {
                    $(".page-bg0-top").removeClass("jelly");
                    $("#p0-left").removeClass("po-left-a");
                    $("#p0-right").removeClass("po-right-a");
                }, 1200);
            } else {
                $("#p" + page_index + "-left").addClass("zoom-left");
                $("#p" + page_index + "-right").addClass("zoom-bottom");
                setTimeout(() => {
                    $("#p" + page_index + "-left").removeClass("zoom-left");
                    $("#p" + page_index + "-right").removeClass("zoom-bottom");
                }, 1200);
            }
            setTimeout(() => {
                flag = 0
            }, 1200);
            flag = 1;
        }
    });
    $(window).resize(() => {
        $('html,body').scrollTop(page_index * page.height());
    });
});