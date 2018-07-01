/* eslint-env browser */
/* global $ */
const formInputsArray = [];

function generateList() {
  $('#formOptionsChosen').empty();
  formInputsArray.forEach((element) => {
    $('<li>' + element + '</li>').appendTo('#formOptionsChosen');
  });
}

$(document).ready(() => {
  // Button events for adding form elements to the formInputsArray
  $('#text').on('click', () => {
    formInputsArray.push('text');
    generateList();
  });

  $('#select').on('click', () => {
    formInputsArray.push('select');
    generateList();
  });

  $('#label').on('click', () => {
    formInputsArray.push('label');
    generateList();
  });

  // Submit form AJAX-style and work with results.
  $('#elementsForm').submit((event) => {
    // Stop form from submitting and use jQuery to POST the formInputsArray object instead
    event.preventDefault();

    const postMethod = $.post('/', {
      elements: formInputsArray,
    });

    // Once the post is done, work with returned data.
    postMethod.done((data) => {
      $('#result').html();
      $('#result').text(data);
    });
  });
});
