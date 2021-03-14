import './imports';
import NewsList from '../components/NewsList';
import NoDataTip from '../components/NoDataTip';
import Header from '../components/Header';

;(function(doc){
    const oApp = doc.querySelector('#app');
    const followedList = JSON.parse(localStorage.getItem('followedList') || '[]');
    let oListWrapper = null;

    const init = () => {
        render();
        bindEvent();
    }

    function render() {
        const headerTpl = Header.tpl({
            url: '/',
            title: '我的新闻',
            showLeftIcon: true,
            showRightIcon: false
        });

        // 判断有收藏数，才显示
        if(followedList.length) {
            const listWrapperTpl = NewsList.wrapperTpl(44);
            oApp.innerHTML += (headerTpl + listWrapperTpl);
            oListWrapper = oApp.querySelector('.news-list');
            renderList(followedList);
        } else {
            // 没有数据，显示提示。使用 NoDataTip 组件
            oApp.innerHTML += (headerTpl + NoDataTip.tpl());
        }

    };

    function renderList(data) {
        const newsListTpl = NewsList.tpl({
            data,
            pageNum: -1
        });
        oListWrapper.innerHTML += newsListTpl;
        NewsList.imgShow();
    };

    function bindEvent() {
        followedList.length && NewsList.bindEvent(oListWrapper, setCurrentNews);
    }

    // 找到对应的数据，并存储到 localStorage
    function setCurrentNews(options) {
        console.log(options);
        const { idx } = options;
        // understand
        const currentNews = followedList[idx];
        localStorage.setItem('currentNews', JSON.stringify(currentNews));
    }

    init();

})(document);