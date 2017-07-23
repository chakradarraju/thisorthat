
function Optn(value) {
  this.elem_ = document.createElement('div');
  this.elem_.classList.add('elem');
  this.input_ = document.createElement('input');
  this.input_.classList.add('optiontext');
  this.input_.value = value;
  this.elem_.appendChild(this.input_);
  return this;
}

Optn.prototype.getElement = function() {
  return this.elem_;
};

Optn.prototype.value = function() {
  return this.input_.value;
};
