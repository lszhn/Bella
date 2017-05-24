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
    '.bl-sidebar'

];

$(document).ready(function () {

    //initialize global bella class
    blClassGlbCov();

});

window.onscroll = function () {
    if(('.scroll-attach').screenTop == 0){

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

function blsidebarCov(OneSidebar) {
    var $OneSidebar = $(OneSidebar);
    var $OneSidebarMember = $OneSidebar.children('a').toArray();
    $OneSidebar.children('a:first').addClass('bl-sidebar-active');
    $OneSidebarMember.forEach(function (OneSidebarbarMemberA) {
        var $OneSidebarbarMemberA = $(OneSidebarbarMemberA);
        $OneSidebarbarMemberA.on('click',function () {
            $OneSidebar.children('a').removeClass('bl-sidebar-active');
            $OneSidebarbarMemberA.addClass('bl-sidebar-active');
        });
    });
}

function blnavCov(OneBlHeaderListMember) {

    //nav > ul-body
    var $rootItem = $(OneBlHeaderListMember);

    //ul-body > li-list
    var $itemList = $rootItem.children('li').toArray();

    //
    $itemList.forEach(function (itemListMember) {
        var $itemListMember = $(itemListMember);
        var $itemListMemberUl = $itemListMember.children('ul');
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