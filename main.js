function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = 10000
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 30)
}

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
/* 代码离边框太近了 */
#code{
    border: 1px solid white;
    padding: 16px;
}
/* 我需要一点代码高亮 */
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}
/*我需要一张白纸*/
#code{
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%
}
#paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: black;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#paper > .content{
    background: white;
    height: 100%;
    width: 100%;
}
`
function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = 10000
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 30)


}

var result2 = `#paper{}`

var md = `
# 自我介绍

我叫胡鑫驰
1994年09月02日出生
西华大学毕业
自学前端半年
希望应聘前端开发岗位

#技能介绍

熟悉JavaScript CSS

#项目介绍

1.xxxx
2.xxxx
3.xxxx

#联系方式
手机：18048818135
邮箱：455908283@qq.com
`

writeCode('', result, () => {
    createPaper(() => {
        writeCode(result, result2, () => {
            writeMarkdown(md)
        })
    })
})




/*
function fn3(preResult) {
    var result = `#paper{width:100px; height:100px; background: red;}`
    var n = 0
    var id = setInterval(() => {
        n += 1
        //code.innerHTML = preResult + result.substring(0, n)
        code.innerHTML = Prism.highlight(preResult + result.substring(0, n), Prism.languages.css, 'css');
        styleTag.innerHTML = preResult + result.substring(0, n)
        if (n >= result.length) {
            window.clearInterval(id)
        }
    }, 30)
}
*/