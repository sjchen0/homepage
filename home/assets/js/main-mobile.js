jQuery(window).on('load', function() {
    "use strict";

    // HIDE PRELOADER
    $(".preloader").addClass("hide-preloader");   
    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function(){
        $("#intro .animation-container").each(function() {
            var e = $(this);
            setTimeout(function(){
                e.addClass("run-animation");
            }, e.data("animation-delay") );
        });
    }, 700 );
});


jQuery(document).ready(function($) {
	"use strict";
    var mobileDevice = true;

    if(/(Android|webOS|iPhone|iPad|iPod|BlackBerry)/i.test(navigator.userAgent)) {
        // alert("You are using mobile devices.");
    }else{
        // alert("You are using desktop devices.");
        mobileDevice = false;
        document.getElementById('css-main').href = "assets/css/main.css";
    }

    // ADJUST OPACITY FOR BRIGHT SHOWCASES
    var showcase_item = $("#ode-info");
    showcase_item.css({"background": "rgba(0,0,0,0.35)"});

    // SMOOTH SCROLL FOR SAME PAGE LINKS
    $(document).on('click', 'a.smooth-scroll', function(event) {   
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 80
        }, 500); 
    });

    // SCROLL REVEAL SETUP
    window.sr = ScrollReveal();
    sr.reveal(".scroll-animated-from-right", { 
        duration: 600,
        delay: 0,
        origin: "right",
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        distance: "20vh",
        viewFactor: 0.4,
        scale: 1,
    });
    
    // SIMULATE HOVER ON TOUCHSCREEN
    // alert(mobileDevice);
    if(mobileDevice){
        setInterval(function(){
            var upper_bound = 0.7 * $(window).height();
            var lower_bound = 0.0 * $(window).height();

            var info = $("#research .showcase .item .info");
            var info_h5 = $("#research .showcase .item .info .container-mid h5");
            var info_p = $("#research .showcase .item .info .container-mid p");
            var view_offset = info.offset().top - $(window).scrollTop();

            // GO TO HOVER
            if(view_offset > lower_bound && view_offset < upper_bound) {
                info.css({"width": "100%"});
                info_h5.css({
                    "-webkit-transition": ".2s ease .2s",
                    "-o-transition":      ".2s ease .2s",
                    "transition":         ".2s ease .2s",
                    "-webkit-transform":  "translateX(0)",
                    "-ms-transform":      "translateX(0)",
                    "transform":          "translateX(0)",
                    "opacity":            "1"
                });
                info_p.css({
                    "-webkit-transition": ".2s ease .3s",
                    "-o-transition":      ".2s ease .3s",
                    "transition":         ".2s ease .3s",
                    "-webkit-transform":  "translateX(0)",
                    "-ms-transform":      "translateX(0)",
                    "transform":          "translateX(0)",
                    "opacity":            "1"
                });
            }
            // GO FROM HOVER
            else {
                info.css({"width": "0%"});
                info_h5.css({
                    "-webkit-transition": "",
                    "-o-transition":      "",
                    "transition":         "",
                    "-webkit-transform":  "translateX(4vh)",
                    "-ms-transform":      "translateX(4vh)",
                    "transform":          "translateX(4vh)",
                    "opacity":            "0"
                });
                info_p.css({
                    "-webkit-transition": "",
                    "-o-transition":      "",
                    "transition":         "",
                    "-webkit-transform":  "translateX(4vh)",
                    "-ms-transform":      "translateX(4vh)",
                    "transform":          "translateX(4vh)",
                    "opacity":            "0"
                });
            }

            var notes_info = $("#notes .showcase .item .info");
            var notes_info_h5 = $("#notes .showcase .item .info .container-mid h5");
            var notes_info_p = $("#notes .showcase .item .info .container-mid p");
            var notes_view_offset = notes_info.offset().top - $(window).scrollTop();
            
            // GO TO HOVER
            if(notes_view_offset > lower_bound && notes_view_offset < upper_bound) {
                notes_info.css({"width": "100%"});
                notes_info_h5.css({
                    "-webkit-transition": ".2s ease .2s",
                    "-o-transition":      ".2s ease .2s",
                    "transition":         ".2s ease .2s",
                    "-webkit-transform":  "translateX(0)",
                    "-ms-transform":      "translateX(0)",
                    "transform":          "translateX(0)",
                    "opacity":            "1"
                });
                notes_info_p.css({
                    "-webkit-transition": ".2s ease .3s",
                    "-o-transition":      ".2s ease .3s",
                    "transition":         ".2s ease .3s",
                    "-webkit-transform":  "translateX(0)",
                    "-ms-transform":      "translateX(0)",
                    "transform":          "translateX(0)",
                    "opacity":            "1"
                });
            }
            // GO FROM HOVER
            else {
                notes_info.css({"width": "0%"});
                notes_info_h5.css({
                    "-webkit-transition": "",
                    "-o-transition":      "",
                    "transition":         "",
                    "-webkit-transform":  "translateX(4vh)",
                    "-ms-transform":      "translateX(4vh)",
                    "transform":          "translateX(4vh)",
                    "opacity":            "0"
                });
                notes_info_p.css({
                    "-webkit-transition": "",
                    "-o-transition":      "",
                    "transition":         "",
                    "-webkit-transform":  "translateX(4vh)",
                    "-ms-transform":      "translateX(4vh)",
                    "transform":          "translateX(4vh)",
                    "opacity":            "0"
                });
            }


        }, 100);
    }

    // AJAX CONTACT FORM SUBMIT
    $("#contact-form").submit(function(e) {
        e.preventDefault();
        var postdata = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "assets/php/contact.php",
            data: postdata,
            dataType: "json",
            success: function(json) {
                $("#contact-form input, #contact-form textarea").removeClass("error");
                setTimeout(function(){
                    if (json.nameMessage !== "") {
                        $("#contact-form-name").addClass("error");
                    }
                    if (json.emailMessage !== "") {
                        $("#contact-form-email").addClass("error");
                    }
                    if (json.messageMessage !== "") {
                        $("#contact-form-message").addClass("error");
                    }
                }, 10);
                if (json.nameMessage === "" && json.emailMessage === "" && json.messageMessage === "") {
                    $("#contact-form.error input, #contact-form.error textarea").removeClass("error");
                    $('#contact-form').addClass("success");
                    $('#contact-form textarea, #contact-form input').attr("placeholder","");
                    $('#contact-form input, #contact-form button, #contact-form textarea').val('').prop('disabled', true);
                }
            }
        });
    });
});
