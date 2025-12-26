function openModal(imageElement) {
    // Get the modal and image elements
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    
    // Display the modal
    modal.style.display = "block";
    
    // Set the source and alt text for the modal image
    modalImg.src = imageElement.src;
    modalImg.alt = imageElement.alt;
    
    // Get the caption text from the <p> tag that follows the image
    const captionSource = imageElement.parentElement.querySelector('p');
    if (captionSource) {
        captionText.innerHTML = captionSource.innerText;
    } else {
        captionText.innerHTML = imageElement.alt;
    }
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
const modal = document.getElementById("myModal");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}