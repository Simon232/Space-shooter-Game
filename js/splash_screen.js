window.onload = function() {
  setTimeout(
    function() {
      document.getElementById("mask").classList.add("on");
    }, 1);
  
  setTimeout(
    function() {
      document.getElementById("splash").style.display='none';
    }, 2001);
};