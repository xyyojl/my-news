import './imports';
import Header from '../components/Header';

;(function(doc){
    const oApp = doc.querySelector('#app');

    const init = () => {
        render();
    }

    function render() {
        // 潜在的问题，需要解决 url 的问题
        const headerTpl = Header.tpl({
            url: '/',
            title: '新闻详情',
            showLeftIcon: true,
            showRightIcon: false
        });

        oApp.innerHTML += headerTpl;
    };

    init();

})(document);