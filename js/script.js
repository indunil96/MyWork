function myFunction() {
  var element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";
}
function stepFunction(event) {
  debugger;
  var element = document.getElementsByClassName("collapse");
  for (var i = 0; i < element.length; i++) {
    if (element[i] !== event.target.ariaControls) {
      element[i].classList.remove("show");
    }
  }
}

const spinnerWrapperEL = document.querySelector('.spinner-wrapper');

setTimeout(()=>{
  spinnerWrapperEL.computedStyleMap.opacity='0';
},1000);