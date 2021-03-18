

var m = 1;//当前图片序号
var mytime = null;
var picture=document.getElementById("list").getElementsByTagName("img");
// var picture=document.pi.getElementsByTagName("img");
var nums=picture.length;

function show(x) {
    for (var i = 1; i < nums; i++) {
        if (x === i){
           picture[i-1].style.display="block"
        }else{
            picture[i-1].style.display="none"

        }
    }
}
//start
function start() {
    if (mytime==null){
        mytime=setInterval(function (){
            m++;
            show(m);
            if (m>nums){
                m=0;
            }
        },1500);
    }
}
//停止轮播图片
function stop(){
    if(mytime != null){
        clearInterval(mytime);
        mytime=null;//鼠标放上撤回后重新轮播
    }
}

start();
// var three=document.getElementById("three").getElementsByTagName("img");
// three.onclick=function (){
//     let img=three.getAttribute("src")
//     if(img==="images/倒.png"){
//         three.setAttribute("src","images/正.png")
//     }else{
//         three.setAttribute("src","images/倒.png")
//
//     }

// }
//验证码
var code;
function createCode() {
    code='';//默认为空
    //设置长度 ，4
    var codeLength=4;
    var codeV=document.getElementById('code');
   //设置随机字符
    var random=new Array(0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E",
        "F","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
"W","X","Y","Z");
    //循环验证码，4
    for (var i = 0; i < codeLength; i++) {
        //设置随机书范围，0～36
        var index=Math.floor(Math.random()*36);
        //字符串拼接
       code= code+random[index];
    }
    codeV.value=code;
}

    createCode();

//判断
   function validate() {
       var value = document.getElementById('input').value.toUpperCase();
       if (value === 0) {
           alert("请输入验证码");
       } else if (value !== code) {
           alert("请输入正确的验证码");
           value = '';
           createCode();

       } else {
           window.open("https://www.baidu.com")

       }
   }

//检测

function code1(){

    var four='';
    // var rand=new Array(1,2,3,4,5,6,7,8,9,0,'a')
    //设置随机字符

    for (var i = 0; i < 4; i++) {
        var text=Math.floor(Math.random()*10);
      // four=four+rand[text];
        four=four+text;
    }
    var va=  document.getElementById("in")
    va.value=four;
}



