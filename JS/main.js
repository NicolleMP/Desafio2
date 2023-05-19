const elipse = document.getElementById("elipse");

elipse.addEventListener("click", function() {
  elipse.style.backgroundColor = newFunction();

  function newFunction() {
    return "red";
  }
});