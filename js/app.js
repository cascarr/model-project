// select modal-btn, modal-overlay, close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn, add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const mdOverlay = document.querySelector('.modal-overlay');

//console.log(mdOverlay);

openBtn.addEventListener('click', function() {

    // if (mdOverlay.classList.contains('open-modal')) {

    //     mdOverlay.classList.remove('open-modal');

    // } else {

    //     mdOverlay.classList.add('open-modal');
    // }

    mdOverlay.classList.toggle('open-modal');

});

closeBtn.addEventListener('click', function() {

    mdOverlay.classList.remove('open-modal');

});