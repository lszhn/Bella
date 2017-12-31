<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head lang="en">
    <title>bella | Home</title>
    <?php
    include('static/common/comm-header.php');
    ?>
</head>
<body>
<?php include('static/common/comm-nav.php') ?>
<div class="raw-f bg-color-bg-grey">
    <div class="container auto-compose raw-w">
        <div class="section raw-70">
            <div class="raw-f">
                <h1 class="display-10 font-color-dark-green">bella</h1>
            </div>
            <div class="raw-f">
                <div class="section">
                    <h4 class="font-color-dark-green display-4">
                        A fast and genius front-end library.<br></h4>
                    <a class="bl-btn bg-color-dark-green font-color-yellow-gold"><i
                                class="fa fa-github left font-color-yellow-gold" aria-hidden="true"></i>Github</a>
                    <a class="bl-btn bg-color-dark-green font-color-yellow-gold"><i
                                class="fa fa-book left font-color-yellow-gold" aria-hidden="true"></i>Guide</a>
                </div>
            </div>
        </div>
        <div class="section raw-30">
            <i class="font-color-dark-green fa fa-leaf " style="font-size: 10em" aria-hidden="true"></i>
        </div>
    </div>
</div>
<div class="raw-w bg-color-white">
    <div class="container separate auto-compose">
        <div class="section raw-33 bg-color-bg-dark-grey round-bordered-color-white lg-padding">
            <h2 class="display-3"><i class="fa fa-columns" aria-hidden="true"></i>Auto Composing</h2>
            <p>
                the <em>.auto-compose</em> and <em>.lazy-compose</em> tag can make bella format the layout automatically
                as the page is ready, it can be done in just milliseconds.
            </p>
        </div>
        <div class="section raw-34 bg-color-bg-dark-grey round-bordered-color-white lg-padding">
            <h2 class="display-3"><i class="fa fa-mobile" aria-hidden="true"></i>Mobile Support (Fusion)</h2>
            <p>
                <em>.bl-view</em> is the foundation of <strong>fusion layout</strong>, which allow developers to create
                cross-platform website but not rely on responsive design.
            </p>
        </div>
        <div class="section raw-33 bg-color-bg-dark-grey round-bordered-color-white lg-padding">
            <h2 class="display-3"><i class="fa fa-terminal" aria-hidden="true"></i>Live Script</h2>
            <p>
                <em>.bella-script</em> have an extraordinary contribution to this project, devepopers can
                use <strong>Live Script</strong> to generate elements, like <em>Table</em> or <em>radio</em>.
            </p>
        </div>
    </div>
</div>
<div class="raw-w">
    <div class="container auto-compose">
        <div class="section raw-75 bg-color-bg-dark-grey round-bordered-color-white lg-padding">
            <h4>Set up your project with <span class="font-color-dark-green"><i class="fa tiny fa-leaf"
                                                                                aria-hidden="true"></i><span
                            class="display-2">bella</span></span></h4>
            <pre style="max-width:100%"><code class="html hljs xml" codemark="1"><span class="hljs-tag">&lt;<span
                                class="hljs-name">link</span> <span class="hljs-attr">href</span>=<span
                                class="hljs-string">"https://bella.huaji.io/release/bella.css"</span> <span
                                class="hljs-attr">rel</span>=<span
                                class="hljs-string">"stylesheet"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">href</span>=<span
            class="hljs-string">"https://bella.huaji.io/release/default-theme.css"</span> <span
            class="hljs-attr">rel</span>=<span
            class="hljs-string">"stylesheet"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span
            class="hljs-string">"https://bella.huaji.io/release/jquery.bella.min.js"</span>&gt;</span><span
                            class="undefined"></span><span
                            class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span
            class="hljs-string">"https://bella.huaji.io/release/bella.js"</span>&gt;</span><span
                            class="undefined"></span><span
                            class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
        </div>
        <div class="section raw-25  bg-color-dark-green round-bordered-color-white lg-padding">
            <h4>Getting start</h4>
            <hr class="top-bordered-color-yellow-gold">
            <a class="bl-btn bg-color-dark-green font-color-yellow-gold round-bordered-color-yellow-gold"><i
                        class="fa fa-book left font-color-yellow-gold" aria-hidden="true"></i>Guide</a>
        </div>
    </div>
</div>
<script>
    $(document).ready(function () {
        bella.notify("Try bella, and send feedback to me@huaji.io !")
    });
</script>
</body>
</html>
