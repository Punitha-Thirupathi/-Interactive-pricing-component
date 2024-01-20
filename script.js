let view = document.getElementById("pageView");
let cost = document.getElementById("cost");
let cost2= document.getElementById("cost2");
let slider = document.getElementById("price-slider");
let toggle = document.getElementById("billing");
let pageView = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = ["6", "12", "16", "24", "36"];
let isYearly = false;

slider.addEventListener("input", function () {
  updateValue();
  view.innerHTML = pageView[slider.value];

  let value = this.value * 25;

  this.style.background = `linear-gradient(
    to right,
    var(--SoftCyan-FullSliderBar) 0%,
    var(--SoftCyan-FullSliderBar) ${value}%,
    var(--LightGrayishBlue-EmptySliderBar) 0%,
    var(--LightGrayishBlue-EmptySliderBar) 100%
  )`;
});

toggle.addEventListener("change", function () {
  if (isYearly === false) {
    isYearly = true;
  } else {
    isYearly = false;
  }
});
function updateValue() {
  if (isYearly) {
    cost.innerHTML = perMonth[slider.value] * 75;
    cost2.innerHTML = perMonth[slider.value] * 75;
  } else {
    cost.innerHTML = perMonth[slider.value];
    cost2.innerHTML = perMonth[slider.value];
  }
}
