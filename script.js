// Store selected package name globally
let selectedPackage = "";

// Show popup form
function openForm(packageName) {
  selectedPackage = packageName; // Save which package was clicked
  const popup = document.getElementById("formPopup");
  if (popup) popup.classList.add("show");

  const formAlt = document.querySelector(".form-popup");
  if (formAlt) formAlt.style.display = "flex";

  // Set package name in form if the input exists
  const packageInput = document.getElementById("packageName");
  if (packageInput) packageInput.value = packageName;
}

// Close popup form
function closeForm() {
  const popup = document.getElementById("formPopup");
  if (popup) popup.classList.remove("show");

  const formAlt = document.querySelector(".form-popup");
  if (formAlt) formAlt.style.display = "none";
}

// Send message to WhatsApp
function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name")?.value || "";
  const phone = document.getElementById("phone")?.value || "";
  const date = document.getElementById("date")?.value || "";
  const msg = document.getElementById("message")?.value || "";

  const pkg = selectedPackage || document.getElementById("packageName")?.value || "Not specified";

  const text = `Hello! I am interested in booking:%0A📦 Package: ${pkg}%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A📅 Date: ${date}%0A📝 Message: ${msg}`;
  const number = "919131024965"; // Your WhatsApp number
  const link = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

  window.open(link, "_blank");
  closeForm();
}
