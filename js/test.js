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

try{
  new mhstyle_animate().init();
  $(function () {
      var mh_style = new mhstyle_copyboard('.copybutton');
  });
  var element = document.getElementById("jihan");

        function bounce() {
            var element = document.getElementById("bounce");
            element.classList.add("mh-bounce");
            setTimeout(function () {
                element.classList.remove("mh-bounce");
            }, 2000);
        }

        function flash() {
            var element = document.getElementById("flash");
            element.classList.add("mh-flash");
            setTimeout(function () {
                element.classList.remove("mh-flash");
            }, 2000);
        }

        function pulse() {
            var element = document.getElementById("pulse");
            element.classList.add("mh-pulse");
            setTimeout(function () {
                element.classList.remove("mh-pulse");
            }, 2000);
        }

        function rubberBand() {
            var element = document.getElementById("rubberBand");
            element.classList.add("mh-rubberBand");
            setTimeout(function () {
                element.classList.remove("mh-rubberBand");
            }, 2000);
        }

        function shakeX() {
            var element = document.getElementById("shakeX");
            element.classList.add("mh-shakeX");
            setTimeout(function () {
                element.classList.remove("mh-shakeX");
            }, 2000);
        }

        function shakeY() {
            var element = document.getElementById("shakeY");
            element.classList.add("mh-shakeY");
            setTimeout(function () {
                element.classList.remove("mh-shakeY");
            }, 2000);
        }

        function headShake() {
            var element = document.getElementById("headShake");
            element.classList.add("mh-headShake");
            setTimeout(function () {
                element.classList.remove("mh-headShake");
            }, 2000);
        }

        function swing() {
            var element = document.getElementById("swing");
            element.classList.add("mh-swing");
            setTimeout(function () {
                element.classList.remove("mh-swing");
            }, 2000);

        }

        function tada() {
            var element = document.getElementById("tada");
            element.classList.add("mh-tada");
            setTimeout(function () {
                element.classList.remove("mh-tada");
            }, 2000);
        }

        function wobble() {
            var element = document.getElementById("wobble");
            element.classList.add("mh-wobble");
            setTimeout(function () {
                element.classList.remove("mh-wobble");
            }, 2000);
        }

        function jello() {
            var element = document.getElementById("jello");
            element.classList.add("mh-jello");
            setTimeout(function () {
                element.classList.remove("mh-jello");
            }, 2000);
        }

        function heartBeat() {
            var element = document.getElementById("heartBeat");
            element.classList.add("mh-heartBeat");
            setTimeout(function () {
                element.classList.remove("mh-heartBeat");
            }, 2000);
        }

        function backInDown() {
            var element = document.getElementById("backInDown");
            element.classList.add("mh-backInDown");
            setTimeout(function () {
                element.classList.remove("mh-backInDown");
            }, 2000);

        }

        function backInLeft() {
            var element = document.getElementById("backInLeft");
            element.classList.add("mh-backInLeft");
            setTimeout(function () {
                element.classList.remove("mh-backInLeft");
            }, 2000);

        }

        function backInRight() {
            var element = document.getElementById("backInRight");
            element.classList.add("mh-backInRight");
            setTimeout(function () {
                element.classList.remove("mh-backInRight");
            }, 2000);

        }

        function backInUp() {
            var element = document.getElementById("backInUp");
            element.classList.add("mh-backInUp");
            setTimeout(function () {
                element.classList.remove("mh-backInUp");
            }, 2000);

        }

        function backOutDown() {
            var element = document.getElementById("backOutDown");
            element.classList.add("mh-backOutDown");
            setTimeout(function () {
                element.classList.remove("mh-backOutDown");
            }, 2000);

        }

        function backOutLeft() {
            var element = document.getElementById("backOutLeft");
            element.classList.add("mh-backOutLeft");
            setTimeout(function () {
                element.classList.remove("mh-backOutLeft");
            }, 2000);

        }

        function backOutRight() {
            var element = document.getElementById("backOutRight");
            element.classList.add("mh-backOutRight");
            setTimeout(function () {
                element.classList.remove("mh-backOutRight");
            }, 2000);

        }

        function backOutUp() {
            var element = document.getElementById("backOutUp");
            element.classList.add("mh-backOutUp");
            setTimeout(function () {
                element.classList.remove("mh-backOutUp");
            }, 2000);

        }

        function bounceIn() {
            var element = document.getElementById("bounceIn");
            element.classList.add("mh-bounceIn");
            setTimeout(function () {
                element.classList.remove("mh-bounceIn");
            }, 2000);

        }

        function bounceInDown() {
            var element = document.getElementById("bounceInDown");
            element.classList.add("mh-bounceInDown");
            setTimeout(function () {
                element.classList.remove("mh-bounceInDown");
            }, 2000);

        }

        function bounceInLeft() {
            var element = document.getElementById("bounceInLeft");
            element.classList.add("mh-bounceInLeft");
            setTimeout(function () {
                element.classList.remove("mh-bounceInLeft");
            }, 2000);

        }

        function bounceInRight() {
            var element = document.getElementById("bounceInRight");
            element.classList.add("mh-bounceInRight");
            setTimeout(function () {
                element.classList.remove("mh-bounceInRight");
            }, 2000);

        }

        function bounceInUp() {
            var element = document.getElementById("bounceInUp");
            element.classList.add("mh-bounceInUp");
            setTimeout(function () {
                element.classList.remove("mh-bounceInUp");
            }, 2000);

        }

        function bounceOut() {
            var element = document.getElementById("bounceOut");
            element.classList.add("mh-bounceOut");
            setTimeout(function () {
                element.classList.remove("mh-bounceOut");
            }, 2000);

        }

        function bounceOutDown() {
            var element = document.getElementById("bounceOutDown");
            element.classList.add("mh-bounceOutDown");
            setTimeout(function () {
                element.classList.remove("mh-bounceOutDown");
            }, 2000);

        }

        function bounceOutLeft() {
            var element = document.getElementById("bounceOutLeft");
            element.classList.add("mh-bounceOutLeft");
            setTimeout(function () {
                element.classList.remove("mh-bounceOutLeft");
            }, 2000);

        }

        function bounceOutRight() {
            var element = document.getElementById("bounceOutRight");
            element.classList.add("mh-bounceOutRight");
            setTimeout(function () {
                element.classList.remove("mh-bounceOutRight");
            }, 2000);

        }

        function bounceOutUp() {
            var element = document.getElementById("bounceOutUp");
            element.classList.add("mh-bounceOutUp");
            setTimeout(function () {
                element.classList.remove("mh-bounceOutUp");
            }, 2000);

        }

        function fadeIn() {
            var element = document.getElementById("fadeIn");
            element.classList.add("mh-fadeIn");
            setTimeout(function () {
                element.classList.remove("mh-fadeIn");
            }, 2000);

        }

        function fadeInDown() {
            var element = document.getElementById("fadeInDown");
            element.classList.add("mh-fadeInDown");
            setTimeout(function () {
                element.classList.remove("mh-fadeInDown");
            }, 2000);

        }

        function fadeInDownBig() {
            var element = document.getElementById("fadeInDownBig");
            element.classList.add("mh-fadeInDownBig");
            setTimeout(function () {
                element.classList.remove("mh-fadeInDownBig");
            }, 2000);

        }

        function fadeInLeft() {
            var element = document.getElementById("fadeInLeft");
            element.classList.add("mh-fadeInLeft");
            setTimeout(function () {
                element.classList.remove("mh-fadeInLeft");
            }, 2000);

        }

        function fadeInLeftBig() {
            var element = document.getElementById("fadeInLeftBig");
            element.classList.add("mh-fadeInLeftBig");
            setTimeout(function () {
                element.classList.remove("mh-fadeInLeftBig");
            }, 2000);

        }

        function fadeInRight() {
            var element = document.getElementById("fadeInRight");
            element.classList.add("mh-fadeInRight");
            setTimeout(function () {
                element.classList.remove("mh-fadeInRight");
            }, 2000);

        }

        function fadeInRightBig() {
            var element = document.getElementById("fadeInRightBig");
            element.classList.add("mh-fadeInRightBig");
            setTimeout(function () {
                element.classList.remove("mh-fadeInRightBig");
            }, 2000);

        }

        function fadeInUp() {
            var element = document.getElementById("fadeInUp");
            element.classList.add("mh-fadeInUp");
            setTimeout(function () {
                element.classList.remove("mh-fadeInUp");
            }, 2000);

        }

        function fadeInUpBig() {
            var element = document.getElementById("fadeInUpBig");
            element.classList.add("mh-fadeInUpBig");
            setTimeout(function () {
                element.classList.remove("mh-fadeInUpBig");
            }, 2000);

        }

        function fadeInTopLeft() {
            var element = document.getElementById("fadeInTopLeft");
            element.classList.add("mh-fadeInTopLeft");
            setTimeout(function () {
                element.classList.remove("mh-fadeInTopLeft");
            }, 2000);

        }

        function fadeInTopRight() {
            var element = document.getElementById("fadeInTopRight");
            element.classList.add("mh-fadeInTopRight");
            setTimeout(function () {
                element.classList.remove("mh-fadeInTopRight");
            }, 2000);

        }

        function fadeInBottomLeft() {
            var element = document.getElementById("fadeInBottomLeft");
            element.classList.add("mh-fadeInBottomLeft");
            setTimeout(function () {
                element.classList.remove("mh-fadeInBottomLeft");
            }, 2000);

        }

        function fadeInBottomRight() {
            var element = document.getElementById("fadeInBottomRight");
            element.classList.add("mh-fadeInBottomRight");
            setTimeout(function () {
                element.classList.remove("mh-fadeInBottomRight");
            }, 2000);

        }

        function fadeOut() {
            var element = document.getElementById("fadeOut");
            element.classList.add("mh-fadeOut");
            setTimeout(function () {
                element.classList.remove("mh-fadeOut");
            }, 2000);

        }

        function fadeOutDown() {
            var element = document.getElementById("fadeOutDown");
            element.classList.add("mh-fadeOutDown");
            setTimeout(function () {
                element.classList.remove("mh-fadeOutDown");
            }, 2000);
        }

        function fadeOutDownBig() {
            var element = document.getElementById("fadeOutDownBig");
            element.classList.add("mh-fadeOutDownBig");
            setTimeout(function () {
                element.classList.remove("mh-fadeOutDownBig");
            }, 2000);
        }

        function fadeOutLeft() {
            var element = document.getElementById("fadeOutLeft");
            element.classList.add("mh-fadeOutLeft");
            setTimeout(function () {
                element.classList.remove("mh-fadeOutLeft");
            }, 2000);

        }

        function fadeOutLeftBig() {
            var element = document.getElementById("fadeOutLeftBig");
            element.classList.add("mh-fadeOutLeftBig");
            setTimeout(function () {
                element.classList.remove("mh-fadeOutLeftBig");
            }, 2000);

        }

        function fadeOutRight() {
            var element = document.getElementById("fadeOutRight");
            element.classList.add("mh-fadeOutRight");
            setTimeout(function () {
                element.classList.remove("mh-fadeOutRight");
            }, 2000);

        }

        function fadeOutRightBig() {
            var element = document.getElementById("fadeOutRightBig");
            element.classList.add("mh-fadeOutRightBig");
            setTimeout(function () {
                element.classList.remove("mh-fadeOutRightBig");
            }, 2000);

        }

        function fadeOutUp() {
            var element = document.getElementById("fadeOutUp");
            element.classList.add("mh-fadeOutUp");
            setTimeout(function () {
                element.classList.remove("mh-fadeOutUp");
            }, 2000);

        }

        function fadeOutUpBig() {
            var element = document.getElementById("fadeOutUpBig");
            element.classList.add("mh-fadeOutUpBig");
            setTimeout(function () {
                element.classList.remove("mh-fadeOutUpBig");
            }, 2000);

        }

        function fadeOutTopLeft() {
            var element = document.getElementById("fadeOutTopLeft");
            element.classList.add("mh-fadeOutTopLeft");
            setTimeout(function () {
                element.classList.remove("mh-fadeOutTopLeft");
            }, 2000);

        }

        function fadeOutTopRight() {
            var element = document.getElementById("fadeOutTopRight");
            element.classList.add("mh-fadeOutTopRight");
            setTimeout(function () {
                element.classList.remove("mh-fadeOutTopRight");
            }, 2000);

        }

        function fadeOutBottomRight() {
            var element = document.getElementById("fadeOutBottomRight");
            element.classList.add("mh-fadeOutBottomRight");
            setTimeout(function () {
                element.classList.remove("mh-fadeOutBottomRight");
            }, 2000);

        }

        function fadeOutBottomLeft() {
            var element = document.getElementById("fadeOutBottomLeft");
            element.classList.add("mh-fadeOutBottomLeft");
            setTimeout(function () {
                element.classList.remove("mh-fadeOutBottomLeft");
            }, 2000);

        }

        function flip() {
            var element = document.getElementById("flip");
            element.classList.add("mh-flip");
            setTimeout(function () {
                element.classList.remove("mh-flip");
            }, 2000);

        }

        function flipInX() {
            var element = document.getElementById("flipInX");
            element.classList.add("mh-flipInX");
            setTimeout(function () {
                element.classList.remove("mh-flipInX");
            }, 2000);

        }

        function flipInY() {
            var element = document.getElementById("flipInY");
            element.classList.add("mh-flipInY");
            setTimeout(function () {
                element.classList.remove("mh-flipInY");
            }, 2000);

        }

        function flipOutX() {
            var element = document.getElementById("flipOutX");
            element.classList.add("mh-flipOutX");
            setTimeout(function () {
                element.classList.remove("mh-flipOutX");
            }, 2000);

        }

        function flipOutY() {
            var element = document.getElementById("flipOutY");
            element.classList.add("mh-flipOutY");
            setTimeout(function () {
                element.classList.remove("mh-flipOutY");
            }, 2000);

        }

        function lightSpeedInRight() {
            var element = document.getElementById("lightSpeedInRight");
            element.classList.add("mh-lightSpeedInRight");
            setTimeout(function () {
                element.classList.remove("mh-lightSpeedInRight");
            }, 2000);

        }

        function lightSpeedInLeft() {
            var element = document.getElementById("lightSpeedInLeft");
            element.classList.add("mh-lightSpeedInLeft");
            setTimeout(function () {
                element.classList.remove("mh-lightSpeedInLeft");
            }, 2000);

        }

        function lightSpeedOutRight() {
            var element = document.getElementById("lightSpeedOutRight");
            element.classList.add("mh-lightSpeedOutRight");
            setTimeout(function () {
                element.classList.remove("mh-lightSpeedOutRight");
            }, 2000);

        }

        function lightSpeedOutLeft() {
            var element = document.getElementById("lightSpeedOutLeft");
            element.classList.add("mh-lightSpeedOutLeft");
            setTimeout(function () {
                element.classList.remove("mh-lightSpeedOutLeft");
            }, 2000);

        }

        function rotateIn() {
            var element = document.getElementById("rotateIn");
            element.classList.add("mh-rotateIn");
            setTimeout(function () {
                element.classList.remove("mh-rotateIn");
            }, 2000);

        }

        function rotateInDownLeft() {
            var element = document.getElementById("rotateInDownLeft");
            element.classList.add("mh-rotateInDownLeft");
            setTimeout(function () {
                element.classList.remove("mh-rotateInDownLeft");
            }, 2000);

        }

        function rotateInDownRight() {
            var element = document.getElementById("rotateInDownRight");
            element.classList.add("mh-rotateInDownRight");
            setTimeout(function () {
                element.classList.remove("mh-rotateInDownRight");
            }, 2000);

        }

        function rotateInUpLeft() {
            var element = document.getElementById("rotateInUpLeft");
            element.classList.add("mh-rotateInUpLeft");
            setTimeout(function () {
                element.classList.remove("mh-rotateInUpLeft");
            }, 2000);

        }

        function rotateInUpRight() {
            var element = document.getElementById("rotateInUpRight");
            element.classList.add("mh-rotateInUpRight");
            setTimeout(function () {
                element.classList.remove("mh-rotateInUpRight");
            }, 2000);

        }

        function rotateOut() {
            var element = document.getElementById("rotateOut");
            element.classList.add("mh-rotateOut");
            setTimeout(function () {
                element.classList.remove("mh-rotateOut");
            }, 2000);

        }

        function rotateOutDownLeft() {
            var element = document.getElementById("rotateOutDownLeft");
            element.classList.add("mh-rotateOutDownLeft");
            setTimeout(function () {
                element.classList.remove("mh-rotateOutDownLeft");
            }, 2000);
        }

        function rotateOutDownRight() {
            var element = document.getElementById("rotateOutDownRight");
            element.classList.add("mh-rotateOutDownRight");
            setTimeout(function () {
                element.classList.remove("mh-rotateOutDownRight");
            }, 2000);
        }

        function rotateOutUpLeft() {
            var element = document.getElementById("rotateOutUpLeft");
            element.classList.add("mh-rotateOutUpLeft");
            setTimeout(function () {
                element.classList.remove("mh-rotateOutUpLeft");
            }, 2000);

        }

        function rotateOutUpRight() {
            var element = document.getElementById("rotateOutUpRight");
            element.classList.add("mh-rotateOutUpRight");
            setTimeout(function () {
                element.classList.remove("mh-rotateOutUpRight");
            }, 2000);

        }

        function hinge() {
            var element = document.getElementById("hinge");
            element.classList.add("mh-hinge");
            setTimeout(function () {
                element.classList.remove("mh-hinge");
            }, 2000);

        }

        function jackInTheBox() {
            var element = document.getElementById("jackInTheBox");
            element.classList.add("mh-jackInTheBox");
            setTimeout(function () {
                element.classList.remove("mh-jackInTheBox");
            }, 2000);

        }

        function rollIn() {
            var element = document.getElementById("rollIn");
            element.classList.add("mh-rollIn");
            setTimeout(function () {
                element.classList.remove("mh-rollIn");
            }, 2000);

        }

        function rollOut() {
            var element = document.getElementById("rollOut");
            element.classList.add("mh-rollOut");
            setTimeout(function () {
                element.classList.remove("mh-rollOut");
            }, 2000);

        }

        function zoomIn() {
            var element = document.getElementById("zoomIn");
            element.classList.add("mh-zoomIn");
            setTimeout(function () {
                element.classList.remove("mh-zoomIn");
            }, 2000);

        }

        function zoomInDown() {
            var element = document.getElementById("zoomInDown");
            element.classList.add("mh-zoomInDown");
            setTimeout(function () {
                element.classList.remove("mh-zoomInDown");
            }, 2000);
        }

        function zoomInLeft() {
            var element = document.getElementById("zoomInLeft");
            element.classList.add("mh-zoomInLeft");
            setTimeout(function () {
                element.classList.remove("mh-zoomInLeft");
            }, 2000);
        }

        function zoomInRight() {
            var element = document.getElementById("zoomInRight");
            element.classList.add("mh-zoomInRight");
            setTimeout(function () {
                element.classList.remove("mh-zoomInRight");
            }, 2000);
        }

        function zoomInUp() {
            var element = document.getElementById("zoomInUp");
            element.classList.add("mh-zoomInUp");
            setTimeout(function () {
                element.classList.remove("mh-zoomInUp");
            }, 2000);
        }

        function zoomOut() {
            var element = document.getElementById("zoomOut");
            element.classList.add("mh-zoomOut");
            setTimeout(function () {
                element.classList.remove("mh-zoomOut");
            }, 2000);
        }

        function zoomOutDown() {
            var element = document.getElementById("zoomOutDown");
            element.classList.add("mh-zoomOutDown");
            setTimeout(function () {
                element.classList.remove("mh-zoomOutDown");
            }, 2000);
        }

        function zoomOutLeft() {
            var element = document.getElementById("zoomOutLeft");
            element.classList.add("mh-zoomOutLeft");
            setTimeout(function () {
                element.classList.remove("mh-zoomOutLeft");
            }, 2000);
        }

        function zoomOutRight() {
            var element = document.getElementById("zoomOutRight");
            element.classList.add("mh-zoomOutRight");
            setTimeout(function () {
                element.classList.remove("mh-zoomOutRight");
            }, 2000);
        }

        function zoomOutUp() {
            var element = document.getElementById("zoomOutUp");
            element.classList.add("mh-zoomOutUp");
            setTimeout(function () {
                element.classList.remove("mh-zoomOutUp");
            }, 2000);
        }

        function slideInDown() {
            var element = document.getElementById("slideInDown");
            element.classList.add("mh-slideInDown");
            setTimeout(function () {
                element.classList.remove("mh-slideInDown");
            }, 2000);
        }

        function slideInLeft() {
            var element = document.getElementById("slideInLeft");
            element.classList.add("mh-slideInLeft");
            setTimeout(function () {
                element.classList.remove("mh-slideInLeft");
            }, 2000);
        }

        function slideInRight() {
            var element = document.getElementById("slideInRight");
            element.classList.add("mh-slideInRight");
            setTimeout(function () {
                element.classList.remove("mh-slideInRight");
            }, 2000);
        }

        function slideInUp() {
            var element = document.getElementById("slideInUp");
            element.classList.add("mh-slideInUp");
            setTimeout(function () {
                element.classList.remove("mh-slideInUp");
            }, 2000);
        }

        function slideOutDown() {
            var element = document.getElementById("slideOutDown");
            element.classList.add("mh-slideOutDown");
            setTimeout(function () {
                element.classList.remove("mh-slideOutDown");
            }, 2000);
        }

        function slideOutLeft() {
            var element = document.getElementById("slideOutLeft");
            element.classList.add("mh-slideOutLeft");
            setTimeout(function () {
                element.classList.remove("mh-slideOutLeft");
            }, 2000);
        }

        function slideOutRight() {
            var element = document.getElementById("slideOutRight");
            element.classList.add("mh-slideOutRight");
            setTimeout(function () {
                element.classList.remove("mh-slideOutRight");
            }, 2000);
        }

        function slideOutUp() {
            var element = document.getElementById("slideOutUp");
            element.classList.add("mh-slideOutUp");
            setTimeout(function () {
                element.classList.remove("mh-slideOutUp");
            }, 2000);
        }
}catch{}