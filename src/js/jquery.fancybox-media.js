(function ($) { "use strict"; var F = $.fancybox, format = function (url, rez, params) { params = params || ''; if ($.type(params) === "object") { params = $.param(params, true); } $.each(rez, function (key, value) { url = url.replace('$' + key, value || ''); }); if (params.length) { url += (url.indexOf('?') > 0 ? '&' : '?') + params; } return url; }; F.helpers.media = { defaults: { youtube: { matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i, params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: 'opaque', enablejsapi: 1 }, type: 'iframe', url: '//www.youtube.com/embed/$3' }, vimeo: { matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, type: 'iframe', url: '//player.vimeo.com/video/$1' }, metacafe: { matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/, params: { autoPlay: 'yes' }, type: 'swf', url: function (rez, params, obj) { obj.swf.flashVars = 'playerVars=' + $.param(params, true); return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf'; } }, dailymotion: { matcher: /dailymotion.com\/video\/(.*)\/?(.*)/, params: { additionalInfos: 0, autoStart: 1 }, type: 'swf', url: '//www.dailymotion.com/swf/video/$1' }, twitvid: { matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i, params: { autoplay: 0 }, type: 'iframe', url: '//www.twitvid.com/embed.php?guid=$1' }, twitpic: { matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i, type: 'image', url: '//twitpic.com/show/full/$1/' }, instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: 'image', url: '//$1/p/$2/media/?size=l' }, google_maps: { matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i, type: 'iframe', url: function (rez) { return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed'); } } }, beforeLoad: function (opts, obj) { var url = obj.href || '', type = false, what, item, rez, params; for (what in opts) { if (opts.hasOwnProperty(what)) { item = opts[what]; rez = url.match(item.matcher); if (rez) { type = item.type; params = $.extend(true, {}, item.params, obj[what] || ($.isPlainObject(opts[what]) ? opts[what].params : null)); url = $.type(item.url) === "function" ? item.url.call(this, rez, params, obj) : format(item.url, rez, params); break; } } } if (type) { obj.href = url; obj.type = type; obj.autoHeight = false; } } }; }(jQuery));



/*!
* Buttons helper for fancyBox
* version: 1.0.5 (Mon, 15 Oct 2012)
* @requires fancyBox v2.0 or later
*
* Usage:
*     $(".fancybox").fancybox({
*         helpers : {
*             buttons: {
*                 position : 'top'
*             }
*         }
*     });
*
*/
(function ($) {
    //Shortcut for fancyBox object
    var F = $.fancybox;

    //Add helper object
    F.helpers.buttons = {
        defaults: {
            skipSingle: true, // disables if gallery contains single image
            position: 'top', // 'top' or 'bottom'
            tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();"></a></li></ul></div>'
        },

        list: null,
        buttons: null,

        beforeLoad: function (opts, obj) {
            //Remove self if gallery do not have at least two items

            if (opts.skipSingle && obj.group.length < 2) {
                obj.helpers.buttons = false;
                obj.closeBtn = true;

                return;
            }

            //Increase top margin to give space for buttons
            obj.margin[opts.position === 'bottom' ? 2 : 0] += 35;
        },

        onPlayStart: function () {
            if (this.buttons) {
                this.buttons.play.attr('title', 'Pause slideshow').addClass('btnPlayOn');
            }
        },

        onPlayEnd: function () {
            if (this.buttons) {
                this.buttons.play.attr('title', 'Start slideshow').removeClass('btnPlayOn');
            }
        },

        afterShow: function (opts, obj) {
            var buttons = this.buttons;

            if (!buttons) {
                this.list = $(opts.tpl).addClass(opts.position).appendTo('body');

                buttons = {
                    prev: this.list.find('.btnPrev').click(F.prev),
                    next: this.list.find('.btnNext').click(F.next),
                    play: this.list.find('.btnPlay').click(F.play),
                    toggle: this.list.find('.btnToggle').click(F.toggle)
                }
            }

            //Prev
            if (obj.index > 0 || obj.loop) {
                buttons.prev.removeClass('btnDisabled');
            } else {
                buttons.prev.addClass('btnDisabled');
            }

            //Next / Play
            if (obj.loop || obj.index < obj.group.length - 1) {
                buttons.next.removeClass('btnDisabled');
                buttons.play.removeClass('btnDisabled');

            } else {
                buttons.next.addClass('btnDisabled');
                buttons.play.addClass('btnDisabled');
            }

            this.buttons = buttons;

            this.onUpdate(opts, obj);
        },

        onUpdate: function (opts, obj) {
            var toggle;

            if (!this.buttons) {
                return;
            }

            toggle = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');

            //Size toggle button
            if (obj.canShrink) {
                toggle.addClass('btnToggleOn');

            } else if (!obj.canExpand) {
                toggle.addClass('btnDisabled');
            }
        },

        beforeClose: function () {
            if (this.list) {
                this.list.remove();
            }

            this.list = null;
            this.buttons = null;
        }
    };

}(jQuery));