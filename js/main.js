var container = document.getElementById('container');
var input = document.getElementById('input');
var content = document.getElementById('content');
var help = document.getElementById('help');
var result = document.getElementById('result');
var controls = document.getElementById('controls');
var options = [];

function addoption() {
  if (input.value == '') return;
  var newoption = new Optn(input.value);
  if (options.length !== 0) {
    content.appendChild(document.createTextNode('or'));
  }
  content.appendChild(newoption.getElement());
  options.push(newoption);
  input.value = "";
}

input.onkeypress = function(e) {
  if (e.keyCode === 13 || e.keyCode === 10) {
    if (e.ctrlKey) {
      decide();
    } else {
      addoption();
    }
  }
};


function decide() {
  var selected = options[Math.floor(Math.random() * options.length)];
  result.innerHTML = '';
  result.appendChild(document.createTextNode(selected.value() + ' '));
  var startover = document.getElementById('startover');
  result.appendChild(startover);
  startover.focus();
  content.classList.add('hidden');
  result.classList.remove('hidden');
  controls.classList.add('hidden');
}

input.focus();
