'use strict';

$(document).ready(function() {
  $('.js-input').on('keyup keydown keypress change paste', function() {
    var allError = 0;
    allError = allError + validateInput($('.form__input'));
    allError = allError + validateCheckbox($('.form__checkbox'));
    allError = validateEmail($('#email').val()) ? allError : allError + 1;

    if (!allError) {
      $('.form__submit')
        .removeClass('form__submit--no-active')
        .prop('disabled', false);
    } else {
      $('.form__submit')
        .addClass('form__submit--no-active')
        .prop('disabled', true);
    }
  });

  $('.form').submit(function(e) {
    e.preventDefault();
    alert('Произошел переход, но это надо настраивать на стороне сервера');
  });
});

function validateInput($item) {
  var errorCount = 0;

  $item.each(function() {
    var valueTrim = $.trim($(this).val());
    if (!valueTrim) {
      errorCount = errorCount + 1;
    }
  });

  return errorCount;
}

function validateCheckbox($item) {
  var errorCount = 0;

  $item.each(function() {
    var value = $(this).prop('checked');
    if (!value) {
      errorCount = errorCount + 1;
    }
  });
  return errorCount;
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
