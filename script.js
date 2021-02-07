
let toggleShowcase = document.querySelector('.showcase');
let toggleTwo = document.querySelector('.toggle');

toggleTwo.addEventListener('click' , () => {
    toggleTwo.classList.toggle('active');
    toggleShowcase.classList.toggle('active');
});