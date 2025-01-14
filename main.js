document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("upload-form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Image uploaded successfully! Prediction in progress...");
        // Here, you would typically handle the form submission,
        // sending the image to your server or ML model endpoint.
        form.submit();
    });
});
