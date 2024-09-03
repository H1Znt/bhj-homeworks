const cookies = document.getElementById("cookie");
const elementText = document.getElementById("clicker__counter");

function changeSizeBig() {
  cookies.width = 230;
  cookies.height = 230;
  elementText.textContent++;
}

function changeSizeDefault() {
  cookies.width = 200;
  cookies.height = 200;
}

cookies.addEventListener('mousedown', changeSizeBig);
cookies.addEventListener('mouseup', changeSizeDefault);
