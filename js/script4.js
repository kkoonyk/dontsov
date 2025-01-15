// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(function() {
//         document.querySelector('.left_sidebar').classList.add('show');
//         document.querySelector('.right_sidebar').classList.add('show');
//     }, 500);  // 500 мс затримка перед початком анімації
// });

window.addEventListener('load', () => {
    const items = document.querySelectorAll('ul li');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 100); // 500 мс затримка між елементами
    });

});