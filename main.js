let showCoupon = () => {
  let couponDiv = document.getElementById("coupon-code");
  couponDiv.innerHTML = "50OFF-YOWSA!"
}

let buttonElement = document.getElementById("click-here");
buttonElement.addEventListener('click', showCoupon);
