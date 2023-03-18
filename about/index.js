$(document).ready(function () {

    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addclass("sticky");
        } else {
            $('.navbar').removeclass("sticky");
        }

    });


    $('.menu-btn').click(function () {

        $('.navbar.menu').toggleclass("active");
        $('menu-btn i').toggleclass("active");
    });





    $('.carousel').owlcarousel({

    });
});

var typed = new Typed(".typing-2", {
    strings: ["Developer", "blogger", "freelancer"],
    typedspeed: 100,
    backspeed: 100,
    loop: true
});

// var typed = new Typed(".typing-2", {
//     strings: ["Developer", "blogger", "freelancer"],
//     typedspeed: 100,
//     backspeed: 100,
//     loop: true
// });