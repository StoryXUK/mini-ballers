// Function to open the modal
function openModal() {
    document.getElementById("modalOverlay").style.display = "flex";
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById("modalOverlay").style.display = "none";
  }
  
  // Open the modal automatically after the modal content has loaded
  window.addEventListener("load", openModal);
  
  // Close the modal when the close button is clicked
  document.getElementById("closeModalButton").addEventListener("click", closeModal);







  