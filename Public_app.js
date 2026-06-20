async function send() {
    const input = document.getElementById("input");
    const messages = document.getElementById("messages");

    const text = input.value;
    if (!text) return;

    messages.innerHTML += `<div><b>Vous:</b> ${text}</div>`;

    const res = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
    });

    const data = await res.json();

    messages.innerHTML += `<div><b>Bot:</b> ${data.reply}</div>`;

    input.value = "";
}