const colorInput1 = document.getElementById("color-input1");
const colorBox1 = document.getElementById("color-box1");
const colorInput2 = document.getElementById("color-input2");
const colorBox2 = document.getElementById("color-box2");
const colorInput3 = document.getElementById("color-input3");
const colorBox3 = document.getElementById("color-box3");
const colorInput4 = document.getElementById("color-input4");
const colorBox4 = document.getElementById("color-box4");

colorInput1.addEventListener("input",() => {
  colorBox1.style.backgroundColor = colorInput1.value;
});

colorInput2.addEventListener("input",() => {
  colorBox2.style.backgroundColor = colorInput2.value;
});

colorInput3.addEventListener("input",() => {
  colorBox3.style.backgroundColor = colorInput3.value;
});

colorInput4.addEventListener("input",() => {
  colorBox4.style.backgroundColor = colorInput4.value;
});