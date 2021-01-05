/**
 * A function to display the modal window for editing details
 */
function showModal() {
    var backdrop = document.getElementById("backdrop");
    backdrop.style.display = "block";
    var modal =  document.getElementById("modal");
    modal.style.display = "block";

    var wrapper = document.getElementById("modal__form-wrapper");
    wrapper.scrollTop = 0;
}

/**
 * A function to hide the modal window
 */
function hideModal() {
    var backdrop = document.getElementById("backdrop");
    backdrop.style.display = "none";
    var modal =  document.getElementById("modal");
    modal.style.display = "none";
}