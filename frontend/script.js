// document.addEventListener("DOMContentLoaded", function () {
//     // Handle form submission
//     document.getElementById("submitBtn").addEventListener("click", function () {
//         alert("Form Submitted Successfully!");
//     });

//     // Sample vendor data (You can fetch from an API)
//     const vendors = [
//         { name: "Vendor A", amount: "$500", availability: "Available" },
//         { name: "Vendor B", amount: "$700", availability: "Limited" }
//     ];

//     // Populate Vendor List
//     let vendorList = document.getElementById("vendorList");
//     vendors.forEach(vendor => {
//         let vendorDiv = document.createElement("div");
//         vendorDiv.classList.add("vendor-item");
//         vendorDiv.innerHTML = `<strong>${vendor.name}</strong><p>Item Amount: ${vendor.amount}</p><p>Availability: ${vendor.availability}</p>`;
//         vendorList.appendChild(vendorDiv);
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar a");

    // Highlight the active link
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Dynamic welcome message
    const content = document.getElementById("content");
    let messages = [
        "Plan your events with ease!",
        "Find verified caterers & vendors!",
        "Your one-stop event planning solution!"
    ];
    
    let index = 0;
    setInterval(() => {
        content.querySelector("p").textContent = messages[index];
        index = (index + 1) % messages.length;
    }, 3000);
});
