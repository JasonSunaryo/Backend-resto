$(document).ready(function () {
    $('.caption').click(function () {
      $('.kotakmetode').show();
    });
  
    $('.kotakmetode').click(function (event) {
      if (event.target !== this) return; // Jangan menutup popup jika kontennya yang diklik
      $('.kotakmetode').hide();
    });
  
    $('.popupCloseButton').click(function () {
      $('.kotakmetode').hide();
    });
  });
  