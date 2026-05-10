function sendToWhatsapp() {
    // 1. WhatsApp number (Verified)
    let phoneNumber = "919486282381"; 

    // 2. Get values from the form
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let location = document.getElementById('place').value;
    let description = document.getElementById('description').value;

    // 3. Validation (Fixed: changed 'car' to 'description')
    if (name.trim() === "" || phone.trim() === "") {
        alert("Please enter your Name and Phone Number so we can reach you.");
        return;
    }

    // 4. Create the encoded message
    // Using *Text* creates Bold text in WhatsApp
    let message = "🚗 *New Service Inquiry - Door2Door*%0a%0a" +
        "*Client Name:* " + encodeURIComponent(name) + "%0a" +
        "*Phone:* " + encodeURIComponent(phone) + "%0a" +
        "*Location:* " + encodeURIComponent(location) + "%0a" +
        "*Requirements:* " + encodeURIComponent(description) + "%0a%0a" +
        "Please confirm availability for this service.";

    // 5. Open WhatsApp URL
    let url = "https://wa.me/" + phoneNumber + "?text=" + message;
    window.open(url, '_blank').focus();
}

// window.addEventListener('load', function() {
//     const preloader = document.getElementById('preloader');
//     // Small delay for smooth transition
//     setTimeout(() => {
//         preloader.classList.add('loader-hide');
//     }, 1000); 
// });