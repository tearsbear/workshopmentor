      $(document).ready(function () {
        //get slider books
        var swiper = app.swiper.get(".swiper-container");
        //change slider index books when page is load
        swiper.slideNext();

        //get slider music
        var swiperMusic = app.swiper.get(".swiper-container-music");

        //handle slider books changes
        swiper.on("slideChange", function () {
          //get index or id of the slide
          var theslide = swiper.activeIndex;

          //if slider index or id is changed (starts with zero)
          //change background color, and text
          if (theslide == 0) {
            $(".bg-header").css("background-color", "#e8a885");
            $(".header-title").text("WHERE THE CRAWDADS SING");
            $(".header-desc").text(
              "'Beautifully written at times, and with an interesting, plausible story. '"
            );
          } else if (theslide == 1) {
            $(".bg-header").css("background-color", "#e6e367");
            $(".header-title").text("My Thoughts Exactly");
            $(".header-desc").text("'An unflicing, unputdownable book'");
          } else if (theslide == 2) {
            $(".bg-header").css("background-color", "#82cdca");
            $(".header-title").text("Next Level Basic");
            $(".header-desc").text(
              "'Basic is not just a next level of this story'"
            );
          }
        });

        //handle slider musick changes
        swiperMusic.on("slideChange", function () {
          //get index or id of the slide
          var theslides = swiperMusic.activeIndex;

          //if slider index or id is changed (starts with zero)
          //change background color, and text
          if (theslides == 0) {
            $(".bg-header-music").css("background-color", "#222222");
            $(".header-title-music").text("HONNE");
          } else if (theslides == 1) {
            $(".bg-header-music").css("background-color", "#ec3c62");
            $(".header-title-music").text("LANY");
          } else if (theslides == 2) {
            $(".bg-header-music").css("background-color", "#f2a0b7");
            $(".header-title-music").text("Taylor Swift");
          }
        });
      });