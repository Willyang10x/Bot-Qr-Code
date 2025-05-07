function gerarQRCode() {
  const entrada = document.getElementById("entrada").value.trim();
  const qrCodeDiv = document.getElementById("qr-code");
  const baixarLink = document.getElementById("baixar");

  qrCodeDiv.innerHTML = "";
  baixarLink.style.display = "none";

  if (entrada === "") {
    alert("Digite um link válido!");
    return;
  }

  new QRCode(qrCodeDiv, {
    text: entrada,
    width: 200,
    height: 200,
    correctLevel: QRCode.CorrectLevel.H
  });

  setTimeout(() => {
    const imgTag = qrCodeDiv.querySelector("img");
    if (imgTag) {
      baixarLink.href = imgTag.src;
      baixarLink.style.display = "inline-block";
    }
  }, 300);

  qrCodeDiv.style.display = "flex";
}