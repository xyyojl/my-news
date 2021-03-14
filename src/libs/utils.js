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

function setPageData(data, count) {
    const len = data.length;
    let pageData = [];
    let index = 0;
    
    // 将数据进行改造，返回数据 10 条一页
    while(index < len) {
        pageData.push(data.slice(index, index+=count));
    }

    return pageData;
}


export {
    tplReplace,
    scrollTop,
    setPageData
}