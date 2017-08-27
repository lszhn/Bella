#   bellaFront 开发者指南
_建议_
>bellaFront（以下简称"bella"）仍然是开发中的框架，API变更与框架源关闭是随时可能发生的。
##  框架结构
###   栅格布局
bella 为开发者提供全局的布局(default 40px)，开发者通过定义
行宽与列高来
what does _baseline_ mean?  
The body of a bella page is divided into 24 parts
, so you can guess that the _baseline_ is the width 
of each part, so try set up a suitable number.
### raw
*   raw-{WIDTH}  
create a raw with width multiplied baseline by _WIDTH_
*   raw-f
create a full-body width(24 * baseline) raw.  
*   raw-w  
create a full-screen width(100%) raw.

##  Elements

bella elements 

_bl_