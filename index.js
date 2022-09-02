const qrFormEl = document.getElementById("qrForm");
const qrImageEl = document.getElementById("qrImage");
const qrContainerEl = document.getElementById("qrContainer");
const qrInputTextEl = document.getElementById("qrInputText");
const generateBtntEl = document.getElementById("generateBtn");

const renderUrl = (url) => {
  if (!url) return;

  generateBtn.innerText = "Generating Qr Code ...";
  qrImageEl.src = url;

  const onImageload = () => {
    const Interval = setInterval(() => {
      qrContainerEl.classList.add("show");
      clearInterval(Interval);
      generateBtn.innerText = "Generate Qr Code";
    }, 500);
  };
  qrImageEl.addEventListener("load", onImageload);
};
qrFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(qrFormEl);
  const text = formData.get("qrText");
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
  renderUrl(qrCodeUrl);
});
qrInputTextEl.addEventListener("keyup", () => {
  if (!qrInputTextEl.value.trim()) {
    qrContainerEl.classList.remove("show");
  }
});
