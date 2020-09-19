const $ = (selector) => document.querySelector(selector);

const list = $("#nedbList");
$("#nedb").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: $("#nedb #name").value,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  e.target.reset();
  fetch("/nedb", options)
    .then((res) => res.json())
    .then((data) => {
      console.log("nedb", data);
      list.innerHTML = "";
      data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name;
        list.appendChild(li);
      });
    });
});
$("#mongo").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: $("#mongo #name").value,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  e.target.reset();
  fetch("/mongo", options)
    .then((res) => res.json())
    .then((data) => {
      console.log("mongo", data);
      list.innerHTML = "";
      data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name;
        list.appendChild(li);
      });
    });
});
