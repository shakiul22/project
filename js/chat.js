window.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("messageList");
  const input = document.getElementById("messageInput");
  const send = document.getElementById("sendMessageBtn");
  const typing = document.getElementById("typingIndicator");

  if (!list) return;

  function messageTemplate(msg) {
    const body =
      msg.type === "attachment"
        ? `<div class="attachment-card">🖼️ 🎙️ <span>${msg.text}</span></div>`
        : msg.text;

    return `
      <article class="message ${msg.from}">
        <div>${body}</div>
        ${msg.reaction ? `<span class="reaction">${msg.reaction}</span>` : ""}
        <div class="meta-row">
          <span>${msg.from === "sender" ? "You" : "Sadia"}</span>
          <span>${msg.state || "Delivered"}</span>
        </div>
      </article>
    `;
  }

  function renderMessages() {
    list.innerHTML = window.sampleMessages.map(messageTemplate).join("");
    list.scrollTop = list.scrollHeight;
  }

  renderMessages();
  typing.style.display = "none";

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    window.sampleMessages.push({
      from: "sender",
      text,
      state: "Delivered"
    });
    input.value = "";
    renderMessages();

    typing.style.display = "inline-flex";
    setTimeout(() => {
      window.sampleMessages.push({
        from: "receiver",
        text: "Nice! I will review and reply shortly."
      });
      typing.style.display = "none";
      renderMessages();
    }, 1200);
  }

  send?.addEventListener("click", sendMessage);
  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });
});
