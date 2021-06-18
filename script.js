let btn = document.querySelector('.autorization');
let modal = document.querySelector('.modal');
let autorization = document.querySelector('.modal-autorization');
let closeBtn = document.querySelector('.fa-times');

btn.addEventListener('click', function () {
    modal.style.display = "flex";
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
    document.body.style.overflow = 'visible';
})

modal.addEventListener('click', function () {
    if (modal.style.display = "flex") {
        modal.style.display = 'none';
        document.body.style.overflow = 'visible';
    }
})