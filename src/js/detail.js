import './imports';
import Header from '../components/Header';
import NewsFrame from '../components/Iframe';
import Follow from '../components/Follow';
import { getUrlQueryValue } from '../libs/utils';

;(function(doc){
    const oApp = doc.querySelector('#app');
    const currentNews = JSON.parse(localStorage.getItem(('currentNews')));
    const followedList = JSON.parse(localStorage.getItem('followedList') || '[]');

    const init = () => {
        render();
        bindEvent();
    }

    function bindEvent() {
        Follow.bindEvent(doFollow);
    }

    // 创建 Follow 模板
    function createFollowTpl() {
        // 根据 iSExist 决定使用那个 class
        const isExist = followedList.find(item => item.uniquekey === currentNews.uniquekey);

        return isExist ? Follow.follow() : Follow.unfollow();
    }
    // 收藏行为逻辑处理
    function doFollow(status) {

        // 获取数据
        let followedList = JSON.parse(localStorage.getItem('followedList') || '[]');

        // 根据状态值不同，做不同的处理
        if(status) {
            followedList.push(currentNews);
        }else {
            followedList = followedList.filter(item => item.uniquekey !== currentNews.uniquekey);
        }
        // 重新存储值
        localStorage.setItem('followedList', JSON.stringify(followedList));

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
        const followTpl = createFollowTpl();

        oApp.innerHTML += (headerTpl + NewFrameTpl + followTpl);
    };

    init();

})(document);