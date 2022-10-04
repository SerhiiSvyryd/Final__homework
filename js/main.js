(function() {
    
    let button = document.querySelector('.btn-menu');
    console.log(button);
    let drop = document.querySelector('.menu-dropdown');

    button.addEventListener('click', function() {
    
    drop.classList.toggle('menu-dropdown_active');

});

})();




/*let button = document.querySelector('.btn-menu');
console.log(button);

let menudropdown = document.querySelector('.menu-dropdown');

button.addEventListener('click', function (e) {
    menudropdown.classList.toggle('.menu-dropdown_active');
}); */
