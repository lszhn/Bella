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

    //layout::

    //bella universal elements::
    '.bl-nav',
    '.bl-sidebar',
    '.bl-page'

];

$(document).ready(function () {

    //initialize global bella class
    blClassGlbCov();
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

});

window.onscroll = function () {
    if($('.scroll-attach').scrollTop == 0){

    }
};


//
//
function blClassGlbCov() {

    //bellaConvertIterator
    globalElements.forEach(function (e) {
        var $eleList = $(e).toArray();
        $eleList.forEach(function (eleListMember) {
            var funcName = String(e.replace(/-/,''));
            funcName = funcName.replace(/./,'') + 'Cov(eleListMember)';
            eval(funcName);
        });
    });
}
function blpageCov(onePage) {
    var $pageRoot = $(onePage);
    var converter = new showdown.Converter({
        "omitExtraWLInCodeBlocks":true,
        "noHeaderId":false,
        "prefixHeaderId":"",
        "ghCompatibleHeaderId":true,
        "headerLevelStart":1,
        "parseImgDimensions":true,
        "simplifiedAutoLink":true,
        "excludeTrailingPunctuationFromURLs":false,
        "literalMidWordUnderscores":true,
        "strikethrough":true,
        "tables":true,
        "tablesHeaderId":false,
        "ghCodeBlocks":true,
        "tasklists":true,
        "smoothLivePreview":true,
        "smartIndentationFix":false,
        "disableForced4SpacesIndentedSublists":false,
        "simpleLineBreaks":false,
        "requireSpaceBeforeHeadingText":false,
        "ghMentions":false,"extensions":[],"sanitize":false
    });

    var $pageParagList = $pageRoot.find('p').toArray();
    console.log($pageParagList);
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
        $oneSidebarbarMemberA.on('click',function () {
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
        console.log($itemListMemberUl);
        $itemListMemberUl.before("<i class=\"fa fa-angle-down\"></i>");

        //
        $itemListMember.on('click',function () {
            if($itemListMemberUl.hasClass('bl-nav-active'))
                $itemListMemberUl.fadeOut(100,function () {
                    $('.bl-nav-active').css('display','none').removeClass('bl-nav-active');
                });
            else {
                $('.bl-nav-active')
                    .css('display','none')
                    .removeClass('bl-nav-active');
                $itemListMemberUl
                    .addClass('bl-nav-active')
                    .css({
                    'top':$itemListMember.position().top + 'px' + $itemListMember.css('height'),
                    'left':$itemListMember.position().left + 'px'});
                $itemListMemberUl.fadeIn(100);
            }
        });
        $itemListMemberUl.mouseleave(function () {
            $itemListMemberUl.fadeOut(100,function () {
                $('.bl-nav-active').css('display','none').removeClass('bl-nav-active');
            });
        })
    });
}