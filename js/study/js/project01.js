function print(){
    var num=prompt("请输入一个正整数：");
    if(num<=0){
        print();
        return;
    }
    for(var i=0;i<num;i++){
        for(var j=0;j<i+1;j++){
            document.write("*");
        }
        document.write("<br />");
    }
};

print();