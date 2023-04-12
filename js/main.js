let serial = document.querySelector(".serial");
let genrator = document.querySelector(".genrator");

genrator.onclick = function () {
  let char = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let charscount = 10;
  let randomserial = "";
  for (let index = 0; index < charscount; index++) {
    randomserial += char[Math.floor(Math.random() * char.length)];
  }
  serial.innerHTML = randomserial;
};
