import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../libs/utils';

export default {
    name: 'Follow',
    // 通过调整 class，实现样式的改变
    follow() {
        return tplReplace(tpl, {
            star: 'star'
        })
    },
    unfollow() {
        return tplReplace(tpl, {
            star: 'star-o'
        })
    },
    // doFollow 回调函数，在 detail 页面操作 localStorage，不能在组件操作，组件内部只是操作样式的改变
    bindEvent(doFollow) {
        const oFollow = document.querySelector('.follow');
        oFollow.addEventListener('click', this._setFollow.bind(this, oFollow, doFollow));
    },
    _setFollow(oFollow, doFollow) {
        // 回调函数 doFollow，决定是否将数据存放还是移除 localStorage 中的数据 
        const className = oFollow.className;
        oFollow.className = 'follow iconfont icon-';

        switch(className) {
            case 'follow iconfont icon-star':
                oFollow.className += 'star-o';
                doFollow(false);
                break;
            case 'follow iconfont icon-star-o':
                oFollow.className += 'star';
                doFollow(true);
                break;
            default:
                break;
        }
    }
}