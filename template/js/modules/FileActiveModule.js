export default function FileActiveModule() {


    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });

    if ($('.question').length) {
        $('.q-title').on('click', function () {
            $(this).parent().toggleClass('active');
            $(this).next('.q-content').slideToggle();
        });
    }

    if ($(window).width() < 768) {
        $('.home-intros .swiper').addClass('auto-height');
    }

    if ($('.bx-video').length) {
        let videos = document.querySelectorAll('.s-video');

        for (let video of videos) {
            video.onplay = function () {
                video.parentElement.classList.add('playing');
            }
            video.onpause = function () {
                video.parentElement.classList.remove('playing');
            }
        }
    }

    if ($('.vd-catalog')) {
        $('.v-title').on('click', function () {
            $(this).parent('.vd-item').toggleClass('active');
        });
    }


    if ($('.signup-login').length && $(window).width() <= 576) {
        $('.f-act .f-submit').appendTo('.f-act');

    }

}