$(function() {
  $("#text-subscribe").submit(function (e) {
      e.preventDefault();
      document.getElementById("text-subscribe-button").disabled = true;
      var postData = $(this).serializeArray();
      var formURL = $(this).attr("action");
      $.ajax({
          url: formURL,
          type: "POST",
          data: postData,
          success: function (data, textStatus, jqXHR) {
              document.getElementById("text-subscribe-button").disabled = false;
              if(data.success) {
                document.getElementById("number").value = "";
                document.getElementById("first_name").value = "";
                document.getElementById("last_name").value = "";
                document.getElementById("notification-area").innerHTML = "<div class='alert alert-success'>" + data.message + "</div></div><!-- /.box-body --></div><!-- /.box --></div><!-- /.col -->";
              } else {
                document.getElementById("notification-area").innerHTML = "<div class='alert alert-danger'>" + data.message + "</div></div><!-- /.box-body --></div><!-- /.box --></div><!-- /.col -->";
              }
          },
          error: function (jqXHR, textStatus, errorThrown) {
              //if fails
              document.getElementById("text-subscribe-button").disabled = false;
              document.getElementById("notification-area").innerHTML = "<div class='alert alert-danger'>" + jqXHR.responseJSON.message + "</div></div><!-- /.box-body --></div><!-- /.box --></div><!-- /.col -->";
          }
      });
  });
});
