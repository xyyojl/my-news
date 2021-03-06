import './imports';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import NewsList from '../components/NewsList';
import pageLoading from '../components/PageLoading';
import MoreLoading from '../components/MoreLoading';
import { NEWS_TYPE } from '../data';
import service from '../services';
import { scrollToBottom } from '../libs/utils';

; (function (doc) {
    const oApp = doc.querySelector('#app');
    let oListWrapper = null;
    let t = null;
    const config = {
        type: 'top',
        count: 10,
        pageNum: 0,
        isLoading: false
    };
    const newsData = {};

    const init = () => {
        render();
        bindEvent();
        setNewsList();
    };

    function bindEvent() {
        NavBar.bindEvent(setType);
        NewsList.bindEvent(oListWrapper, setCurrentNews);
        window.addEventListener('scroll', scrollToBottom.bind(null, getMoreList), false);
    }
    function setType(type) {
        config.type = type;
        config.pageNum = 0;
        // 恢复为默认
        config.isLoading = false;
        oListWrapper.innerHTML = '';
        setNewsList();
    }

    async function setNewsList() {
        const { type, count, pageNum } = config;

        if (newsData[type]) {
            // 已经请求过接口，从缓存池里拿数据
            console.log('pool');
            renderList(newsData[type][pageNum]);
            console.log('应该是走这里把');
            return;
        }
        console.log('request');
        // 显示页面加载
        oListWrapper.innerHTML = pageLoading.tpl();
        newsData[type] = await service.getNewsList(type, count);
        // 获取到的数据，调用 renderList 方法，渲染新闻列表
        // 这里为什么要异步？
        setTimeout(() => {
            // 清空之前的内容，重新渲染
            oListWrapper.innerHTML = '';
            renderList(newsData[type][pageNum]);
        }, 1500)
    }

    function renderList(data) {
        const { pageNum } = config;

        const NewsListTpl = NewsList.tpl({
            pageNum,
            data
        });
        // 加载完，修改状态，移除 loading
        MoreLoading.remove(oListWrapper);
        oListWrapper.innerHTML += NewsListTpl;
        console.log('这里执行了');
        config.isLoading = false;

        // 显示图片
        NewsList.imgShow();
    };

    function getMoreList() {
        // isLoading: false 代表没有锁住，true 代表锁住了
        if (!config.isLoading) {
            // 拿分页数据
            config.pageNum++;
            // question
            clearTimeout(t);
            const { pageNum, type } = config;
            if(!Array.isArray(newsData[type])) return;
            let len = newsData[type].length;
            if (len && pageNum >= len) { 
                // 显示没有更多新闻
                MoreLoading.add(oListWrapper, false);
            } else {
                // 锁住
                config.isLoading = true;
                MoreLoading.add(oListWrapper, true);
                t = setTimeout(() => {
                    setNewsList();
                }, 1000);
            }
        }
    }

    // 找到对应的数据，并存储到 localStorage
    function setCurrentNews(options) {
        // 拿到 idx, pageNum，从数据里面快速找到对应的数据
        const { idx, pageNum } = options;
        const currentNews = newsData[config.type][pageNum][idx];
        localStorage.setItem('currentNews', JSON.stringify(currentNews));

    }


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