const $ = (selector) => document.querySelector(selector);

const list = $("#list");
$("#api").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: $("#api #name").value,
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

$("#db").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: $("#db #name").value,
  };
  e.target.reset();
  fetch("/db")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
