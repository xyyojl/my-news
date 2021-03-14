import './imports';
import Header from '../components/Header';
import NewsFrame from '../components/Iframe';
import { getUrlQueryValue } from '../libs/utils';

;(function(doc){
    const oApp = doc.querySelector('#app');
    const currentNews = JSON.parse(localStorage.getItem(('currentNews')));

    const init = () => {
        render();
    }

    function render() {
        // 潜在的问题，需要解决 url 的问题
        const headerTpl = Header.tpl({
            url: getUrlQueryValue('path'),
            title: '新闻详情',
            showLeftIcon: true,
            showRightIcon: false
        });

        const NewFrameTpl = NewsFrame.tpl(currentNews.url);

        oApp.innerHTML += (headerTpl + NewFrameTpl);
    };

    init();

})(document);