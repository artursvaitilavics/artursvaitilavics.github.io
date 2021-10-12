// helena

document.title = "CV JavaScript";

async function getData() {
  const response = await fetch("vanilla-js-assets/cv-data.json");
  const data = await response.json();
  return data;
}

async function createNavbar() {
  const navbar = document.createElement("ul");
  navbar.setAttribute("id", "navbar");
  const navbarContent = await getData();
  const buttons = await navbarContent.navbar;

  buttons.forEach((element) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let name = document.createTextNode(element.button.name);

    a.setAttribute("href", element.button.link);
    a.appendChild(name);
    li.appendChild(a);
    navbar.appendChild(li);
  });

  document.getElementById("navbar");

  document.body.appendChild(navbar);
}

createNavbar();
