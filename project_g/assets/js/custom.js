(function($) {

    "use strict";

    // preloader_4
    // header_4
    // header_4 搜尋框
    // WOW JS
    // footer_4
    // index_4_1(首頁輪播)
    // index_4_2(首頁展覽輪播)
    // index_4_3(首頁產品輪播)
    // index_4_4(線條動畫)
    // contact_4(select換顏色)
    // exhibition_4(展覽品輪播)


    /* -----------------------------------------------------------------------
       preloader_4
       ----------------------------------------------------------------------- */

    // Preloader

    if ($('.preloader_4').length) {
        function stylePreloader() {
            $('body').addClass('preloader-deactive');
        }

        $(window).on('load', function() {
            stylePreloader();
        });
    }


    /* -----------------------------------------------------------------------
       header_4
       ----------------------------------------------------------------------- */

    if ($('.header_4').length) {
        // Header Sticky Js
        var varWindow = $(window);
        varWindow.on('scroll', function(event) {
            var scroll = varWindow.scrollTop();
            if (scroll < 100) {
                $(".header_4").removeClass("header_4--sticky");
            } else {
                $(".header_4").addClass("header_4--sticky");
            }
        });

        $('.js__menu > a').on('click', function(e) {
            e.preventDefault();
            $('.header_4 .header-menu').slideToggle();
        });

        $('.header-menu__close-js').on('click', function(e) {
            $('.header-menu').slideToggle();
        });

        if ($(window).width() < 992) {
            $('.header_4 .has-menu .main-link__icon').on('click', function(e) {
                e.preventDefault();
                $(this).parent().next().slideToggle();
                $(this).parent().toggleClass('active');
            });

            $('.header-menu .main-link > a').on('click', function(e) {
                $('.header-menu').slideToggle();
            });
        }
    }

    /* -----------------------------------------------------------------------
         header_4 搜尋框
        ----------------------------------------------------------------------- */

    // header搜尋框
    $(".main-link__icon.search").on('click', function() {
        $(".header_4__search-box").toggleClass("show").focus();
    });


    /* -----------------------------------------------------------------------
       WOW JS
       ----------------------------------------------------------------------- */

    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    }



    /* -----------------------------------------------------------------------
       footer_4
       ----------------------------------------------------------------------- */


    if ($('.footer_4__scroll-to-top').length) {
        function scrollToTop() {
            var $scrollUp = $('#scroll-to-top'),
                $lastScrollTop = 0,
                $window = $(window);
            $window.on('scroll', function() {
                var st = $(this).scrollTop();
                if (st > $lastScrollTop) {
                    $scrollUp.removeClass('show');
                } else {
                    if ($window.scrollTop() > 120) {
                        $scrollUp.addClass('show');
                    } else {
                        $scrollUp.removeClass('show');
                    }
                }
                $lastScrollTop = st;
            });
            $scrollUp.on('click', function(evt) {
                $('html, body').animate({ scrollTop: 0 }, 50);
                evt.preventDefault();
            });
        }
        scrollToTop();
    }


    /* -----------------------------------------------------------------------
       index_4_1(首頁輪播)
       ----------------------------------------------------------------------- */

    // 首頁banner輪播
    if ($('.default-slider-container').length) {
        var carouselSlider = new Swiper('.default-slider-container', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            speed: 1000,
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next.index_4_1__next",
                prevEl: ".swiper-button-prev.index_4_1__prev",
            },
            // autoplay: {
            //   delay: 5000,
            //   disableOnInteraction: false,
            // },
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
        });
        //背景圖片讀取
        const bgSelector = $("[data-bg-img]");
        bgSelector.each(function(index, elem) {
            let element = $(elem),
                bgSource = element.data('bg-img');
            element.css('background-image', 'url(' + bgSource + ')');
        });
    }

    /* -----------------------------------------------------------------------
       index_4_2(首頁展覽輪播)
       ----------------------------------------------------------------------- */

    if ($('.index_4_2__info-swiper').length) {
        var swiper = new Swiper(".index_4_2__info-swiper", {
            slidesPerView: 1,
            spaceBetween: 15,
            loop: true,
            pagination: {
                el: ".swiper-pagination7",
                clickable: true,
                type: 'bullets',
            },
            navigation: {
                nextEl: ".index_4_2__next",
                prevEl: ".index_4_2__prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                   autoHeight: true, 
                },
                1500: {
                   autoHeight: false, 
                }
            }
        });
    }

    /* -----------------------------------------------------------------------
       index_4_3(首頁產品輪播)
       ----------------------------------------------------------------------- */

    // 首頁產品輪播
    if ($('.index_4_3__swiper').length) {
        var swiper = new Swiper(".index_4_3__swiper", {
            slidesPerView: 4,
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: ".swiper-pagination3",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next.index_4_3__next",
                prevEl: ".swiper-button-prev.index_4_3__prev",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                },
                481: {
                    slidesPerView: 3,
                },
                // when window width is >= 767px
                768: {
                    slidesPerView: 4,
                },
                // when window width is >= 991px
                991: {
                    slidesPerView: 4,
                }
            }
        });
    }


    /* -----------------------------------------------------------------------
       index_4_4(線條動畫)
       ----------------------------------------------------------------------- */

    // waypoint.js
    !function(){"use strict";var e=0,r={};function i(t){if(!t)throw new Error("No options passed to Waypoint constructor");if(!t.element)throw new Error("No element option passed to Waypoint constructor");if(!t.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=i.Adapter.extend({},i.defaults,t),this.element=this.options.element,this.adapter=new i.Adapter(this.element),this.callback=t.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=i.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=i.Context.findOrCreateByElement(this.options.context),i.offsetAliases[this.options.offset]&&(this.options.offset=i.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),r[this.key]=this,e+=1}i.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},i.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},i.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete r[this.key]},i.prototype.disable=function(){return this.enabled=!1,this},i.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},i.prototype.next=function(){return this.group.next(this)},i.prototype.previous=function(){return this.group.previous(this)},i.invokeAll=function(t){var e,i=[];for(e in r)i.push(r[e]);for(var o=0,n=i.length;o<n;o++)i[o][t]()},i.destroyAll=function(){i.invokeAll("destroy")},i.disableAll=function(){i.invokeAll("disable")},i.enableAll=function(){i.invokeAll("enable")},i.refreshAll=function(){i.Context.refreshAll()},i.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},i.viewportWidth=function(){return document.documentElement.clientWidth},i.adapters=[],i.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},i.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=i}(),function(){"use strict";function e(t){window.setTimeout(t,1e3/60)}var i=0,o={},d=window.Waypoint,t=window.onload;function n(t){this.element=t,this.Adapter=d.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}n.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},n.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},n.prototype.createThrottledResizeHandler=function(){var t=this;function e(){t.handleResize(),t.didResize=!1}this.adapter.on("resize.waypoints",function(){t.didResize||(t.didResize=!0,d.requestAnimationFrame(e))})},n.prototype.createThrottledScrollHandler=function(){var t=this;function e(){t.handleScroll(),t.didScroll=!1}this.adapter.on("scroll.waypoints",function(){t.didScroll&&!d.isTouch||(t.didScroll=!0,d.requestAnimationFrame(e))})},n.prototype.handleResize=function(){d.Context.refreshAll()},n.prototype.handleScroll=function(){var t,e,i={},o={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(t in o){var n,r=o[t],s=r.newScroll>r.oldScroll?r.forward:r.backward;for(n in this.waypoints[t]){var a=this.waypoints[t][n],l=r.oldScroll<a.triggerPoint,h=r.newScroll>=a.triggerPoint;(l&&h||!l&&!h)&&(a.queueTrigger(s),i[a.group.id]=a.group)}}for(e in i)i[e].flushTriggers();this.oldScroll={x:o.horizontal.newScroll,y:o.vertical.newScroll}},n.prototype.innerHeight=function(){return this.element==this.element.window?d.viewportHeight():this.adapter.innerHeight()},n.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},n.prototype.innerWidth=function(){return this.element==this.element.window?d.viewportWidth():this.adapter.innerWidth()},n.prototype.destroy=function(){var t,e=[];for(t in this.waypoints)for(var i in this.waypoints[t])e.push(this.waypoints[t][i]);for(var o=0,n=e.length;o<n;o++)e[o].destroy()},n.prototype.refresh=function(){var t,e,i=this.element==this.element.window,o=i?void 0:this.adapter.offset(),n={};for(e in this.handleScroll(),t={horizontal:{contextOffset:i?0:o.left,contextScroll:i?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:i?0:o.top,contextScroll:i?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var r,s=t[e];for(r in this.waypoints[e]){var a,l=this.waypoints[e][r],h=l.options.offset,p=l.triggerPoint,c=0,u=null==p;l.element!==l.element.window&&(c=l.adapter.offset()[s.offsetProp]),"function"==typeof h?h=h.apply(l):"string"==typeof h&&(h=parseFloat(h),-1<l.options.offset.indexOf("%")&&(h=Math.ceil(s.contextDimension*h/100))),a=s.contextScroll-s.contextOffset,l.triggerPoint=c+a-h,a=p<s.oldScroll,h=l.triggerPoint>=s.oldScroll,p=!a&&!h,!u&&(a&&h)?(l.queueTrigger(s.backward),n[l.group.id]=l.group):(!u&&p||u&&s.oldScroll>=l.triggerPoint)&&(l.queueTrigger(s.forward),n[l.group.id]=l.group)}}return d.requestAnimationFrame(function(){for(var t in n)n[t].flushTriggers()}),this},n.findOrCreateByElement=function(t){return n.findByElement(t)||new n(t)},n.refreshAll=function(){for(var t in o)o[t].refresh()},n.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){t&&t(),n.refreshAll()},d.requestAnimationFrame=function(t){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e).call(window,t)},d.Context=n}(),function(){"use strict";function s(t,e){return t.triggerPoint-e.triggerPoint}function a(t,e){return e.triggerPoint-t.triggerPoint}var e={vertical:{},horizontal:{}},i=window.Waypoint;function o(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),e[this.axis][this.name]=this}o.prototype.add=function(t){this.waypoints.push(t)},o.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},o.prototype.flushTriggers=function(){for(var t in this.triggerQueues){var e=this.triggerQueues[t],i="up"===t||"left"===t;e.sort(i?a:s);for(var o=0,n=e.length;o<n;o+=1){var r=e[o];!r.options.continuous&&o!==e.length-1||r.trigger([t])}}this.clearTriggerQueues()},o.prototype.next=function(t){this.waypoints.sort(s);t=i.Adapter.inArray(t,this.waypoints);return t===this.waypoints.length-1?null:this.waypoints[t+1]},o.prototype.previous=function(t){this.waypoints.sort(s);t=i.Adapter.inArray(t,this.waypoints);return t?this.waypoints[t-1]:null},o.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},o.prototype.remove=function(t){t=i.Adapter.inArray(t,this.waypoints);-1<t&&this.waypoints.splice(t,1)},o.prototype.first=function(){return this.waypoints[0]},o.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},o.findOrCreate=function(t){return e[t.axis][t.name]||new o(t)},i.Group=o}(),function(){"use strict";var i=window.jQuery,t=window.Waypoint;function o(t){this.$element=i(t)}i.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(t,e){o.prototype[e]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[e].apply(this.$element,t)}}),i.each(["extend","inArray","isEmptyObject"],function(t,e){o[e]=i[e]}),t.adapters.push({name:"jquery",Adapter:o}),t.Adapter=o}(),function(){"use strict";var n=window.Waypoint;function t(o){return function(){var e=[],i=arguments[0];return o.isFunction(arguments[0])&&((i=o.extend({},arguments[1])).handler=arguments[0]),this.each(function(){var t=o.extend({},i,{element:this});"string"==typeof t.context&&(t.context=o(this).closest(t.context)[0]),e.push(new n(t))}),e}}window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

    // 線條動畫
    if ($('.index_4_4').length) {
      $('.index_4_4__bg-deco1').css('opacity', '0');
      var waypoint1 = new Waypoint({
        element: document.getElementById('index_4_4__bg-deco'),
        handler: function(direction) {
          $('.index_4_4__bg-deco1').css('opacity', '0.2');
          var $svg = $('svg').drawsvg();
          $svg.drawsvg('animate');
          this.destroy();
        },
        offset: '100%'
      });
    }


    /* -----------------------------------------------------------------------
      contact_4(select換顏色)
      ----------------------------------------------------------------------- */
    // 更換select選單被選中後, 出現指定顏色, 顏色需在css寫
    $('select').on('change', function() {
        $(this).addClass('active');
    });



    /* -----------------------------------------------------------------------
       exhibition_4(展覽品輪播)
      ----------------------------------------------------------------------- */

    // 展覽品輪播
    if ($('.exhibition_4__swiper.vertical').length) {
        var swiper = new Swiper(".exhibition_4__swiper.vertical", {
            slidesPerView: 4,
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: ".swiper-pagination5",
                clickable: true,
                type: 'bullets',
            },
            navigation: {
                nextEl: ".swiper-button-next.exhibition_4__next.vertical",
                prevEl: ".swiper-button-prev.exhibition_4__prev.vertical",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                },
                581: {
                    slidesPerView: 3,
                },
                // when window width is >= 767px
                768: {
                    slidesPerView: 3,
                },
                // when window width is >= 991px
                991: {
                    slidesPerView: 4,
                }
            }
        });
    }


    if ($('.exhibition_4__swiper.horizontal').length) {
        var swiper = new Swiper(".exhibition_4__swiper.horizontal", {
            slidesPerView: 4,
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: ".swiper-pagination6",
                clickable: true,
                type: 'bullets',
            },
            navigation: {
                nextEl: ".swiper-button-next.exhibition_4__next.horizontal",
                prevEl: ".swiper-button-prev.exhibition_4__prev.horizontal",
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                },
                581: {
                    slidesPerView: 3,
                },
                // when window width is >= 767px
                768: {
                    slidesPerView: 3,
                },
                // when window width is >= 991px
                991: {
                    slidesPerView: 4,
                }
            }
        });
    }


    





})(window.jQuery);