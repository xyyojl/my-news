import FastClick from './fastclick';

// 初始化 FastClick
window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);
// 多指操作，做处理
document.documentElement.addEventListener('touchmove', function(e) {
    if(e.touches.length > 1) {
        e.preventDefault();
    }
})

// 给移动端设置 rem
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';