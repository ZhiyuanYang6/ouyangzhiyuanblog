function getSuggestion() {
    var strdomin = $.trim($("#input_search").val());
    //jsonp跨域请求，参数wd为关键字；参数p恒为3，暂时不知道用途；参数cb为请求成功后的回调函数的名字，自己实现这个函数来处理得到的数据
    var qsData = { 'wd': strdomin, 'p': '3', 'cb': 'getData' };
    $.ajax({
        async: false,
        url: "http://suggestion.baidu.com/su",
        type: "GET",
        dataType: 'script',
        data: qsData,
        timeout: 500,
        success: function (json) {
        },
        error: function (xhr) {
        }
    });
}
function getData(mydata) {//参数mydata即为返回的数据，suggestion以数组形式保存在mydata.s中
    //先清除原来的suggesion列表
    console.log(mydata);
    // clearSuggestion();
    // var length = mydata.s.length;
    // var data = mydata.s;
    // if (length == 0) {
    //     //没有请求到suggestion时则不显示suggestion列表
    //     hiddenSuggestion();
    // } else {
    //     //显示suggestion列表
    //     showSuggestion();
    //     //suggestionLength和index是两个全局变量，代表列表项长度和索引，在编写键盘事件函数时会用到
    //     suggestionLength = (length > 10 ? 10 : length);
    //     index = 0;
    //     for (i = 0; i < (length > 10 ? 10 : length); i++) {
    //         var li = $("<li id='li" + i + "' onMouseOver='mouseOverEvent(this)' onMouseOut='mouseOutEvent(this)' οnclick='search()'></li>").text(data[i]);
    //         $("#suggestionUl").append(li);
    //     }
    // }
}
function showSuggestion() {
    $("#suggestion").removeAttr("hidden");
}
function hiddenSuggestion() {
    $("#suggestion").attr("hidden", "hidden");
}
function clearSuggestion() {
    $("#suggestionUl").html("");
}
function move(x){
    return true;
    if (x.keyCode == 13) {//按回车，则执行搜索操作
        search();
    } else if (x.keyCode == 40 && index == 0) {//若第一次按下键，则选中第一个suggestion项，并更新索引值
        var li0 = document.getElementById("li0");
        mouseOverEvent(li0);
        index = 1;
    } else if (x.keyCode == 40 && index == suggestionLength) {//若在选中最后一个suggestion项时按下键，则选中第一个suggestion项，并更新索引值
        var li0 = document.getElementById("li0");
        mouseOverEvent(li0);
        var li = document.getElementById("li"+(suggestionLength-1));
        mouseOutEvent(li);
        index = 1;
    } else if (x.keyCode == 38 && index == 1) {//若在选中第一个suggestion项时按上键，则选中最后一个suggestion项，并更新索引值
        var li = document.getElementById("li"+(suggestionLength-1));
        mouseOverEvent(li);
        var li2 = document.getElementById("li0");
        mouseOutEvent(li2);
        index = suggestionLength;
    } else if (x.keyCode == 38) {//按上键的普通情况
        var li2 = document.getElementById("li"+(index-1));
        index--;
        var li = document.getElementById("li"+(index-1));
        mouseOverEvent(li);
        mouseOutEvent(li2);
    } else if (x.keyCode == 40) {//按下键的普通情况
        var li2 = document.getElementById("li"+(index-1));
        index++;
        var li = document.getElementById("li"+(index-1));
        mouseOverEvent(li);
        mouseOutEvent(li2);
    }
}