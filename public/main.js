const $ = (selector) => document.querySelector(selector);

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

  fetch("/api", options)
    .then((res) => res.json())
    .then((data) => console.log(data));
});
