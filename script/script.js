const menu = document.getElementById('menu');
const blur_layer = document.getElementById('blur')

const search_box = document.getElementById('search-box');
const search_icon = document.getElementById('search-icon');
search_box.addEventListener('keyup', () => {
    console.log("the key is pressed");
    search_icon.style.color = '#fff';
});

const apple_search = document.getElementById('apple_search');
const search_sub_menu = document.getElementById('search-sub-menu')
apple_search.addEventListener('click', () => {
    search_sub_menu.classList.toggle('active');
    menu.classList.toggle('active');
    setTimeout(() => {
        blur_layer.classList.toggle('active');
    }, 100)

});


var container = document.getElementById('container');
var containerStyles = window.getComputedStyle(container);
var height_cont = containerStyles.getPropertyValue('height');

console.log(height_cont);
document.getElementById('blur').style.height = height_cont;



m_Store.addEventListener("mouseover", () => {
    menu.classList.add('active')
    blur_layer.classList.add('active');


});
m_Store.addEventListener("mouseout", () => {
    menu.classList.remove('active')
    blur_layer.classList.remove('active');

});

m_Mac.addEventListener("mouseover", () => {
    menu.classList.add('active')
    blur_layer.classList.add('active');


});
m_Mac.addEventListener("mouseout", () => {
    menu.classList.remove('active')
    blur_layer.classList.remove('active');

});

m_iPad.addEventListener("mouseover", () => {
    menu.classList.add('active')
    blur_layer.classList.add('active');


});
m_iPad.addEventListener("mouseout", () => {
    menu.classList.remove('active')
    blur_layer.classList.remove('active');

});

m_iPhone.addEventListener("mouseover", () => {
    menu.classList.add('active')
    blur_layer.classList.add('active');


});
m_iPhone.addEventListener("mouseout", () => {
    menu.classList.remove('active')
    blur_layer.classList.remove('active');

});

m_Watch.addEventListener("mouseover", () => {
    menu.classList.add('active')
    blur_layer.classList.add('active');


});
m_Watch.addEventListener("mouseout", () => {
    menu.classList.remove('active')
    blur_layer.classList.remove('active');

});

m_AirPods.addEventListener("mouseover", () => {
    menu.classList.add('active')
    blur_layer.classList.add('active');


});
m_AirPods.addEventListener("mouseout", () => {
    menu.classList.remove('active')
    blur_layer.classList.remove('active');

});

m_TV.addEventListener("mouseover", () => {
    menu.classList.add('active')
    blur_layer.classList.add('active');


});
m_TV.addEventListener("mouseout", () => {
    menu.classList.remove('active')
    blur_layer.classList.remove('active');

});

m_Entertainment.addEventListener("mouseover", () => {
    menu.classList.add('active')
    blur_layer.classList.add('active');


});
m_Entertainment.addEventListener("mouseout", () => {
    menu.classList.remove('active')
    blur_layer.classList.remove('active');

});

m_Accessories.addEventListener("mouseover", () => {
    menu.classList.add('active')
    blur_layer.classList.add('active');


});
m_Accessories.addEventListener("mouseout", () => {
    menu.classList.remove('active')
    blur_layer.classList.remove('active');

});

m_Support.addEventListener("mouseover", () => {
    menu.classList.add('active')
    blur_layer.classList.add('active');


});
m_Support.addEventListener("mouseout", () => {
    menu.classList.remove('active')
    blur_layer.classList.remove('active');

});


var inn = document.getElementById('active')
var mobile_menu = document.getElementById('mobile-menu');
var apple_logo = document.getElementById('apple-logo');
var apple_searc = document.getElementById('apple_search');
var cart = document.getElementById('cart');


inn.addEventListener('click', ()=> {
    console.log('checked');
    mobile_menu.classList.toggle('active');
    apple_logo.classList.toggle('active');
    apple_searc.classList.toggle('active');
    cart.classList.toggle('active');
})