define(['comment', 'question'], function (comment, question) {
    function nav() {
        // $('.nav li a').click(function (e) {
            // e.preventDefault();
            // $('.main').hide(700);
            // $('head').find('link').eq(2).removeAttr('href');
            // var url = '../common/' + $(this).attr('href') + '.html';
            // var css = '../css/modules/' + $(this).attr('href') + '.css';
            // $('head').find('link').eq(2).attr('href', css);
            $('.load').show(10,function () {
                setTimeout(function () {
                    $('.load').fadeOut(500);
                    // $.get(url, function (data) {
                        // $('header').after(data);
                        $('.tab-item .title').click(function (e) {
                            // e.stopPropagation();
                            $(this).parent().addClass('active').find('.tab-item2').show(300, function () {
                                if ($(this).hasClass('comment')) {
                                    $(this).find('.comment-item').remove();
                                    comment();
                                }
                                if ($(this).hasClass('ask')) {
                                    $(this).find('.problem-info').remove()
                                    question();
                                }
                            });
                            $(this).parent().siblings().removeClass('active').find('.tab-item2').hide(300);
                        });
                    // });
                }, 500)
            });
            // $(this).parent().addClass('active');
            // $(this).parent().siblings().removeClass('active');
        // });

    };
    return nav;
});