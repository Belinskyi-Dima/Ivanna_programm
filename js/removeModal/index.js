function removeModal(previewContainer) {
    const closeBtn = document.querySelector(".fas");

    closeBtn.onclick = () =>{

        document.body.classList.toggle("modal-open")
        previewContainer.style.display = 'none';
        previewContainer
    };
}

 export default removeModal;