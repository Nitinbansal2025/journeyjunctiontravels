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

// 📦 Form: Adventure / Rishikesh
function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const people = document.getElementById("people").value.trim();
  const days = document.getElementById("days").value.trim();
  const date = document.getElementById("date") ? document.getElementById("date").value.trim() : "Not specified";
  const transport = document.getElementById("transport") ? document.getElementById("transport").value : "Not specified";
  const message = document.getElementById("message").value.trim();
  const packageName = document.getElementById("packageName").value || "Adventure Package";

  const whatsappMessage = `Hello Journey Junction Travel! 👋

*Booking Inquiry - ${packageName}*
📛 Name: ${name}
📱 Mobile: ${phone}
👥 People: ${people}
📆 Days: ${days}
📅 Preferred Date: ${date}
🚗 Transport: ${transport}
📝 Message: ${message || "N/A"}

Please confirm availability.`;

  const url = `https://wa.me/919131024965?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, "_blank");
  closeForm();
}

// 💍 Form: Wedding / Pre-Wedding
function sendWeddingMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const people = document.getElementById("people").value.trim();
  const days = document.getElementById("days").value.trim();
  const date = document.getElementById("date").value.trim();
  const food = document.getElementById("food").value;
  const stay = document.getElementById("stay").value;
  const celebration = document.getElementById("celebration").value;
  const message = document.getElementById("message").value.trim();

  const whatsappMessage = `Hello Journey Junction Travel! 👰🤵

*Wedding/Pre-Wedding Booking Inquiry*
📛 Name: ${name}
📱 Mobile: ${phone}
📧 Email: ${email}
👥 Number of People: ${people}
📆 Number of Days: ${days}
📅 Event Date: ${date}
🥗 Food Preference: ${food}
🏨 Stay Type: ${stay}
🎉 Celebration Time: ${celebration}
📝 Notes: ${message || "N/A"}

Please confirm availability.`;

  const url = `https://wa.me/919131024965?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, "_blank");
  closeForm();
}
