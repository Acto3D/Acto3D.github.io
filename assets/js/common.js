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
