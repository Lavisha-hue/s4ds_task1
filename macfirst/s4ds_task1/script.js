document.getElementById("contactForm").addEventListener("submit", (e) => {

  alert("Form submitted!");
  e.preventDefault();
  const formData = new FormData(e.target);

  if (formData.get("name").trim() === ""|| formData.get("email").trim() === "" || formData.get("message").trim() === "") {
    alert("Please fill out all fields before submitting.");
    return; 
  }

  alert("Form submitted successfully!");
  e.target.reset();

});