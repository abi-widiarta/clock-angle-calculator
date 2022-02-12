// list dom selection

const range = document.querySelector(".input-range");
const rangeNumber = document.querySelector(".range-number");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const inputMinute = document.querySelector(".input-minute");
const inputHour = document.querySelector(".input-hour");
const buttonOk = document.getElementById("button-ok");
const lancip = document.querySelector(".lancip");
const tumpul = document.querySelector(".tumpul");

// event click button OK (main program)
buttonOk.addEventListener("click", function () {
  // list dom selection #2
  const valueHour = inputHour.value;
  const valueMinute = inputMinute.value;
  let valueHourFinal;
  let valueLancip;
  let valueTumpul;

  // value lancip tumpul check
  if (valueHour < 12) {
    valueLancip = 360 - (valueHour * 30 + valueMinute / 2) - (360 - valueMinute * 6);
    valueTumpul = 360 - valueLancip;

    if (valueLancip < 0) {
      valueLancip = valueLancip * -1;
      valueTumpul = 360 - valueLancip;
    }
  } else if (valueHour >= 12) {
    valueLancip = 720 - (valueHour * 30 + valueMinute / 2) - (360 - valueMinute * 6);
    valueTumpul = 360 - valueLancip;

    if (valueLancip < 0) {
      valueLancip = valueLancip * -1;
      valueTumpul = 360 - valueLancip;
    }
  }

  // for value hour final check
  if (valueMinute == "00") {
    valueHourFinal = valueHour * 30;
  } else if (valueMinute != "00") {
    valueHourFinal = valueHour * 30 + valueMinute / 2;
  }

  // console.log("value Hour : " + valueHour);
  // console.log("value Minute : " + valueMinute);
  // console.log("value Hour Final : " + valueHourFinal);

  // ubah rotate jarum jam
  hour.style.transform = "rotateZ(" + valueHourFinal + "deg" + ")";
  minute.style.transform = "rotateZ(" + valueMinute * 6 + "deg" + ")";

  // pengisian value info
  if (valueTumpul == 360 || valueLancip == 360) {
    tumpul.innerHTML = `Sudut Penuh : 360 derajat`;
  } else if (valueLancip < valueTumpul) {
    lancip.innerHTML = `Sudut Lancip : ${valueLancip} derajat`;
    tumpul.innerHTML = `Sudut Tumpul : ${valueTumpul} derajat`;
  } else if (valueLancip > valueTumpul) {
    lancip.innerHTML = `Sudut Lancip : ${valueTumpul} derajat`;
    tumpul.innerHTML = `Sudut Tumpul : ${valueLancip} derajat`;
  }

  // check jam dan menit number atau tidak
  if (!isNaN(valueHour) == false && !isNaN(valueMinute) == false) {
    alert("Jam dan Menit yang dimasukkan harus dalam angka!");
  } else if (!isNaN(valueHour) == false) {
    alert("Jam yang dimasukkan harus dalam angka!");
  } else if (!isNaN(valueMinute) == false) {
    alert("Menit yang dimasukkan harus dalam angka!");
  }

  // check jam dan menit angka valid atau tidak
  if (valueHour > 24 && valueMinute > 60) {
    alert("Masukkan Jam dan Menit dengan Benar!");
    lancip.innerHTML = `Sudut Lancip : `;
    tumpul.innerHTML = `Sudut Tumpul : `;
    hour.style.transform = "rotateZ(0deg)";
    minute.style.transform = "rotateZ(0deg)";
  } else if (valueMinute > 60) {
    alert("Masukkan Menit dengan Benar!");
    lancip.innerHTML = `Sudut Lancip : `;
    tumpul.innerHTML = `Sudut Tumpul : `;
    hour.style.transform = "rotateZ(0deg)";
    minute.style.transform = "rotateZ(0deg)";
  } else if (valueHour > 24) {
    alert("Masukkan Jam dengan Benar!");
    lancip.innerHTML = `Sudut Lancip : `;
    tumpul.innerHTML = `Sudut Tumpul : `;
    hour.style.transform = "rotateZ(0deg)";
    minute.style.transform = "rotateZ(0deg)";
  }
});
