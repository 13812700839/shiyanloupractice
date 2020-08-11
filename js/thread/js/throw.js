function myFunction(){
    try {
        var x=document.getElementById("demo").value;
        if(x=="") throw "您输入的值为空";
        if(isNaN(x)) throw "您输入的不是数字";
        if(x>100) throw "您输入的值太大";
        if(x<0) throw "您输入的值太小";
    } catch (err) {
        var y=document.getElementById("throwText");
        y.innerHTML="错误提示："+err+"。";
    }
    
}