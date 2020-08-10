function formatDate(date){
    if(date instanceof Date){
        var time={
            year:date.getFullYear(),
            month:date.getMonth()+1,
            day:date.getDate(),
            hour:date.getHours(),
            minute:date.getMinutes(),
            second:date.getSeconds(),
        };
        for(var key in time){
            if(time[key]<10){
                time[key]="0"+time[key];
            }
        }
        var d=time.year+"/"+time.month+"/"+time.day+" "+
            time.hour+":"+time.minute+":"+time.second;
        return d;
    }
    return;
}

(function(){
    document.write(formatDate(new Date()));
})();