const faqData = [
    {
        q: "Do you provide transportation across India?",
        a: "Yes. We provide safe and reliable transportation across India."
    }
];

function toggleFAQ(){
    const popup = document.getElementById("faqPopup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}

function sendQuestion(index){
    const chat = document.getElementById("chatBox");

    const userMsg = document.createElement("div");
    userMsg.className = "msg user-msg";
    userMsg.innerText = faqData[index].q;
    chat.appendChild(userMsg);

    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "msg bot-msg";
        botMsg.innerText = faqData[index].a;
        chat.appendChild(botMsg);
        chat.scrollTop = chat.scrollHeight;
    }, 400);
}