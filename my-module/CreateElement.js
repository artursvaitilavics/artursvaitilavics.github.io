class CreateElement {
  constructor(_element, _data) {
    let element = document.createElement(_element);
    let data = document.createTextNode(_data);

    element.appendChild(data);
    document.body.appendChild(element);
  }
}
