(function() {
    
    let button = document.querySelector('.btn-menu');
    console.log(button);
    let drop = document.querySelector('.menu-dropdown');

    button.addEventListener('click', function() {
    
    drop.classList.toggle('menu-dropdown_active');

});

})();

(function() {
    
    let but = document.querySelector('.btn-men');
    console.log(but);
    let dot = document.querySelector('.box');

    but.addEventListener('click', function() {
    
    dot.classList.toggle('.box_active');

});

})();




/*let button = document.querySelector('.btn-menu');
console.log(button);

let menudropdown = document.querySelector('.menu-dropdown');

button.addEventListener('click', function (e) {
    menudropdown.classList.toggle('.menu-dropdown_active');
}); */
