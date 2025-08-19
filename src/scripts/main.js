'use strict';

// write code here
const fieldsNodeList = document.querySelectorAll('.field');
const fields = Array.from(fieldsNodeList);

function setFormsInfo(list) {
  for (const field of list) {
    if (field.children.length === 0) {
      continue;
    }

    const input = field.children[0];
    const inputId = input.getAttribute('id');

    input.placeholder = input.getAttribute('name');

    const label = document.createElement('label');

    label.setAttribute('for', inputId);
    label.textContent = input.getAttribute('name');
    label.classList = 'field-label';

    input.before(label);
  }
}

setFormsInfo(fields);
