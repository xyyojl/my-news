import './imports';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import NewsList from '../components/NewsList';
import { NEWS_TYPE } from '../data';
import service from '../services';
// import { tplReplace } from '../libs/utils';

;(function(doc) {
    const oApp = doc.querySelector('#app');
    let oListWrapper = null;
    const config = {
        type: 'top',
        count: 10,
        pageNum: 0
    };
    const newsData = {};

    const init = () => {
        render();
        bindEvent();
        setNewsList();
    };

    function bindEvent() {
        NavBar.bindEvent(setType);
    }
    function setType(type) {
        config.type = type;
        console.log('当前的 type: ', config.type);
        oListWrapper.innerHTML = '';
        setNewsList();
    }

    async function setNewsList() {
        const { type, count, pageNum } = config;

        if(newsData[type]) {
            // 已经请求过接口，从缓存池里拿数据
            renderList(newsData[type][pageNum]);
            return;
        }

        newsData[type] = await service.getNewsList(type, count);
        // 获取到的数据，调用 renderList 方法，渲染新闻列表
        // 这里为什么要异步？
        setTimeout(() => {
            // 清空之前的内容，重新渲染
            oListWrapper.innerHTML = '';
            console.log(newsData[type][pageNum]);
            renderList(newsData[type][pageNum]);
        })
        console.log(newsData);
    }

    function renderList(data) {
        const { pageNum } = config;

        const NewsListTpl = NewsList.tpl({
            pageNum,
            data
        });
        oListWrapper.innerHTML += NewsListTpl;

        // 显示图片
        NewsList.imgShow();
    };


    function render() {
        const headerTpl = Header.tpl({
            url: '/',
            title: '新闻头条',
            showLeftIcon: false,
            showRightIcon: true
        });

        const navBarTpl = NavBar.tpl(NEWS_TYPE);
        // 获取新闻列表模板
        const listWrapperTpl = NewsList.wrapperTpl(82);

        oApp.innerHTML += (headerTpl + navBarTpl + listWrapperTpl);
        // 获取 dom 节点
        oListWrapper = oApp.querySelector('.news-list');
    };
    init();

})(document);