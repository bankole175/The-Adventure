// function expression to select element
const selectElement = (s) => document.querySelector(s);
// open th menu onclick
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});
// close th menu onclick
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});
