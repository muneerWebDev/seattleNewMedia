$(document).ready(function () {
    navMenu();
    mouseCursor();
    $(window).load(function () {
        mouseCursor();
    })
});

function navMenu() {

    $("#navTrigger").click(function () {
        $(this).find(".hamburger").toggleClass("change").parents("body").toggleClass("navbarOpen");
    })
}

function mouseCursor() {
    $("body").append("<span class='mouseCursor'></span>");

    var xMousePos = 0;
    var yMousePos = 0;
    var lastScrolledLeft = 0;
    var lastScrolledTop = 0;

    $(document).mousemove(function (event) {
        xMousePos = event.pageX;
        yMousePos = event.pageY;

        $(".mouseCursor").css({
            transform: "translate(" + xMousePos + "px," + (yMousePos - $(window).scrollTop()) + "px)"
        });
    })

    $(window).scroll(function (event) {
        if (lastScrolledLeft != $(document).scrollLeft()) {
            xMousePos -= lastScrolledLeft;
            lastScrolledLeft = $(document).scrollLeft();
            xMousePos += lastScrolledLeft;
        }
        if (lastScrolledTop != $(document).scrollTop()) {
            yMousePos -= lastScrolledTop;
            lastScrolledTop = $(document).scrollTop();
            yMousePos += lastScrolledTop;
        }
        
        $(".mouseCursor").css({
            transform: "translate(" + xMousePos + "px," + (yMousePos - $(window).scrollTop()) + "px)"
        });

    });

    //scroll

    (function () {
        var scroll = new LocomotiveScroll();
    })();
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".page-wrap"),
        smooth: true,
        getDirection: true
    });
}