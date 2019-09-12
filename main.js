var result = `
/*
 * 面试官你好，我是胡鑫驰
 * 我将以动画的形式来介绍我自己
 * 只用文字介绍太单调了
 * 我就用代码来介绍吧
 * 白色背景太单调了，我们来点背景
 */
html{
    background: rgb(222,222,222);
    font-size: 16px;
}
#code{
    border: 1px solid white;
    padding: 16px;
}
`
var n = 0
var id = setInterval(() => {
    n += 1
    code.innerHTML = result.substring(0, n)
    styleTag.innerHTML = result.substring(0, n)
    if (n >= result.length) {
        clearInterval(id)
    }
}, 50)