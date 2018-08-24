var oLog = document.getElementsByClassName("y_login_cont")[0];
var y_registr = document.getElementsByClassName("y_registr")[0];
var winH  = document.documentElement.clientHeight||document.body.clientHeight;
var winW  = document.documentElement.clientWidth||document.body.clientWidth;

function checkBox(){
   var checkBox = document.getElementById("pwd")
   var check =  confirm("记录密码功能不宜在公共场所(如网吧等)使用,以防密码泄露.您确定要使用此功能吗?")
    if(check){
        checkBox.checked = true;
    }else{
        checkBox.checked = false;
    }
}
function registr(){
    oLog.style.display = "none"
    y_registr.style.display = "block";
}
function reg_close() {
    y_registr.style.display = "none";
    oLog.style.display = "block"
}


function randomRgbColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
window.onload = function () {
    draw();
    document.getElementById("canvas").onclick=function(){
        draw();
    }
}

var code="";

function draw(){
    code="";
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    canvas.width = 120;
    canvas.height = 35;
    context.strokeRect(0, 0, 120, 35);

// var code="";

    var aCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,1,2,3,4,5,6,7,8,9";
    var aLength = aCode.split(",").length;
    for (var i = 0; i <= 3; i++) {
        var x = 20 + i * 20;
        var y = 20 + Math.random() * 10;
        var j = Math.floor(Math.random() * aLength);
        var deg = Math.random() * 90 * Math.PI / 180;
        var txt = aCode.split(",")[j];

        code += aCode.split(",")[j];

        context.fillStyle = randomRgbColor();
        context.font = "bold 20px 微软雅黑";
        //修改坐标原点和旋转角度
        context.translate(x, y);
        context.rotate(deg);
        context.fillText(txt, 0, 0);
        //恢复坐标原点和旋转角度
        context.rotate(-deg);
        context.translate(-x, -y);
    }


    //干扰线
    for (var i = 0; i < 8; i++) {
        context.strokeStyle = randomRgbColor();
        context.beginPath();
        context.moveTo(Math.random() * 120, Math.random() * 35);
        context.lineTo(Math.random() * 120, Math.random() * 35);
        context.stroke();
    }
    /**绘制干扰点**/
    for (var i = 0; i < 20; i++) {
        context.fillStyle = randomRgbColor();
        context.beginPath();
        context.arc(Math.random() * 120, Math.random() * 35, 1, 0, 2 * Math.PI);
        context.fill();
    }
//alert(code);
}

function checkCode(){

    var inputCode = document.getElementById("codenumber").value;

    if(inputCode.length<=0){

        alert("请输入您的验证码");

    }else if(inputCode.toUpperCase() != code.toUpperCase()){
        alert("抱歉！您的验证码输入不正确");
        code="";
        draw();
    }else{
        alert("恭喜您！您的验证码输入成功");
    }
}


var $y_more = $("#y_more");

var $list = $(".y_list");
var flag = true;
$y_more.click(function () {
    if(flag){

        $list.stop().slideDown(1000);
        $y_more.html("点我收起");
        swiper_auto();
        flag = false;
    }else{
        $list.stop().slideUp(2000);
        $y_more.html("查看更多");
        flag = true;
        // swiper_auto=null;
    }
});
/*
$list.mouseleave(function () {
    $list.stop().slideUp(2000);
    $y_more.html("查看更多");
});*/


