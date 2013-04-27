;(function($, undefined) {
    $.fn.arbr = function(options) {
        var opts = $.extend({}, $.fn.arbr.defaults, options);
        $('head').append('<style>.arbr-deg0 {-webkit-transform: rotate(6deg); -moz-transform: rotate(6deg);} .arbr-deg1 {-webkit-transform: rotate(-3deg); -moz-transform: rotate(-3deg);}</style>');
        return this.each(function() {
            var $that = $(this);
            var str = $that.text();
            var strArray = str.split('');
            $that.text('');
            for(i=0; i<strArray.length; i++)  {
                $('<span>').css({'position':'relative', 'display':'inline-block'}).html(strArray[i]).appendTo($that);
            }
            $that.find('span').each(function() {
                var $span = $(this);
                var timer = setInterval(function() {
                    var angle = Math.floor(Math.random() * 2);
                    var x_pos = Math.floor(Math.random() * opts.move * 2) - opts.move;
                    var y_pos = Math.floor(Math.random() * opts.move * 2) - opts.move;
                    $span.css({
                        'top': y_pos,
                        'left': x_pos
                    });
                    $span.attr('class', 'arbr-deg' + angle)
                }, opts.interval);
            });
        });
    };
    $.fn.arbr.defaults = {
        interval: 100,
        move: 10
    };
})(jQuery);
