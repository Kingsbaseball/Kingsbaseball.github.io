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


/* For Popup Alerts */
let alert_close_icons = document.querySelectorAll('.alert>.close');
if(alert_close_icons)
{
  alert_close_icons.forEach((alert_close_icon)=>{
    alert_close_icon.addEventListener('click', function()
    {
      this.closest('.alert').classList.add('close');
      
      this.closest('.alert').addEventListener('transitionend', function(event){
        if(event.propertyName=='transform')
        {
          this.remove();
        }
      });
    });
  });
}

/* For Tabs */
function openTab(evt, tabContents) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabContents).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
