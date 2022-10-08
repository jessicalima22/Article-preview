const divProfile = document.querySelector('.profile');
const divBar = document.querySelector('.bar');
const shareIcon = document.querySelector('.divIconImg');

shareIcon.addEventListener('click', ()=>{
    divProfile.style.display = 'none';
    divBar.style.display = 'flex';
    shareIcon.style.display = 'none';


});