jQuery(function() {

    var minimized_elements = $('p.minimize');

    minimized_elements.each(function() {
        var t = $(this).text();
        if (t.length < 100) return;

        $(this).html(
            t.slice(0, 100) + '<span>...</span><a href="#" class="more">Leer más...</a>' +
            '<span style="display:none;">' + t.slice(100, t.length) + ' <a href="#" class="less">Leer menos...</a></span>'
        );

    });

    $('a.more', minimized_elements).click(function(event) {
        event.preventDefault();
        $(this).hide().prev().hide();
        $(this).next().show();
        
    });

    $('a.less', minimized_elements).click(function(event) {
        event.preventDefault();
        $(this).parent().hide().prev().show().prev().show();
    });

});