// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*
 * jQInstaPics
 * Created by: Abid Din - http://craftedpixelz.co.uk
 * Version: 1.0
 * Copyright: Crafted Pixelz
 * License: MIT license
 * Updated: 26th April 2013
*/

(function ($) {
    $.fn.jqinstapics = function (options) {

        // Defaults
        var defaults = {
            "user_id": null,
            "access_token": null,
            "count": 10
        };

        var o = $.extend(defaults, options);

        return this.each(function () {

          // Vars
          var elem = $(this),
              url = "https://api.instagram.com/v1/users/" + o.user_id + "/media/recent?access_token=" + o.access_token + "&count=" + o.count + "&callback=?";

            // Get the images
            $.getJSON(url, function(data){
                $.each(data.data, function (i, val) {
                    var li = $("<li/>").appendTo(elem),
                        a = $("<a/>", {"href": val.link, "target": "_blank"}).appendTo(li),
                        img = $("<img/>", {"src": val.images.thumbnail.url}).appendTo(a);

                    if (val.caption){
                        a.attr("title", val.caption.text);
                    }
                });
            });

            if(o.user_id == null || o.access_token == null){
              elem.append("<li>Please specify a User ID and Access Token, as outlined in the docs.</li>");
            }

        });
    };
})(jQuery);

$("#instagram").jqinstapics({
  "user_id": "3558165251",
  "access_token": "3558165251.674061d.ccf3b591242b45369f63226db9cfa067",
  "count": 28
});