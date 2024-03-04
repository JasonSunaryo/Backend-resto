$(document).ready(function () {
  $('.caption1').click(function () {
    $('.kotakmetode').show();
  });

  $('.kotakmetode').click(function (event) {
    if (event.target !== this) return; // Jangan menutup popup jika kontennya yang diklik
    $('.kotakmetode').hide();
  });

  $('.popupCloseButton').click(function () {
    $('.kotakmetode').hide();
  });

  $('.caption2').click(function () {
    $('.kotakmetode2').show();
  });
  $('.kotakmetode2').click(function (event) {
    if (event.target !== this) return; // Jangan menutup popup jika kontennya yang diklik
    $('.kotakmetode2').hide();
  });
  $('.popupCloseButton').click(function () {
    $('.kotakmetode2').hide();
  });

  $('.caption3').click(function () {
    $('.kotakmetode3').show();
  });
  $('.kotakmetode3').click(function (event) {
    if (event.target !== this) return; // Jangan menutup popup jika kontennya yang diklik
    $('.kotakmetode3').hide();
  });
  $('.popupCloseButton').click(function () {
    $('.kotakmetode3').hide();
  });

});
