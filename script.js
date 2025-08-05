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

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const people = document.getElementById("people").value.trim();
  const days = document.getElementById("days").value.trim();
  const transport = document.getElementById("transport").value;
  const message = document.getElementById("message").value.trim();
  const packageName = document.getElementById("packageName").value || "Adventure Package";

  const whatsappMessage = `Hello Journey Junction Travel! 👋

*Booking Inquiry - ${packageName}*
📛 Name: ${name}
📱 Mobile: ${phone}
👥 People: ${people}
📆 Days: ${days}
🚗 Transport: ${transport}
📝 Message: ${message || "N/A"}

Please confirm availability.`;

  const url = `https://wa.me/919131024965?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, "_blank");
  closeForm();
}

