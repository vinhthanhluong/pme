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
}