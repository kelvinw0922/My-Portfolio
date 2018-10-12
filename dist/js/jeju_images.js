var folder = "img/vacations/jeju-2018";

$(document).ready(function() {
  var flag = 0;
  var limit = 2;
  var foundFlag = false;
  $.ajax({
    url: folder,
    success: function(data) {
      $(data)
        .find("a")
        .attr("href", function(i, val) {
          if (i >= flag && i < flag + limit) {
            if (val.match(/\.(JPG)$/)) {
              foundFlag = true;
              $(".album").append("<img src='" + val + "' alt='Jeju Image'>");
            }
            if (!foundFlag) {
              flag += 1;
            }
          }
        });
      flag += limit;
    }
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
      $.ajax({
        url: folder,
        success: function(data) {
          $(data)
            .find("a")
            .attr("href", function(i, val) {
              if (i >= flag && i < flag + limit) {
                if (val.match(/\.(JPG)$/)) {
                  $(".album").append(
                    "<img src='" + val + "' alt='Jeju Image'>"
                  );
                }
              }
            });
          flag += limit;
        }
      });
    }
  });
});
