$(document).ready(function () {
  $('.caption1').click(function () {
    $('.kotakmetode').show();
    $('.kotakmetode2').hide();
    $('.kotakmetode3').hide();
    $('.payment-box').hide();
  });

  $('.popupCloseButton').click(function () {
    $('.kotakmetode').hide();
    $('.payment-box').hide();
  });

  $('.caption2').click(function () {
    $('.kotakmetode2').show();
    $('.kotakmetode').hide();
    $('.kotakmetode3').hide();
    $('.payment-box').hide();
  });

  $('.popupCloseButton').click(function () {
    $('.kotakmetode2').hide();
    $('.payment-box').hide();
  });

  $('.caption3').click(function () {
    $('.kotakmetode3').show();
    $('.kotakmetode2').hide();
    $('.kotakmetode').hide();
    $('.payment-box').hide();
  });

  $('.popupCloseButton').click(function () {
    $('.kotakmetode3').hide();
    $('.payment-box').hide();
  });
});



$(document).ready(function () {
  $('.metode1').click(function () {
    $('.payment-box').show();
  });

  $('.metode2').click(function () {
    $('.payment-box').show();
  });

  $('.metode3').click(function () {
    $('.payment-box').show();
  });

  $('.payment-popupCloseButton').click(function () {
    $('.payment-box').hide();
  });
});

$(document).ready(function () {
  $('.payment-button').click(function () {
    $('.paymentsuccess-box').show();
    $('#payment-overlay').show();
    $('.kotakmetode').hide();
    $('.kotakmetode2').hide();
    $('.kotakmetode3').hide();
    $('.payment-box').hide();
  });
});

$('.payment-finish').click(function () {
  $('.kotakpembayaran').hide();
  $('.payment-overlay').hide();
});