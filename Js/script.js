// ==========================
// FAQ DATA
// ==========================

const faqData = [
    {
        q: "Do you provide transportation across India?",
        a: "Yes. We provide safe and reliable transportation across all major cities in India."
    },
    {
        q: "What services do you offer?",
        a: "We offer FTL, PTL, Express Delivery, Warehousing and Logistics solutions."
    },
    {
        q: "What vehicles are available?",
        a: "We have Pickup, 17ft, 20ft trucks, containers and trailers."
    },
    {
        q: "How can I request quotation?",
        a: "Click Inquiry or contact us via phone/email. We respond quickly."
    },
    {
        q: "Why choose Malhar Transport?",
        a: "We ensure on-time delivery, GPS tracking, experienced drivers and transparent pricing."
    }
];

// ==========================
// FAQ POPUP
// ==========================

function toggleFAQ(){

    const popup = document.getElementById("faqPopup");

    popup.style.display =
        popup.style.display === "block" ? "none" : "block";

}

function sendQuestion(index){

    const chat = document.getElementById("chatBox");

    const userMsg = document.createElement("div");
    userMsg.className = "msg user-msg";
    userMsg.innerText = faqData[index].q;
    chat.appendChild(userMsg);

    setTimeout(function(){

        const botMsg = document.createElement("div");
        botMsg.className = "msg bot-msg";
        botMsg.innerText = faqData[index].a;

        chat.appendChild(botMsg);

        chat.scrollTop = chat.scrollHeight;

    },400);

}

// ==========================
// INQUIRY FORM
// ==========================

document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("inquiryForm");

    if(form){

        form.addEventListener("submit", function(e){

            e.preventDefault();

            const inquiryModal =
                bootstrap.Modal.getInstance(
                    document.getElementById("inquiryModal")
                );

            inquiryModal.hide();

            form.reset();

            setTimeout(function(){

                const successModal =
                    new bootstrap.Modal(
                        document.getElementById("successModal")
                    );

                successModal.show();

            },400);

        });

    }
});
 // ==========================
// CLOSE MOBILE MENU
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(function(link){

        link.addEventListener("click", function(){

            if(window.innerWidth < 992){

                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbar);

                bsCollapse.hide();

            }

        });

    });

});