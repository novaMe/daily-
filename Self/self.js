/**
 * Created by wangqi on 25/07/2017.
 */
var WQjs = {
//字符串操作
//1.去除空格
    trim:function (str, type) {
    switch (type) {
        case 1 : return str.replace(/\s+/g, "");//所有空格
        case 2 : return str.replace(/(^\s*)|(\s*$)/g, "");//前后空格
        case 3 : return str.replace(/(^\s*)/g, "");//前空格
        case 4 : return str.replace(/(\s*$)/g, "");//后空格
        default : return str;
    }
},
//2.切换字母大小写
changeCase: function(str, type) {
    switch (type) {
        //首字母大写
        case 1 : return str.replace(/^(\w)(\w+)/, function(v,v1,v2){return v1.toUpperCase()+v2.toLowerCase();});
        //首字母小写
        case 2 : return str.replace(/^(\w)(\w+)/, function(v,v1,v2){return v1.toLowerCase()+v2.toUpperCase();});
        //大小写转换
        case 3 : return str.replace(/^([a-z]+)([A-Z]+)/, function(v,v1,v2){return v1.toUpperCase()+v2.toLowerCase();});
        //全部大写
        case 4 : return str.toUpperCase();
        //全部小写
        case 4 : return str.toLowerCase();
        default : return str;
    }
},
//3.字符串循环复制
repeatStr: function(str, count) {
    var text = '';
    for(var i = 0; i< count; i++) {
        text += str;
    }
    return text;
},
//4.字符串替换
replaceAll: function (str, AFindText,ARepText) {
    raRegExp = new RegExp(AFindText, "g");
    return str.replace(raRegExp, ARepText);
},
//5.替换*###
replaceStr: function (str, regArr, type, ARepText) {
    var regtext = '', Reg = null, replaceText = ARepText || '*';
    if(regArr.length === 3 && type === 0) {
        regtext = '(\\w{' + regtext[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})'
        Reg = new RegExp(regtext);
        var replaceCount = repeatStr(replaceText, regArr[1]);
        return str.replace(Reg, '$1' + replaceCount + '$2')
    }
    else if(regArr.length === 3 && type === 1) {
        regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2]+ '}'
        Reg = new RegExp(regtext);
        var replaceCount1 = repeatStr(replaceText, regArr[0]);
        var replaceCount2 = repeatStr(replaceText, regArr[2]);
        return str.replace(Reg, replaceCount1 + '$1' + replaceCount2)
    }
    else if (regArr.length === 1 && type ==0) {
        regtext = '(^\\w{' + regArr[0] + '})'
        Reg = new RegExp(regtext);
        var replaceCount = repeatStr(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount)
    }
    else if (regArr.length ===1 && type == 1) {
        regtext = '(\\w{' + regArr[0] + '}$)'
        Reg = new RegExp(regtext);
        var replaceCount = repeatStr(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount);
    }
},
//6.字符串检测
checkType: function (str, type) {
    switch(type) {
        case 'email' :
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'phone' :
            return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
        case 'tel' :
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'number' :
            return /^[0-9]$]/.test(str);
        case 'english' :
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese' :
            return /^[\u4E00-\u9FA5]+$/.test(str);
        case 'lower' :
            return /^[a-z]+$/.test(str);
        case 'upper' :
            return /^[A-Z]+$/.test(str);
        default:
            return true;
    }
},
//7检测密码强度
checkPwd: function(str) {
    var nowLv = 0;
    if(str.length < 6) {//密码长度
        return nowLv;
    };
    if(/[0-9]/.test(str)) {//数字
        nowLv++;
    };
    if(/[a-z]/.test(str)) {//小写字母
        nowLv++;
    };
    if(/[A-Z]/.test(str)) {//大写字母
        nowLv++;
    };
    if(/[.|_|-]/.test(str)) {//特殊符号
        nowLv++;
    };
    return nowLv;
},

//8. 随机码()
randomNumber: function (count) {
    return Math.random().toString(count).substring(2);
},

//9.查找字符串中重复字符的次数
countStr: function(str, strSplit) {
    return str.split(strSplit).length-1
},

//数组操作
//10.数组去重
removeRepeatArray: function(arr) {
    return Array.from(new Set(arr))
},
//11.数组顺序打乱
upsetArr: function(arr) {
    return arr.sort(function() {return Math.random() - 0.5})
},
//12.数组最大值和最小值
maxArr: function(arr) {
    return Math.max.apply(null, arr);
},
minArr: function(arr) {
    return Math.min.apply(null, arr);
},
//13数组求和, 平均值
sumArr: function(arr) {//数字类型的数组
    var sumText = 0;
    for(var i = 0, len = arr.length; i <len; i++) {
        sumText += arr[i];
    }
    return sumText;
},
covArr:function(arr) {
    var sumText = sumArr(arr);
    var covText = sumText/length;//(长度怎么获取)
    return covText;
},
//14. 数组中随机获取元素
randomOne: function(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
},
//15.返回数组(字符串)一个元素出现次数
getEleCount:function(obj, ele) {
    var num =0;
    for(var i = 0,len = obj.length; i<len; i++) {
        if(ele == obj[i]) {
            num++;
        }
    }
    return num;
},
//16. 返回数组(字符串)出现最多的几次元素和出现次数
getCount:function(arr, rank, ranktype) {
    var obj = {}, k, arr1 = []
    //记录每一元素出现的次数
    for(var i = 0, len = arr.length; i<len; i++) {
        k = arr[i];
        if(obj[k]) {
            obj[k]++;
        }
        else {
            obj[k] = 1;
        }
    }
    //保存结果{el-"元素", count: '出现次数'}
    for(var o in obj) {
        arr1.push({el: o, count: obj[o]});
    }
    //将序排序
    arr1.sort(function (n1,n2) {
        return n2.count - n1.count
    })
    //如果ranktype为1, 数组反转,升序排列
    if(ranktype === 1) {
        arr1 = arr1.reverse();
    }
    var rank1 = rank || arr1.length;
    return arr1.slice(0, rank1);
},
//17. 得到指定下标的数组(n1-n2范围内数组)
getArrayNum: function(arr, n1, n2) {
    var arr1 = [], len = n2 || arr.length -1;
    for(var i = n1; i<=len; i++) {
        arr1.push(arr[i])
    }
    return arr1;
},

//18. 筛选数组
removeArrayForVal: function(arr, val, type) {
    arr.filter(function (item) {
        return type === '%'?item.indexOf(val)!== -1: item !==val
    })
},

//基础DOM操作部分
// 19.检测对象是否有哪里类名
hasClass: function (obj, classStr) {
    var arr = obj.className.split(/\s+/);
    return (arr.indexOf(classStr) == -1)?false:true;
},
//20.添加类名
addClass: function (obj, classStr) {
    if(!this.hasClass(obj, classStr)) {
        obj.className += " " + classStr;
    }
},
//21.删除类名
removeClass: function (obj, classStr) {
    if(this.hasClass(obj, classStr)) {
        var reg = new RegExp('(\\s|^)' + classStr + '(\\s|&)');
        obj.className = obj.className.replace(reg , '');
    }
},
//22.替换类名
replaceClass: function(obj, newName, oldName) {
    removeClass(obj, oldName);
    addClass(obj, newName);
},
//23.获取兄弟节点
siblings: function (obj) {
    var a = [];
    var p = obj.previousSibling;
    while(p) {
        if(p.nodeType === 1) {
            a.push(p);
        }
        p = p.previousSibling
    }
    a.reverse();
    var n = obj.nextSibling;
    while(n) {
        if(n.nodeType === 1) {
            a.push(n);
        }
        n = n .nextSibling;
    }
    return a;
},
//24.设置样式
css: function (obj, json) {
    for(var attr in json) {
        obj.style[attr] = json[attr];
    }
},
//25.设置文本内容
html: function (obj) {
    if(arguments.length == 0) {
        return this.innerHTML;
    }
    else if(arguments.length == 1) {
        this.innerHTML = arguments[0];
    }
},
//26.显示和隐藏
show: function (obj) {
    obj.style.display = "";
},
hide: function (obj) {
    obj.style.display ="none";
},
//27.操作COOKIE
setCookie: function(name, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + '=' +value+';expires=' +oDate;
},
getCookie: function(name) {
    var arr = document.cookie.split("; ");
    for(var i =0;i<arr.length; i++) {
        var arr2 = arr[i].split("=");
        if(arr2[0] === name) {
            return arr2[1];
        }
    }
    return '';
},
removeCookie: function(name) {
    setCookie(name,1,-1);
},

//28.清除对象中值为空的属性
filterParams: function (obj) {
    let _newPar = {};
    for(let key in obj) {
        if((obj[key] === 0 || obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
            _newPar[key] = obj[key];
        }
    }
    return _newPar;
},
//29.现金额大写转换
upCash: function (n) {
    var fraction = ['角','分','厘'];
    var cash = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖'];
    var unit = [['元','万','亿'],['','拾','佰','仟',]];
    var head = n < 0? '欠人民币':'人民币';
    n = Math.abs(n);
    var s = '';
    for(var i = 0; i<fraction.length; i++) {
        s += (cash[Math.floor(n*10*Math.pow(10,i))%10] +fraction[i].replace(/零./, ''));
    }
    s = s||'整';
    n = Math.floor(n);
    for(var i = 0; i<unit[0].length && n > 0; i++) {
        var p = '';
        for(var j =0; j < unit[1].length && n>0; j++) {
            p = cash[n % 10] + unit[1][j] + p;
            n = Math.floor(n/10);
        }
        s = p+unit[0][i]  + s;
    }
    return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g,'零').replace(/^整$/,'零元整');
},
/*
 function hasId(id) {
 return document.getElementById(id);
 }
 function addId(obj,id) {
 if(!this.hasId(id)) {
 obj.idName += '' + id;
 }
 }
 */

//30.获取,设置url参数
getUrlPrmt: function (url) {
    url = url ? url : window.location.href;
    let _pa = url.substring(url.indexOf('?') + 1), _arrs = _pa.split('&'), _rs = {};
    for(let i = 0, _len = _arrs.length; i<_len; i++) {
        let pos = _arrs[i].indexOf("=");
        if(pos == -1) {
            continue;
        }
        let name = _arrs[i].substring(0,pos), value = window.decodeURIComponent(_arrs[i].substring(pos + 1));
        _rs[name] = value;
    }
    return _rs;
},
//设置url参数
//seturlprmt({'a':1,'b':2})
//a=1&b=2
setUrlPrmt: function (obj) {
    let _rs = [];
    for(let p in obj) {
        if(obj[p] != null && obj[p] != '') {
            _rs.push(p + '=' + obj[p])
        }
    }
    return _rs.join('&');
},

//31.随机返回一个范围的数字
randomNumber: function (n1,n2) {
    if(arguments.length === 2) {
        return Math.round(n1 + Math.random()* (n2-n1));
    }
    else if(arguments.length === 1) {
        return Math.round(Math.random()*n1);
    }
    else {
        return Math.round(Math.random()*255);
    }
},

//32.随机产生颜色
randomColor: function () {
    //写法1
    return 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
    //写法2
    return '#' + Math.random().toString(16).substring(2).substr(0,6);
    //写法3
    var color = '#';
    for(var i = 0; i<6; i++) {
        color += '0123456789abcdef'[randomNumber(15)];
    }
    return color;
},

//33.Date日期处理
getEndTime: function (endTime) {
    var startDate = new Date();
    var endDate = new Date(endTime);
    var t = endDate.getTime() - startDate.getTime();
    var d = 0, h = 0, m = 0, s = 0;
    if(t > 0) {
        d = Math.floor(t/1000/3600/24);
        h = Math.floor(t/1000/60/60%24);
        m = Math.floor(t/1000/60%60);
        s = Math.floor(t/1000/60);
    }
    return "剩余时间" + d + "天" + h + "小时" + m + "分钟" + s + "秒";
},

//34.适配rem
getFontSize: function () {
    var doc = document, win = window;
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if(!clientWidth) {
                return;
            }
            if(clientWidth >750) {
                clientWidth = 750;
            }
            docEl.style.fontsize = 100*(clientWidth/750) + 'px';
        };
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded' ,recalc,false);
},
/*使用方法,PSD图图片宽高都是100px; 样式的写法就是
 img{
 width:1rem;
 height:1rem;
 }
 */
//这样的设置，比如在屏幕宽度大于等于750px设备上，1rem=100px；图片显示就是宽高都是100px
//比如在iphone6(屏幕宽度：375)上，375/750*100=50px;就是1rem=50px;图片显示就是宽高都是50px;


//35.判断一个字符串是否是回文 manam foxof
checkPalindrom: function (str) {
    return str == str.split('').reverse().join('');
},

//36.数组去重
uniqueArr: function(arr) {
    let hashTable = {};
    let data = [];
    for(var i =0, l = arr.length; i<l;i++) {
        if(!hashTable[arr[i]]) {
            hashTable[arr[i]] = true;
            data.push(arr[i]);
        }
    }
    return data;
},


//37.统计一个字符串出现最多的字
checkMaxDuplicateStr:function(str) {
  if(str.length == 1) {
      return str;
  }
    let strObj = {};
    for(var i = 0; i<str.length; i++) {
        if(!strObj[str.charAt(i)]) {
            strObj[str.charAt(i)] = 1;
        }else {
            strObj[str.charAt(i)] += 1;
        }
    }
    let maxStr = '', maxVal = 1;
    for(var k in strObj) {
        if(strObj[k] >= maxVal) {
            maxStr = k;
            maxVal = strObj[k];
        }
    }
    return maxStr;
},


}

export {WQjs}