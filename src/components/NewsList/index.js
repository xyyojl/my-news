import tpl0 from './tpl/tpl0.tpl';
import tpl1 from './tpl/tpl1.tpl';
import tpl2 from './tpl/tpl2.tpl';
import tpl3 from './tpl/tpl3.tpl';
import wrapperTpl from './tpl/wrapper.tpl';

import './index.scss';
import { tplReplace } from '../../libs/utils';

export default {
    name: 'NewsList',
    wrapperTpl(top) {
        return tplReplace(wrapperTpl, {
            top
        })
    },
    tpl(options) {
        const { data, pageNum } = options;
        let list = ``;
        let tpl = ``;

        // 遍历 data
        data.map((item, index) => {
            // 选择对应的模板
            if(!item.thumbnail_pic_s) {
                // 没有图片
                tpl = tpl0;
            } else if(item.thumbnail_pic_s && !item.thumbnail_pic_s02) {
                // 一张图片
                tpl = tpl1;
            } else if(item.thumbnail_pic_s02 && !item.thumbnail_pic_s03) {
                // 两张张图片
                tpl = tpl2;
            } else if(item.thumbnail_pic_s02) {
                // 三张图片
                tpl = tpl3;
            }

            // pageNum, index 的作用？
            const { uniquekey, url, author_name:author, date, thumbnail_pic_s, thumbnail_pic_s02, thumbnail_pic_s03, title, category  } = item;
            list += tplReplace(tpl, {
                pageNum,
                index,
                uniquekey,
                url,
                author,
                date,
                thumbnail_pic_s,
                thumbnail_pic_s02,
                thumbnail_pic_s03,
                title,
                category
            })
            
        })


        return list;
    },
    imgShow() {
        // 获取所有的图片
        const oImgs = document.querySelectorAll('img');
        [...oImgs].map(img => {
            // 图片加载完成，修改透明度
            img.onload = function() {
                img.style.opacity = 1;
            }
        })
    }
}