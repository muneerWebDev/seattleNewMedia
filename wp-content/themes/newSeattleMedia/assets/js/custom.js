jQuery(document).ready(function () {

    jQuery(window).on('load', function () {
       

        setTimeout(function () {
            getDynamicDimensions();
            navMenu();
            mouseCursor();
            jQuery("body").addClass("loaded");
        }, 300);
    })
});


function getDynamicDimensions() {
    //getting values
    var containerOffset = jQuery(".container").offset().left;
    var siteHeaderHeight = jQuery(".siteHeader").innerHeight();

    //setting values
    jQuery("body").css({
        "--containerOffset": containerOffset + 'px',
        "--navbarHeight": siteHeaderHeight + 'px'
    });

    //change values on resize
    jQuery(window).resize(function () {
        getDynamicDimensions();
    });
}


function navMenu() {

    // if (jQuery(window).width() > 1279) {
    jQuery("#navTrigger").click(function () {
        jQuery(this).find(".hamburger").toggleClass("change").parents("body").toggleClass("navbarOpen");
    })

    jQuery("#navTrigger").mouseenter(function () {
        jQuery(".mouseCursor").addClass("onNavButton");
    });

    jQuery("#navTrigger").mouseleave(function () {
        jQuery(".mouseCursor").removeClass("onNavButton");
    });
    // }
}

function mouseCursor() {
    // if (jQuery(window).width() > 1279) {
    jQuery("body").append("<span class='mouseCursor'></span>");

    var xMousePos = 0;
    var yMousePos = 0;
    var lastScrolledLeft = 0;
    var lastScrolledTop = 0;

    jQuery(document).mousemove(function (event) {
        xMousePos = event.pageX;
        yMousePos = event.pageY;

        jQuery(".mouseCursor").removeClass("inactive");
        jQuery(".mouseCursor").css({
            transform: "translate(" + xMousePos + "px," + (yMousePos - jQuery(window).scrollTop()) + "px)"
        });
    })

    jQuery(window).scroll(function (event) {
        if (lastScrolledLeft != jQuery(document).scrollLeft()) {
            xMousePos -= lastScrolledLeft;
            lastScrolledLeft = jQuery(document).scrollLeft();
            xMousePos += lastScrolledLeft;
        }
        if (lastScrolledTop != jQuery(document).scrollTop()) {
            yMousePos -= lastScrolledTop;
            lastScrolledTop = jQuery(document).scrollTop();
            yMousePos += lastScrolledTop;
        }

        jQuery(".mouseCursor").removeClass("inactive");

        jQuery(".mouseCursor").css({
            transform: "translate(" + xMousePos + "px," + (yMousePos - jQuery(window).scrollTop()) + "px)"
        });

    });

    jQuery(document).mouseout(function () {
        jQuery(".mouseCursor").addClass("inactive");
    });


    //next case button cursor contol
    jQuery("#sitefooter").mouseenter(function () {
        jQuery(".mouseCursor").addClass("onSiteFooter");
    });

    jQuery("#sitefooter").mouseleave(function () {
        jQuery(".mouseCursor").removeClass("onSiteFooter");
    });

    //footer cursor contol
    jQuery(".next-case .btn").mouseenter(function () {
        jQuery(".mouseCursor").addClass("onNext-case");
    });

    jQuery(".next-case .btn").mouseleave(function () {
        jQuery(".mouseCursor").removeClass("onNext-case");
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