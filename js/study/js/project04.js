function max(str){
    var arr=str.split("");
    var ch,maxch=0,startindex=0;
    arr.sort();
    for(var value in arr){
        for(var i=startindex;i<arr.length;i++){
            if(arr[value]!=arr[i]){
                if(i-startindex>maxch){
                    maxch=i-startindex;
                    ch=arr[value];
                }
                startindex=i;
                break;
            }
        }
        value+=startindex;
    }
    return "出现次数最多的字符:"+ch+",出现次数:"+maxch;
}

(function(){
    var str="daskljahiagnaknscsjdwfanalvnahdpwod";
    document.write(max(str));
})();