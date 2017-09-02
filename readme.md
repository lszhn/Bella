# bellaFront 开发者指南
_TIPS_
> bellaFront（以下简称"bella"）仍然是开发中的框架，API变更与框架源关闭是随时可能发生的。
## 框架结构
### 栅格布局
bella 为开发者提供全局的布局(default 40px)，开发者通过定义
行宽与列高来对网页布局
* bella提供40px长的设计基线
* 行元素没有高度，是网页的x方向布局元素
* 列元素有高度与宽度，高度是可选的，当开发者希望列元素与内部元素自适应时，请使用a属性
> 如下是一个栅格布局的示例：
```
<div class="raw-w">
    <div class="raw-f">
        <div class="col-24-10">
            ##hello,world.
        </div>
    </div>
</div>
```

## 视图与视图切换器
> bella页面的基本显示元素是*bl-view*

bl-view有如下子类

* bl-tab-view
* bl-sidebar
* bl-page

> 如下是*视图*的代码的示例
```$xslt

<div class="col-24-10 bl-view bl-page">
    <div class="bl-view-header">布局</div>
         <div class="bl-view-body">
         </div>
    </div>
</div>
```

### 多标签视图
> 使用*bl-tab-view*来创建多标签视图
bl-tab-view不需要使用切换器来
```$xslt
<div class="raw-w">
        <div class="raw-f">
            <div class="col-24-a bl-tab-view bl-page">
                <div class="bl-view-header">
                    <ul>
                        <li class="bl-tab-view-active">Apple Inc.</li>
                        <li>Google</li>
                        <li>Microsoft</li>
                        <li>Amazon</li>
                    </ul>
                </div>
                <div class="bl-view-body"> view 0 </div>
                <div class="bl-view-body"> view 1 </div>
                <div class="bl-view-body"> view 2 </div>
                <div class="bl-view-body"> view 3 </div>
            </div>
        </div>
    </div>
```


通过在bl-view中添加*bl-view-header*和*bl-view-footer*来添加页眉与页脚

## 视图切换器

>注意：为了避免视图切换器匹配冲突，bella建议开发者使用 sw- 前缀来区分普通元素与切换器元素

为ul添加*switch-delegate*类来建立切换器，在*bl-view*内添加多个body，即可自动绑定锚
