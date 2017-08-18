//格式化时间日期
Date.prototype.Format=function(){
    var fmt='';
    //小于10的数字前面补0
    function addZero(num){
        var str = '';
        if(num < 10){
            str = '0'+num;
        }else{
            str=num;
        }
        return str;

    }

    var year=this.getFullYear(),
        month=addZero(this.getMonth()+1),
        date=addZero(this.getDate()),
        hours=addZero(this.getHours()),
        minutes=addZero(this.getMinutes());

    fmt=year+'-'+month+'-'+date+' '+hours+':'+minutes;
    return fmt;    
}

Date.prototype.PreviousDay = function (num){
    var days = num || 1
    var date = new Date()
    date.setDate(date.getDate() - days)
    return date.Format()
}