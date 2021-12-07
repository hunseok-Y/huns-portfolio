document.addEventListener("DOMContentLoaded", () => {
  const projectSwiper = new Swiper(".projects__swiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // fullpage
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    // 너비가 1000일때 수동 원페이지 -> 스크롤
    responsiveWidth: 768,
    // scrollHorizontally: true,
    scrollingSpeed: 1500,
    anchors: ["firstPage", "secondPage", "3rdPage", "4thpage", "lastPage"],
    menu: "#menu",
    slidesNavigation: true,
    afterLoad: function (origin, destination, direction) {
      if (origin === 2) {
        projectSwiper.update();
      }
    },
  });
});
