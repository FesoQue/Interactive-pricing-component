const slider = document.querySelector('.slider');
const price_demo = document.querySelector('.price-demo');
const views = document.querySelector('.views');
const checkbox = document.querySelector('.checkbox');
const price_fig = document.querySelector('.figure');
const time = document.querySelector('.time');
const toggle = document.querySelector('.toggle');

time.innerHTML = '<p>/ month</p>';
const update_price = () => {
  let price;
  time.innerHTML = '<p>/ month</p>';
  if (slider.value >= 0 && slider.value <= 20) {
    views.textContent = '10k';
    // price_fig.textContent = '8';
    price = 8;
  } else if (slider.value > 20 && slider.value <= 40) {
    views.textContent = '50k';
    // price_fig.textContent = '12';
    price = 12;
  } else if (slider.value > 40 && slider.value <= 60) {
    views.textContent = '100k';
    // price_fig.textContent = '16';
    price = 16;
  } else if (slider.value > 60 && slider.value <= 80) {
    views.textContent = '500k';
    // price_fig.textContent = '24';
    price = 24;
  } else if (slider.value > 80 && slider.value <= 100) {
    views.textContent = '1M';
    // price_fig.textContent = '36';
    price = 36;
  }

  // * when toggle is checked

  if (checkbox.checked == true) {
    time.innerHTML = '<p>/ year</p>';
    price_demo.textContent = `$${(price - (price * 25) / 100).toFixed(2)}`;
  } else {
    price_demo.textContent = `$${price}.00`;
  }
  slider.style.background = `linear-gradient(to right, #a5f3eb 0%, #a5f3eb ${slider.value}%, #eaeefb ${slider.value}%, #eaeefb 100%)`;
};
slider.addEventListener('input', update_price);
checkbox.addEventListener('click', update_price);
