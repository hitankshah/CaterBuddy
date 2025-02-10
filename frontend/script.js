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
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const role = document.getElementById("userRole").value;
            if (role === "vendor") {
                window.location.href = "vendor-dashboard.html";
            } else {
                window.location.href = "caterer-dashboard.html";
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Signup successful! You can now login.");
            window.location.href = "login.html";
        });
    }
});
/*-----login-signup ------*/
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector("#signupForm");
    const loginForm = document.querySelector("#loginForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.querySelector("#name").value;
            const email = document.querySelector("#signupEmail").value;
            const password = document.querySelector("#signupPassword").value;
            const role = document.querySelector("#signupRole").value;

            if (name && email && password && role) {
                localStorage.setItem(email, JSON.stringify({ name, password, role }));
                alert("Signup successful! You can now log in.");
                window.location.href = "login.html"; // Redirect to login page
            } else {
                alert("Please fill in all fields.");
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;

            const user = JSON.parse(localStorage.getItem(email));

            if (user && user.password === password) {
                alert("Login successful!");
                window.location.href = "index.html"; // Redirect to dashboard or home page
            } else {
                alert("Invalid email or password. Please try again.");
            }
        });
    }
});
