
(function ($) {
    
    $.supermodal = function( options ) {
 
        var settings = $.extend({
            backButton: true,
            maxWidth: '90%',
            maxHeight: '90%',
            background: '#fff',
            color: '',
            shadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
            containerBackground: 'rgba(0,0,0,0.2)',
            containerClass: '',
            containerZIndex: '1000',
            showTitle: true,
            title: '',
            titleColor: '#fff',
            titleBackground: '#02A1FF',
            closeButton: true,
            closeButtonIcon: 'mh mhi-times',
            lazyLoading: false,
            ajax: false
        }, options );
 
        var selector = '[data-modal]';

        $(selector).click(function() {
            initSuperModal(this,settings);
        });
 
    };

    $(window).on('hashchange', function() {
        if (window.location.hash=='') {
            closeModal($('.mh-supermodal-container'));
        } else {
            var hash = window.location.hash.replace('#','').split('_');
            $('.mh-supermodal-container').each(function() {
                var level = $(this).attr('data-modal-level');
                if (level>hash[0]) {
                    closeModal($(this));
                }
            });
        }	
    });

    $(document).ready(function() {
        if (window.location.hash!='') {
            var hash = window.location.hash.replace('#','').split('_');
            $('[data-modal="'+hash[1]+'"').click();
        }
    });

    function initSuperModal(selector,settings) {

        var localSettings = Object.assign({}, settings);
        var id = $(selector).attr('data-modal');
        var title = '';
        var modalHtml;

        for ([key, value] of Object.entries(settings)) {
            if ($(selector).attr('data-modal-'+key)) {
                var val = $(selector).attr('data-modal-'+key);
                if (val=='true') val = true;
                if (val=='false') val = false;
                localSettings[key] = val;
            } 
        }

        if (localSettings.ajax) {
            $.ajaxSetup({async: false});
            $.get(id, function (data) {
                modalHtml = data;
                id = new Date().getTime();
            });
        } else {    
            modalHtml = $('#'+id).html();
        }

        if (modalHtml) {

            var modalSelector = '.mh-supermodal-container[id="modal_'+id+'"]';
            var level = 1;

            if ($('.mh-supermodal-container').length) 
                level = $('.mh-supermodal-container').length+1;

            $('body').append('<div id="modal_'+id+'" data-modal-level="'+level+'" class="mh-supermodal-container"><div class="mh-supermodal-window"><div class="mh-supermodal-body">'+modalHtml+'</div></div></div>');

            if (localSettings.showTitle) {
                if (localSettings.title)
                    title = localSettings.title;
                else
                    title = id;
                
                $(modalSelector+' .mh-supermodal-window').prepend('<div class="mh-supermodal-title">'+title+'</div>');
            }

            if (localSettings.closeButton) {
                $(modalSelector+' .mh-supermodal-window .mh-supermodal-title').prepend('<div class="mh-supermodal-close"><i class="'+localSettings.closeButtonIcon+'"></i></div>');
            }
                
            $(modalSelector+' .mh-supermodal-window').css('max-height',localSettings.maxHeight);
            $(modalSelector+' .mh-supermodal-window').css('max-width',localSettings.maxWidth);
            $(modalSelector+' .mh-supermodal-window').css('background',localSettings.background);
            $(modalSelector+' .mh-supermodal-window').css('color',localSettings.color);
            $(modalSelector+' .mh-supermodal-window').css('box-shadow',localSettings.shadow);
            $(modalSelector).css('background',localSettings.containerBackground);
            $(modalSelector).css('z-index',localSettings.containerZIndex);
            $(modalSelector+' .mh-supermodal-window .mh-supermodal-title').css('background',localSettings.titleBackground);
            $(modalSelector+' .mh-supermodal-window .mh-supermodal-title').css('color',localSettings.titleColor);

            if (localSettings.containerClass!='') {
                $(modalSelector).addClass(localSettings.containerClass);
            }

            $(modalSelector+' .mh-supermodal-window').addClass('show');
            
            if (localSettings.backButton)
                window.location.hash = level+'_'+id;

            $(modalSelector+' .mh-supermodal-window .mh-supermodal-close, '+modalSelector+' [data-modal-close]').click(function() {
                closeButton($(modalSelector),localSettings);
            });

            $('html').css('overflow','hidden');

            $(modalSelector+' [data-modal]').click(function() {
                initSuperModal(this,localSettings)
            });

            if (localSettings.lazyLoading) {
                $(modalSelector+' img[data-src]').each(function() {
                    $(this).attr('src',$(this).attr('data-src'));
                });
            }
        }
    }
    
    function closeButton(obj, settings = Array()) {
        if (settings.backButton)
            window.history.back();
        else
            closeModal(obj);
    }

    function closeModal(obj) {
        var window = false;
        var container = false;
    
        if (obj.find('.mh-supermodal-window').length) {
            window = obj.find('.mh-supermodal-window');
            container = obj;
        } else if (obj.parents('.mh-supermodal-window:first').length) {
            window = obj.parents('.mh-supermodal-window:first');
            container = obj.parents('.mh-supermodal-container:first');
        }      
        
        if (window) {
            window.removeClass('show').addClass('hide');
            setTimeout(function() {
                container.remove();
                if (!$('.mh-supermodal-container').length) {
                    $('html').css('overflow','auto');
                }
            }, 300);
        }
    }

}(jQuery));
