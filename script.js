// Store selected package name globally
let selectedPackage = "";

// Show popup form
function openForm(packageName) {
  selectedPackage = packageName; // Save which package was clicked
  const popup = document.getElementById("formPopup");
  if (popup) popup.classList.add("show");

  const formAlt = document.querySelector(".form-popup");
  if (formAlt) formAlt.style.display = "flex";
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

  const text = `Hello! I am interested in b
