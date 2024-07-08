function createElement(data) {
  const para = document.createElement('p'); // create <p> element
  para.textContent = data;
  document.body.appendChild(para);
}

function queryWikipedia(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"', true);
  xhr.onreadystatechange = function () { // call func when state changes
  }
}
