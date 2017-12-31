<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head lang="en">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="Content-Type" content="text/html" charset="utf-8"/>
    <META HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
    <title>标题</title>
    <link href="release/bella.css" rel="stylesheet">
    <link href="release/default-theme.css" rel="stylesheet">
    <script src="release/jquery.bella.min.js"></script>
    <script src="release/bella.js"></script>
</head>
<body>
<div class="raw-w default-nav">
    <div class="raw-f">
        <ul class="bl-nav center auto-compose">
            <a href="index.php"><i class="fa fa-leaf lazy-compose left" aria-hidden="true"></i></a>
            <a href="index.php">
                <li class="font-color-white">Home</li>
            </a>
            <li class="font-color-yellow-gold">Getting Start</li>
            <li>Documentation
                <ul>
                    <li>Layout</li>
                    <li>Elements</li>
                </ul>
            </li>
            <li>Fusion Layout (BETA)</li>
            <li>bella Script</li>
            <li>About</li>
            <a href=""><i class="fa fa-github lazy-compose right" aria-hidden="true"></i></a>
        </ul>
    </div>
</div>

<div class="raw-30">
    <div class="container">
        <div class="bl-sidebar">
            <ul class="bl-sidebar default-sidebar-elements switch-tag">
                <a>按钮与按钮组</a>
                <a>输入组件</a>
                <a>quickForm</a>
                <a>表格输出</a>
            </ul>
        </div>
    </div>
</div>
<div class="raw-70">

</div>
<div class="raw-w">
    <div class="raw-f auto-compose">
        <div class="raw-f bl-view bl-markdown">
            <div class="bl-view-header">布局</div>
            <div class="bl-view-body">
                <p>##视图</p>
                <p>1.使用*.bl-view*来创建视图</p>
                <p>2.视图（view）是bella的基础布局类组件，它允许为其添加页眉与页脚</p>
                <p>3.通过为*.bl-view*添加同级类*.bl-markdown*来实现Markdown渲染</p>
            </div>
        </div>
    </div>
</div>
<div class="raw-w">
    <div class="raw-f auto-compose">
        <div class="raw-f bl-view bl-tab-view bl-markdown">
            <div class="bl-view-header">
                <ul>
                    <li class="bl-tab-view-active">Apple Inc.</li>
                    <li>Google</li>
                    <li>Microsoft</li>
                    <li>Amazon</li>
                </ul>
            </div>
            <div class="bl-view-body">
                <p>##标签视图0</p>
                <p>1.使用*.bl-tab-view*来创建标签视图</p>
                <p>3.通过为*.bl-tab-view*添加同级类*.bl-markdown*来实现Markdown渲染</p>

            </div>
            <div class="bl-view-body">
                <p>##标签视图1</p>
                <p>1.使用*.bl-tab-view*来创建标签视图</p>
                <p>2.标签视图（tabView）继承自*.bl-view*</p>
                <p>3.通过为*.bl-tab-view*添加同级类*.bl-markdown*来实现Markdown渲染</p>

            </div>
            <div class="bl-view-body">
                <p>##标签视图2</p>

            </div>
            <div class="bl-view-body">
                <p>##标签视图3</p>
                <p>1.使用*.bl-tab-view*来创建标签视图</p>
                <p>2.标签视图（tabView）继承自*.bl-view*</p>
                <p>3.通过为*.bl-tab-view*添加同级类*.bl-markdown*来实现Markdown渲染</p>

            </div>
        </div>
    </div>
</div>
<div class="raw-w">
    <div class="raw-f auto-compose">
        <div class="raw-2 bl-view switch-tag" name="comp">
            <ul class="bl-sidebar default-sidebar-elements switch-tag">
                <a>按钮与按钮组</a>
                <a>输入组件</a>
                <a>quickForm</a>
                <a>表格输出</a>
            </ul>
        </div>
        <div class="raw-8 bl-view bl-markdown">
            <div class="bl-view-header">组件</div>
            <ul name="comp">
                <div class="bl-view-body bl-markdown">
                    <p>##Button and button groups</p>
                    <button>Form Button</button>
                    <br>
                    <a class="bl-btn primary" onclick="bella.notify('you clicked me',5000)">Primary Button</a>
                    <a class="bl-btn alert" onclick="bella.alert('you clicked me again')">Alert Button</a>
                    <br>
                    <a class="bl-btn disabled">Disabled Button</a>

                </div>
                <div class="bl-view-body bl-markdown">
                    <p>#####输入 input</p>
                    <input type="text" placeholder="a normal input box">
                    <p>#####密码输入 input[type = "password"]</p>
                    <input type="password" value="passwords">
                </div>
                <div class="bl-view-body bl-markdown">
                    <p>##quickForm 表达式</p>
                    <div class="bella-script">form
                        {
                        (select)Select多重选择:(mySelect)[opt1,opt2];
                        (checkbox)CheckBox复选:(mycheck)[opt1,opt2];
                        (radio)Radio单选:(myradio)[opt1,opt2];
                        }
                    </div>
                </div>
                <div class="bl-view-body">

                    <div class="bella-script">table
                        {
                        col1 | col2 | col3 | col4;
                        data0 |data1 |data2 |
                        <button onclick="alert(bella.fromButtonInTableRawGet(this,0))">按钮</button>
                        ;
                        data0 |data1 |data2 |
                        <button>按钮</button>
                        ;
                        data0 |data1 |data2 |
                        <button>按钮</button>
                        ;
                        data0 |data1 |data2 |
                        <button>按钮</button>
                        ;
                        }
                    </div>
                </div>
            </ul>
        </div>
    </div>
</div>
</body>
</html>
