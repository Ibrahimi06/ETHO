function previewImage(event, imageId) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById(imageId).src = e.target.result;
    };
    reader.readAsDataURL(file);
}