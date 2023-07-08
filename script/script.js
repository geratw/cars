document.getElementById("main-action").onclick = function () {
    document.getElementById("car").scrollIntoView({behavior:"smooth"})
}

var butttons = document.getElementsByClassName("car-button");
for (var i = 0; i < butttons.length; i++) {
    butttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior:"smooth"})
    }
}

document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Пожалуйста введите имя");
    } else if (document.getElementById("phone").value === "") {
        alert("Пожалуйста введите номер телефона");
    } else if (document.getElementById("cars").value === "") {
        alert("Пожалуйста введите марку автомобиля");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';
    })
});