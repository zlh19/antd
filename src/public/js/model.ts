const remToPxFun=()=>{
    (function(window) {
        function a() {
            var widthWindow = document.documentElement.clientWidth;
            var fontNumber = 18.75;
            document.documentElement.style.fontSize = document.documentElement.clientWidth / fontNumber + "px";
        }
        var b = null;
        window.addEventListener("resize", function() {
            clearTimeout(b), b = setTimeout(a, 100)
        }, !1), a()

    })(window);
}

const setWechatTitleFun=(title)=> {
    document.title = title
    var mobile = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(mobile)) {
        var iframe = document.createElement('iframe')
        iframe.style.display = 'none'
            // 替换成站标favicon路径或者任意存在的较小的图片即可
        // iframe.setAttribute('src', '/favicon.ico')
        var iframeCallback = function() {
            setTimeout(function() {
                iframe.removeEventListener('load', iframeCallback)
                document.body.removeChild(iframe)
            }, 0)
        }
        iframe.addEventListener('load', iframeCallback)
        document.body.appendChild(iframe)
    }
}


const switchLocalData= function (source) {
    var hasData=source.indexOf('?');
    if(hasData<0){return}

    var sourceData=source.split('?')[1]

    var searchPath = sourceData,
        query = {};
    if (sourceData.length > 0) {
        searchPath = searchPath.split('&');
        searchPath.forEach(function (k, v) {
            v = v.split('=');
            query[v[0]] = decodeURI(v[1])
        })
    }
    return query;
}

const test=function(obj, fn){
    return Object.keys(obj).reduce((result, key) => {
        if (fn(obj[key])) {
            result[key] = obj[key]
        }
        return result
    }, {})
}

export {
    remToPxFun,
    setWechatTitleFun,
    switchLocalData,
    test
}

