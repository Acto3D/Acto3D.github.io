$(function () {
  console.log("load");
  $(".l-top__slider__slick").slick({
    autoplay: true,
    dots: true,
    arrows: false,
    centerMode: true,
    // slidesToShow: 2,
    centerPadding: "30%",
    variableWidth: true,
    // adaptiveHeight: true,
    accessibility: false,
  });

  $("#gotoDownloadSection").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#downloadSection").offset().top - 100,
      },
      400
    );
    console.log($("#downloadSection").height());
  });

  $(window).scroll(function () {
    const wHeight = $(window).scrollTop();
    const windowH = $(window).height();

    const targetH = $("#downloadSection").offset().top;

    console.log(`${windowH + wHeight}, ${targetH}`);

    if (wHeight + wHeight > 300 + $("#downloadSection").offset().top) {
      $(".c-dl-links__img").addClass("isActive");
    } else if (wHeight + wHeight + 300 < $("#downloadSection").offset().top) {
      $(".c-dl-links__img").removeClass("isActive");
    }
  });
});

jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    if (ns.includes("noPreventDefault")) {
      this.addEventListener("touchstart", handle, { passive: false });
    } else {
      this.addEventListener("touchstart", handle, { passive: true });
    }
  },
};

jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    if (ns.includes("noPreventDefault")) {
      this.addEventListener("touchmove", handle, { passive: false });
    } else {
      this.addEventListener("touchmove", handle, { passive: true });
    }
  },
};
