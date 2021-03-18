let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
//图像切换
let myimage=document.querySelector("img");
myimage.onclick=function () {
    let mysrc=myimage.getAttribute("src")
    if(mysrc === "./img/zuotubiao.png") {
        myimage.setAttribute('src', './img/youtubiao.png');
    } else {
        myimage.setAttribute('src', './img/zuotubiao.png');
    }

}
//切换用户
let myButton=document.querySelector("button");
let myText=document.querySelector("h1")

function setUserName() {
    let myName=prompt("your name");
    //调用 localStorage API ，它可以将数据存储在浏览器中供后续获取
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem("name",myName)
    myText.textContent="my name is"+myName;
}
}
// null，这是 JavaScript 中的一个特殊值，表示引用不存在。
if (!localStorage.getItem("name")){
    setUserName();
}else{
    let saveName=localStorage.getItem("name");
    myText.textContent="my name is"+saveName;
}
myButton.onclick=function () {
    setUserName();
}