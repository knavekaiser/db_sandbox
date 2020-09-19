const $ = (selector) => document.querySelector(selector);

const list = $("#list");
$("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: $("form #name").value,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  e.target.reset();
  fetch("/api", options)
    .then((res) => res.json())
    .then((data) => {
      list.innerHTML = "";
      data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name;
        list.appendChild(li);
      });
    });
});
