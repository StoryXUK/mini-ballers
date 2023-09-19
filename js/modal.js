// Get references to the modal and close button
const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Function to close the modal
closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}

// Show the modal when the page loads
window.onload = function() {
    modal.style.display = 'block';
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
} 






  