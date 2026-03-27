window.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("chatList");
  const search = document.getElementById("chatSearch");

  if (!list || !window.chatUsers) return;

  function renderChats(query = "") {
    const filtered = window.chatUsers.filter((u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.lastMessage.toLowerCase().includes(query.toLowerCase())
    );

    list.innerHTML = filtered
      .map(
        (u) => `
          <a class="chat-item" href="chat.html">
            <img class="avatar" src="${u.avatar}" alt="${u.name}" />
            <div class="chat-meta">
              <h3>${u.name}</h3>
              <p><span class="status ${u.online ? "online" : "offline"}"></span>${u.lastMessage}</p>
            </div>
            <span class="stamp">${u.time}</span>
          </a>
        `
      )
      .join("");
  }

  renderChats();

  search?.addEventListener("input", (e) => {
    renderChats(e.target.value || "");
  });
});
