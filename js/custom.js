$(document).ready(function () {
    getDynamicDimensions();
    navMenu();
    mouseCursor();
    $(window).load(function () {
        mouseCursor();
    })
    setTimeout(function(){  mouseCursor(); }, 1000);
});


function getDynamicDimensions() {
    //getting values
    var containerOffset = $(".container").offset().left;
    var siteHeaderHeight = $(".siteHeader").innerHeight();

    //setting values
    $("body").css({
        "--containerOffset": containerOffset + 'px',
        "--navbarHeight": siteHeaderHeight + 'px'
    });

    //change values on resize
    $(window).resize(function () {
        getDynamicDimensions();
    });
}


function navMenu() {

    // if ($(window).width() > 1279) {
        $("#navTrigger").click(function () {
            $(this).find(".hamburger").toggleClass("change").parents("body").toggleClass("navbarOpen");
        })

        $("#navTrigger").mouseenter(function () {
            $(".mouseCursor").addClass("onNavButton");
        });

        $("#navTrigger").mouseleave(function () {
            $(".mouseCursor").removeClass("onNavButton");
        });
    // }
}

function mouseCursor() {
    // if ($(window).width() > 1279) {
        $("body").append("<span class='mouseCursor'></span>");

        var xMousePos = 0;
        var yMousePos = 0;
        var lastScrolledLeft = 0;
        var lastScrolledTop = 0;

        $(document).mousemove(function (event) {
            xMousePos = event.pageX;
            yMousePos = event.pageY;

            $(".mouseCursor").removeClass("inactive");
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

            $(".mouseCursor").removeClass("inactive");

            $(".mouseCursor").css({
                transform: "translate(" + xMousePos + "px," + (yMousePos - $(window).scrollTop()) + "px)"
            });

        });

        $(document).mouseout(function () {
            $(".mouseCursor").addClass("inactive");
        });


        //next case button cursor contol
        $("#sitefooter").mouseenter(function () {
            $(".mouseCursor").addClass("onSiteFooter");
        });

        $("#sitefooter").mouseleave(function () {
            $(".mouseCursor").removeClass("onSiteFooter");
        });

        //footer cursor contol
        $(".next-case .btn").mouseenter(function () {
            $(".mouseCursor").addClass("onNext-case");
        });

        $(".next-case .btn").mouseleave(function () {
            $(".mouseCursor").removeClass("onNext-case");
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
    // }
}