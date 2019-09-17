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
    }, 40)
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
    color: rgb(222,222,222); 
    background: rgb(0,43,54);
    font-size: 16px;
}
/* 代码离边框太近了 */
#code{
    border: 1px solid #aaa;
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
/* 加一个呼吸效果 */
#code{
  animation: breath 0.5s infinite alternate-reverse;
}

/* 我需要一张白纸 */
.code-wrapper{
width: 50%;
position: fixed;
height: 100%;
}
#paper {
display: block;
}
`
function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    content.id = 'content'
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
    }, 50)


}

var result2 = `/* 于是，我可以在白纸上写字了，请看右边 */`

var md = `
# 自我介绍

我叫胡鑫驰
1994年09月02日出生
西华大学毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉JavaScript CSS

# 项目介绍

1.xxxx
2.xxxx
3.xxxx

# 联系方式
* 手机：18048818135
* 邮箱：455908283@qq.com
`

writeCode('', result, () => {
    createPaper(() => {
        writeCode(result, result2, () => {
            writeMarkdown(md, () => {

                writeCode(result + result2, result3, () => {
                    MarkdownToHtml(md, () => {
                        writeCode(result + result2 + result3, result4, () => {
                            console.log('完成')
                        })
                    })
                })
            })
        })
    })
})

function MarkdownToHtml(markdown, fn) {
    document.getElementById('content').innerHTML = marked(markdown);
    fn.call()
}

var result3 = `
/* 这个简历好像还差点什么
 * 用开源工具把Markdown格式翻译成HTML格式
*/ 
`
var result4 = `
/* 最后给HTML加一点样式 */
#paper>.content {
    overflow: auto;
}
#paper>.content h1{
    display: inline-block;
    border-bottom: 1px solid;
    margin: 1em 0 .5em;
}
#paper>.content li{
    padding: .5em;
    background: #ddd;
}

/* 感谢观看
 * 感谢观看
 * 感谢观看
*/

.code-wrapper{
    width: 30%;
}
#paper{
    width: 70%;
}
`