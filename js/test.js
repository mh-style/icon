try{
    $(function ($) {
      $.supermodal({
        backButton: true,
        title: '',
        closeButtonIcon: 'mh mhi-cancel-circle1',
        showTitle: true,

      });
    });
}catch{}
try{
    var gridButton = document.querySelectorAll(".mh-grid-button .mhi-view-module");
    var grid_body = document.querySelectorAll(".mh-icons");

    function grid_button() {
      for (var i = 0; i < grid_body.length; i++) {
        grid_body[i].classList.toggle("mh-grid-body");
      }
      for (var i = 0; i < gridButton.length; i++) {
        gridButton[i].classList.toggle("mhi-view-module");
        gridButton[i].classList.toggle("mhi-view-column");
      }
    }
}catch{}
try{
    var count_number = document.querySelectorAll(".mh-count-number span");
    var icon_number = document.querySelectorAll(".mh-jihan").length;
    for (var i = 0; i < icon_number; i++) {
      count_number[i].innerText = icon_number;
    }
}catch{}
try{
    var mh_style = new mhstyle_copyboard('.copybutton');
    var scrollbtn = document.getElementById("scrollbtn");

    window.onscroll = function () {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        scrollbtn.style.display = "block";
      } else {
        scrollbtn.style.display = "none";

      }
    };
}catch{}
try{
    function topFunction() {
      window.scrollTo({
        top: 0,
        right: 0,
        behavior: 'smooth'
      });
    }
}catch{}
try{
    function sortlist() {
      var list, i, switching, listitems, shouldSwitch;
      list = document.querySelector('.mh-icon-line');
      switching = true;
      while (switching) {
        switching = false;
        listitems = list.querySelector('.mh-icons .mh-icon');
        for (i = 0; i < (listitems.length - 1); i++) {
          shouldSwitch = false;
          if (listitems[i].innerHTML.toLowerCase() > listitems[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
        listitems[i].parentNode.insertBefore(listitems[i + 1], listitems[i]);
        switching = true;
      }
    }
}catch{}
try{
    function myFunction() {
      var input = document.getElementById("myInput");
      var filter = input.value.toUpperCase();
      var ul = document.getElementById("myUL");
      var li = ul.getElementsByClassName("mh-icons");
      for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByClassName("mh-icon-name")[0];
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }
}catch{}