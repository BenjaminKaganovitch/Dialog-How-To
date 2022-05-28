




const OPDialog = document.getElementById('OPDialog');
const ClDialog = document.getElementById('ClDialog');
const dialogM = document.querySelector('dialog');

OPDialog.addEventListener('click', function () {
    dialogM.showModal();
});

ClDialog.addEventListener('click', function () {
    dialogM.close();
});



const OPDIV = document.getElementById('OPDIV');
const ClDiv = document.getElementById('ClDiv');
const divPopup = document.getElementById('div-Popup');

divPopup.style.display = 'none';

OPDIV.addEventListener('click', function () {
    divPopup.style.display = 'block';
});

ClDiv.addEventListener('click', function () {
    divPopup.style.display = 'none';
});
