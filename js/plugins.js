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
 * Updated: 1st January 2012
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
                        img = $("<img/>", {"src": val.images.standard_resolution.url, "class":"instapic"}).appendTo(li);

                    img.click(function() {
                      $('#lightbox').addClass('active');
                      $('#lightbox .lbox').remove();
                      $("<img/>", {"src": val.images.standard_resolution.url, "class":"lbox"}).appendTo('#lightbox');
                    });
                    $('#lightbox').click(function() {
                      $(this).removeClass('active');
                      $('#lightbox .lbox').remove();
                    });
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
  "access_token": "3558165251.1677ed0.8b081b47419846e082ca69beed0b2c6f",
  "count": 20
});