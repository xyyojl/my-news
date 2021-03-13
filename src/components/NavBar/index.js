import itemTpl from './tpl/item.tpl';
import wrapperTpl from './tpl/index.tpl';
import './index.scss';

import { tplReplace, scrollTop } from '../../libs/utils';

// 先做渲染，再做事件绑定和事件处理
export default {
    name: 'NavBar',
    _curIdex: 0,
    tpl(data) {
        // 生成每一项
        let itemList = ``;
        data.map(({ type, title }, index) => {
            itemList += tplReplace(itemTpl, {
                // 默认是第一项被激活
                isCurrent: !index ? 'current': '',
                type,
                title
            })
        })

        return tplReplace(wrapperTpl, {
            itemList,
            wrapperW: .6 * data.length
        })
    },
    bindEvent(setType) {
        // setType 回调函数
        const oNavBar = document.querySelector('.nav');
        const oNavItems = document.querySelectorAll('.item');

        // 事件代理，让对应的 tab 激活
        // 修改
        oNavBar.addEventListener('click',this._setNav.bind(this, oNavItems, setType), false);
    },
    // 内部方法：事件传递，我们使用的是回调机制
    _setNav(items, setType) {
        // 这个组件只负责切换位置，获取数据的操作，交给父组件处理
        // 让被点击的 tab 激活
        const tar = arguments[2].target;
        const className = tar.className.trim();

        if(className === 'item') {
            const type = tar.dataset.type;
            // 获取到对应的 type，传给回调函数
            setType(type);
            // 这个函数的作用是什么？
            scrollTop();

            items[this._curIdex].className = 'item';
            this._curIdex = [].indexOf.call(items, tar);
            items[this._curIdex].className += ' current';

        }

    }
}