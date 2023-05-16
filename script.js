const toggleBtn = document.querySelector('.menu-btn')
const toggleBtnIcon = document.querySelector('.menu-btn i')
const dropDownMenu = document.querySelector('.sidebar')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
