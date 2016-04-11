$(document).ready(function() {
        $('.about a').hover(function() {
            $('.aboutPic').addClass('hoverPic');
        }, function(){
            $('.aboutPic').removeClass('hoverPic');
        });
      });