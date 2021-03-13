function tplReplace(template, templateObject) {
    return template().replace(/\{\{(.*?)\}\}/g,(node, key) => {
        return templateObject[key.trim()];
    })
}
// 滚动到文档顶部，把导航条设置在上面
function scrollTop() {
    setTimeout(() => {
        window.scrollTo(0,0);
    })
}


export {
    tplReplace,
    scrollTop
}