document.addEventListener("DOMContentLoaded", () => {
  // fullpage
  new fullpage("#fullpage", {
    //options here
    autoScrolling: true,
    // scrollHorizontally: true,
    scrollingSpeed: 1500,
    anchors: ["firstPage", "secondPage", "3rdPage", "4thpage", "lastPage"],
    menu: "#menu",
    slidesNavigation: true,
  });

  // methods
  fullpage_api.setAllowScrolling(true);
});
