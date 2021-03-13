import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../libs/utils';

export default {
    name: 'Header',
    // 供外面调用的方法
    tpl(options) {
        const { url, title, showLeftIcon, showRightIcon } = options;
        // 最终到处的时字符串，把模板 return 出去
        return tplReplace(tpl, {
            url,
            title,
            showLeftIcon: showLeftIcon ? 'block': 'none',
            showRightIcon: showRightIcon ? 'block': 'none'
        });
    }
}