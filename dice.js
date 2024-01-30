var diceSw = document.getElementById("diceSw");
var dice_value = diceSw.value;
const button = document.getElementById("roll");

diceSw.onchange = function roll() {
  dice_value = diceSw.value;

  console.log(dice_value);
};

button.onclick = function roll() {
  // Maybe i should replace math.random with crypto.
  return (document.getElementById("display").innerHTML =
    Math.floor(Math.random() * dice_value) + 1);
};
