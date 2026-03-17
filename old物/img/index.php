<!DOCTYPE html>
<html lang="Zh-cn">

<head>
    <meta name="referrer" content="no-referrer" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>图片展示</title>
</head>
<style>
    div {
        position: relative;
        width: 100%;
        text-align: center;
    }

    img {
        /* position: absolute; */
        /* margin: 5px auto; */
        height: 200px;
    }
</style>

<body>
    <div>
        <!-- <img src="https://gchat.qpic.cn/gchatpic_new/0/0-0-5360A6D7F8190ACC6F974E94D3F6DD9F/0" alt=""> -->
    </div>
    <?php
    $imgs=file('photo.txt'); 
    $n=count($imgs);
    echo "<script>
    let div = document.querySelector('div')";
    for ($i=0; $i < $n; $i++) { 
        $x=$i+1;
        echo "
        let img$i = document.createElement('img')
        img$i.src = `$imgs[$i]`
        img$i.alt = '第 $x 行链接失效'
        div.appendChild(img$i)
        ";
        }
    echo "
    </script>";
    ?>
<script>
    let img = document.querySelector('img')";
</script>

</body>

</html>