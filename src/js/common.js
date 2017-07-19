require(['jquery', 'tem', 'index'], function ($, tem, index) {
    var pageConfig = {
        index: {
            css: 'css/modules/index.css',
            component: tem('index', {})
        },
        shiwan: {
            css: 'css/modules/shiwan.css',
            component: tem('shiwan', {})
        },
        about: {
            css: 'css/modules/about.css',
            component: tem('about', {})
        },
        share: {
            css: 'css/modules/share.css',
            component: tem('share', {})
        },
        buy: {
            css: 'css/modules/buy.css',
            component: tem('buy', {})
        },
        ensure: {
            css: 'css/modules/ensure.css',
            component: tem('ensure', {})
        },
    };

    render('index')

    function render(key) {
        var component = pageConfig[key].component;
        // var link = $('<link rel="stylesheet" href="' + pageConfig[key].css + '">')
        // $('head').append(link);
        $('.main').html(component);
    }

    $('.nav li a').on('click', function () {
        $('.change').removeAttr('href')
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        var href = $(this).attr('href').substr(1);
        var css='css/modules/' + href + '.css';
        $('.change').attr('href',css);
        render(href);
        index();
    });

  $('.logo a').on('click', function () {
      var css='css/modules/' + $(this).attr('href').substr(1) + '.css';
             $('.change').attr('href',css);
            render('index')
        $('.load').show(10, function () {
        setTimeout(function () {
            $('.load').fadeOut(600);           
        }, 500)
    });
    });
   
});