var scroll;
var locoScroll;

var containerOffset;
var headerContainerOffset;
var siteHeaderHeight;
var siteFooterHeight;
var worksListingIntroHeight;

jQuery(document).ready(function () {

    jQuery(window).on('load', function () {
        setTimeout(function () {
            getDynamicDimensions();
            navMenu();
            mouseCursor();
            jQuery("body").addClass("loaded");
            tabFilters();
        }, 300);

        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 1000);  
    })
    simpleReadmore();
});


function getDynamicDimensions() {
    //getting values
    containerOffset = jQuery(".container").offset().left;
    headerContainerOffset = jQuery(".header-container").offset().left;
    siteHeaderHeight = jQuery(".siteHeader").innerHeight();
    siteFooterHeight = jQuery("#sitefooter").innerHeight();
    worksListingIntroHeight = jQuery(".work-listing-page .intro .column").innerHeight();
    //setting values
    jQuery("body").css({
        "--containerOffset": containerOffset + 'px',
        "--headerContainerOffset": headerContainerOffset + 'px',
        "--navbarHeight": siteHeaderHeight + 'px',
        "--siteFooterHeight": siteFooterHeight + 'px',
        "--worksListingIntroHeight": worksListingIntroHeight + 'px'
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
        scroll = new LocomotiveScroll();
    })();

    locoScroll = new LocomotiveScroll({
        el: document.querySelector(".page-wrap"),
        smooth: true,
        getDirection: true
    });

    var lastScrollTop = 0;
    locoScroll.on('scroll', (position) => {
        if ((position.scroll.y) > 50) {
            document.querySelector('body').classList.add('scrolled');

        } else {
            document.querySelector('body').classList.remove('scrolled');
        }

        var st = position.scroll.y;
        if (st > lastScrollTop) {
            // downscroll code
            jQuery("body").addClass("hideNav");
        } else {
            // upscroll
            jQuery("body").removeClass("hideNav");
        }
        lastScrollTop = st;

    });


}

//tabFilters
var tabTemp;
var firstClick = false;

function tabFilters() {
    jQuery(".tabs .tab-item").click(function () {


        var tabTarget = jQuery(this).attr("tabTarget");
        var tabGroup = jQuery(this).attr("tabGroup");

        //tab buttons toggle
        jQuery("[tabTarget|='" + tabTarget + "'").removeClass("active");
        jQuery(this).addClass("active");

        //storing tab contents to variable
        if (!firstClick) {
            tabTemp = jQuery("[tabContent|='" + tabTarget + "']").clone();
            firstClick = true;
            console.log("first");
        }
        jQuery("[tabContentContainer|='" + tabTarget + "-container'").html("");

        //filtering contents
        if (tabGroup == 'all') {

            jQuery(tabTemp).each(function (i, e) {
                jQuery(e).appendTo("[tabContentContainer|='" + tabTarget + "-container'");
            })

        } else {
            jQuery(tabTemp).each(function (i, e) {
                if (jQuery(e).attr("tabGroup") == tabGroup) {
                    jQuery(e).appendTo("[tabContentContainer|='" + tabTarget + "-container'");
                }
            })

        }

        //fixing imges parallax issue after filtering by faking a window resize
        window.dispatchEvent(new Event('resize'));
    });
}

function simpleReadmore(){
    jQuery(".show_hide").click(function(){
        if(jQuery(this).hasClass("toggle-text")){
            if(jQuery(this).text()=='read more'){
                jQuery(this).text("read less")
            }else{
                jQuery(this).text("read more")
            }
        }
        jQuery(this).siblings(".more-content").slideToggle(function(){
            window.dispatchEvent(new Event('resize'));
        });
    })
}