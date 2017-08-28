# bellaFront 开发者指南
_建议_
> bellaFront（以下简称"bella"）仍然是开发中的框架，API变更与框架源关闭是随时可能发生的。
## 框架结构
### 栅格布局
bella 为开发者提供全局的布局(default 40px)，开发者通过定义
行宽与列高来对网页布局
* bella提供40px长的设计基线
* 行元素没有高度，是网页的x方向布局元素
* 列元素有高度与宽度，高度是可选的，当开发者希望列元素与内部元素自适应时，请使用a属性



## 视图与视图切换器
> bella页面的基本显示元素是*bl-view*

bl-view有如下子类

* bl-tab-view
* bl-sidebar
* bl-page

通过在bl-view中添加*bl-view-header*和*bl-view-footer*来添加页眉与页脚

###视图切换器

>注意：为了避免视图切换器匹配冲突，bella建议开发者使用 sw- 前缀来区分普通元素与切换器元素

