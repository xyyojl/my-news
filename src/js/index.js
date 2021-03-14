import './imports';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { NEWS_TYPE } from '../data';
import service from '../services';

;(function(doc) {
    const oApp = doc.querySelector('#app');
    const config = {
        type: 'top',
        count: 10
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
    }

    async function setNewsList() {
        const { type, count } = config;

        if(newsData[type]) {
            // 已经请求过接口，从缓存池里拿数据
            return;
        }

        newsData[type] = await service.getNewsList(type, count);
        console.log(newsData);
    }

    function render() {
        const headerTpl = Header.tpl({
            url: '/',
            title: '新闻头条',
            showLeftIcon: false,
            showRightIcon: true
        });

        const navBarTpl = NavBar.tpl(NEWS_TYPE);

        oApp.innerHTML += (headerTpl + navBarTpl);
    };
    init();

})(document);