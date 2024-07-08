function createElement(data) {
  const para = document.createElement('p'); // create <p> element
  para.textContent = data;
  document.body.appendChild(para);
}
