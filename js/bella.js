/*
 *
 *
 *   bella.js version:       0.1
 *   element list version:   0.1
 *
 *
 * */
//element list
var globalElements = [

    //elements need to be initialized by JavaScript
    //layout::
    '.bl-tab-view',

    //bella universal elements::
    '.bl-nav',
    '.bl-sidebar',
    '.bl-page',
    '.bl-view',

    //delegate
    '.attach-delegate'


];
var globalStaticClasses = [

    '.switch-delegate'
];


$(document).ready(function () {

    //initialize global bella class
    blClassGlbCov();
    //call highlight.js
    // hljs();
    //
});
bella = {
    version: "0.1",

    //MobileSupport
    mobileSupport: function () {
        $('title').after('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi" />');
        document.documentElement.addEventListener('touchstart', function (event) {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        }, false);
        var lastTouchEnd = 0;
        document.documentElement.addEventListener('touchend', function (event) {
            var now = Date.now();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    },
    getWindowHeight: function () {
        return $(window).height();
    },
    //timestamp

    getTimeStamp: function () {
        return new Date().getTime();
    },
    scrollToTop: function () {
        window.scrollBy(0, -10);
        scrolldelay = setTimeout('pageScroll()', 100);
        if (document.documentElement.scrollTop == 0) clearTimeout(scrolldelay);
    },
    //notification
    notify: function (msg) {
        blNotificationCov("bl-notification-normal", msg);
        // NotificationTimer = setTimeout("bella.hideNotification()",5000);
    },
    alert: function (msg) {
        blNotificationCov("bl-notification-alert", msg);
        // NotificationTimer = setTimeout("bella.hideNotification()",5000);

    },
    hideNotification: function () {
        $('.bl-notification-alert button').remove();
        $('.bl-notification-normal button').remove();

        $('.bl-notification-normal').slideUp(500, function () {
            $('.bl-notification-normal').remove();
        });
        $('.bl-notification-alert').slideUp(500, function () {
            $('.bl-notification-alert').remove();
        });
    }
};

function hljs() {
    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });
}

//
//

function blClassGlbCov() {

    //bellaConvertIterator
    globalElements.forEach(function (e) {
        var $eleList = $(e).toArray();
        $eleList.forEach(function (eleListMember) {
            var funcName = String(e.replace(/-/, ''));
            while (funcName.indexOf('-') > 0)
                funcName = funcName.replace(/-/, '');
            funcName = funcName.replace(/./, '') + 'Cov(eleListMember)';
            eval(funcName);
        });
    });
    blStaticClassGlbCov();
}

function blStaticClassGlbCov() {

    //bellaConvertIterator
    globalStaticClasses.forEach(function (e) {
        var funcName = String(e.replace(/-/, ''));
        while (funcName.indexOf('-') > 0)
            funcName = funcName.replace(/-/, '');
        funcName = funcName.replace(/./, '') + 'Cov()';
        eval(funcName);
    });
}

function blviewCov(blviewTotalSet) {

    var $blviewTotalSet = $(blviewTotalSet);
    $blviewTotalSet.toArray().forEach(function (oneblview) {
        var $oneblviewbodyTotalSet = $(oneblview).find('.bl-view-body');
        var oneblviewbodyTotalList = $oneblviewbodyTotalSet.toArray();
        oneblviewbodyTotalList.forEach(function (oneblviewbody) {
            $(oneblviewbody).css("display", "none");
        });
        $(oneblviewbodyTotalList[0]).css("display", "block");
    });
}

function blNotificationCov(type, msg) {
    // clearTimeout(NotificationTimer);
    var currTimeStamp = bella.getTimeStamp();
    var notifDiv = $('<div style="display: none" id="' + currTimeStamp + '" class="' + type + ' raw-w"><div class="raw-f"><p></p></div><div onclick="bella.hideNotification()" class="tiny bl-notification-hide-button">Hide</div></div>');
    $('body').before(notifDiv);
    $('#' + currTimeStamp + ' p').html(msg);
    $('.' + type + '').slideUp(300);
    $('#' + currTimeStamp).slideDown(300);
}

function bltabviewCov(oneTabView) {
    var $oneTabView = $(oneTabView);
    var oneTabViewList = $oneTabView.find('.bl-view-header li').toArray();
    var oneTabViewBodyList = $oneTabView.find('.bl-view-body').toArray();
    var fullWid = parseFloat($oneTabView.find('.bl-view-header').css('width'));
    var memberWid = fullWid / oneTabViewList.length;
    oneTabViewList.forEach(function (oneTabViewListMember) {
        $(oneTabViewListMember).css({
            'width': memberWid
        });
    });
    $(oneTabViewList[0]).addClass('bl-tab-view-active');
    $(oneTabViewBodyList[0]).css({'display': 'block'});
    oneTabViewList.forEach(function (oneTabViewListMember) {
        var $oneTabViewListMember = $(oneTabViewListMember);
        $oneTabViewListMember.on('click', function () {
            $(oneTabViewBodyList).css({'display': 'none'});
            $(oneTabViewBodyList[oneTabViewList.indexOf($oneTabViewListMember.get(0))]).css({'display': 'block'});
            $oneTabView.find('li').removeClass('bl-tab-view-active');
            $oneTabViewListMember.addClass('bl-tab-view-active');

        });
    });
}

function switchdelegateCov() {
    var $switchDelegateTotalList = $('.switch-delegate').toArray();
    $switchDelegateTotalList.forEach(function (oneswitchDelegate) {
        var oneSlotName = $(oneswitchDelegate).attr("name");
        var slotList = $("ul[name=" + oneSlotName + "]:not(\".switch-delegate\")").find('.bl-view-body');
        var oneSwitchDelegateAList = $(oneswitchDelegate).find('a').toArray();
        oneSwitchDelegateAList.forEach(function (oneSwitchDelegateAListMember) {
            $(oneSwitchDelegateAListMember).on('click', function () {
                $(oneSwitchDelegateAList).removeClass("bl-view-active");
                $(oneSwitchDelegateAListMember).addClass("bl-view-active");
                $(slotList).css('display', 'none');
                $(slotList[oneSwitchDelegateAList.indexOf(oneSwitchDelegateAListMember)]).css('display', 'block');
                $('.m-bl-view-header').text($(oneSwitchDelegateAListMember).text());
            });
        });
        $(oneSwitchDelegateAList[0]).addClass("bl-view-active");
    });
}

function attachdelegateCov(oneAttachDelegate) {
    var $oneAttachDelegate = $(oneAttachDelegate);
    $(document).scroll(function () {
        var scrollTop = $(document).scrollTop();
        var objScrollTop = $oneAttachDelegate.position().top;
        if (scrollTop > objScrollTop && $('.attach-delegate-clone').length == 0) {
            var $attachDelegateInstant = $oneAttachDelegate.clone(true);
            $oneAttachDelegate.append($attachDelegateInstant);
            $attachDelegateInstant.addClass('attach-delegate-clone');
            $attachDelegateInstant.css({
                'position': 'fixed',
                'top': $oneAttachDelegate.position().top - parseFloat($oneAttachDelegate.css('height')) + 'px',
                'left': $oneAttachDelegate.position().left + 'px',
                'z-index': 500
            });
        } else if (scrollTop <= objScrollTop) {
            $(document).find($('.attach-delegate-clone')).remove();
        }
    });
}

function blpageCov(onePage) {
    var $pageRoot = $(onePage);
    var converter = new showdown.Converter({
        "omitExtraWLInCodeBlocks": true,
        "noHeaderId": false,
        "prefixHeaderId": "",
        "ghCompatibleHeaderId": true,
        "headerLevelStart": 1,
        "parseImgDimensions": true,
        "simplifiedAutoLink": true,
        "excludeTrailingPunctuationFromURLs": false,
        "literalMidWordUnderscores": true,
        "strikethrough": true,
        "tables": true,
        "tablesHeaderId": false,
        "ghCodeBlocks": true,
        "tasklists": true,
        "smoothLivePreview": true,
        "smartIndentationFix": false,
        "disableForced4SpacesIndentedSublists": false,
        "simpleLineBreaks": false,
        "requireSpaceBeforeHeadingText": false,
        "ghMentions": false, "extensions": [], "sanitize": false
    });

    var $pageParagList = $pageRoot.find('p').toArray();
    $pageParagList.forEach(function (oneParag) {
        var $oneParag = $(oneParag);
        $oneParag.html(converter.makeHtml($oneParag.html()));
    });
}

function blsidebarCov(oneSidebar) {
    var $oneSidebar = $(oneSidebar);
    var $oneSidebarMember = $oneSidebar.children('a').toArray();
    $oneSidebar.children('a:first').addClass('bl-sidebar-active');
    $oneSidebarMember.forEach(function (oneSidebarbarMemberA) {
        var $oneSidebarbarMemberA = $(oneSidebarbarMemberA);
        $oneSidebarbarMemberA.on('click', function () {
            $oneSidebar.children('a').removeClass('bl-sidebar-active');
            $oneSidebarbarMemberA.addClass('bl-sidebar-active');
        });
    });
}

function blnavCov(oneBlHeaderListMember) {

    //nav > ul-body
    var $rootItem = $(oneBlHeaderListMember);

    //ul-body > li-list
    var $itemList = $rootItem.children('li').toArray();


    //
    $itemList.forEach(function (itemListMember) {
        var $itemListMember = $(itemListMember);
        var $itemListMemberUl = $itemListMember.children('ul');
        // $itemListMemberUl.before("<i class=\"fa fa-angle-down\"></i>");

        //
        $itemListMember.on('click', function () {
            if ($itemListMemberUl.hasClass('bl-nav-active')) {
                // $itemListMemberUl.fadeOut(100, function () {
                //
                //     $('.bl-nav-active').css('display', 'none').removeClass('bl-nav-active');
                // })
            }
            else {
                $('.bl-nav-active')
                    .css('display', 'none')
                    .removeClass('bl-nav-active');
                $itemListMemberUl
                    .addClass('bl-nav-active')
                    .css({
                        'top': $itemListMember.position().top + 'px' + $itemListMember.css('height'),
                        'left': $itemListMember.position().left + 'px'
                    });
                $itemListMemberUl.fadeIn(100);
            }
        });
        $itemListMemberUl.mouseleave(function () {
            $itemListMemberUl.fadeOut(100, function () {
                $('.bl-nav-active').css('display', 'none').removeClass('bl-nav-active');
            });
        })
    });
}
