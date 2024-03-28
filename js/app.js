$(document).ready(function () {
  $('.dropdown').hover(function () {
    $(this).addClass('show');
    $(this).find('.dropdown-menu').addClass('show');
  }, function () {
    $(this).removeClass('show');
    $(this).find('.dropdown-menu').removeClass('show');
  });


  $('.sidebar li').click(function () {

    var id = $(this).attr('id');
    var category_list = $(this).closest('#category-list');
    category_list.hide();
    var list_values_to_show = $('#' + id + '-list');
    list_values_to_show.fadeIn();

    list_values_to_show.on('click', '.back-to-category', function () {
      category_list.fadeIn();
      list_values_to_show.hide();

    });

  });
  $('.top-5-products').click(function (e) {
    e.preventDefault();

  });

});


function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}
