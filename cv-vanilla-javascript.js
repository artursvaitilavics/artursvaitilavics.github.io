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
  document.body.appendChild(navbar);
}

async function createHeader() {
  const header = document.createElement("header");
  const content = document.createElement("div");
  const image = document.createElement("div");

  let jobTitleTag = document.createElement("h5");
  jobTitleTag.setAttribute("id", "jun-soft-dev");

  let titleTag = document.createElement("h3");
  titleTag.setAttribute("id", "about-me");

  let aboutMeTag = document.createElement("p");

  // let nameTag = createElement("h1", "id", "name", await headerData.header.name)
  let nameTag = document.createElement("h1");
  nameTag.setAttribute("id", "name");

  const headerData = await getData();

  let name = document.createTextNode(headerData.header.name);
  nameTag.appendChild(name);

  let jobTitle = document.createTextNode(headerData.header.jobTitle);
  jobTitleTag.appendChild(jobTitle);

  let title = document.createTextNode(headerData.header.title);
  titleTag.appendChild(title);

  const aboutMeData = await fetch("vanilla-js-assets/header-description.txt");
  let aboutMeTextNode = document.createTextNode(await aboutMeData.text());
  aboutMeTag.appendChild(aboutMeTextNode);

  const pic = document.createElement("img");
  pic.setAttribute("id", "my-pic");
  pic.setAttribute("src", "resources/images/AV_LinkedIn.jpg");

  // content.appendChild();
  content.appendChild(nameTag);
  content.appendChild(jobTitleTag);
  content.appendChild(titleTag);
  content.appendChild(aboutMeTag);

  image.appendChild(pic);

  header.appendChild(content);
  header.appendChild(image);

  document.body.appendChild(header);
  
}

function creaetMain() {
  const main = document.createElement("div");
  // main.setAttribute("id", "main");
  // const history = document.createElement("div");
  // history.setAttribute("id", "history");
  // const details = document.createElement("div");
  // details.setAttribute("id", "details");

  // main.appendChild(history);
  // main.appendChild(details);

// document.body.lastElementChild(main)
}

// function createElement(_element, _attribute, _attributeValue, _data) {
//   let element = document.createElement(_element);
//   element.setAttribute(_attribute, _attributeValue);
//   let data = document.createTextNode(_data);

//   return element.appendChild(data);
// }

createNavbar();
createHeader();
creaetMain();
