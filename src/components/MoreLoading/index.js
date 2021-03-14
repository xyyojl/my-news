import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../libs/utils';

export default {
    name: 'MoreLoading',
    _tpl(isLoading) {
        // 根据 isLoading 的状态决定具体的内容
        return tplReplace(tpl, {
            isLoading: isLoading ? 'loading': '',
            text: isLoading ? '正在加载中': '没有更多新闻了'
        });
    },
    remove(oList) {
        // 获取节点
        const oMoreLoading = oList.querySelector('.more-loading');
        oMoreLoading && oMoreLoading.remove();
    },
    add(oList, isLoading) {
        const oMoreLoading = oList.querySelector('.more-loading');
        if(!oMoreLoading) {
            oList.innerHTML += this._tpl(isLoading);
        }
    }
}