// ссылки как кнопка переключателей
const link1 = document.querySelector("#_link1");
const link2 = document.querySelector("#_link2");
const link3 = document.querySelector("#_link3");

const tabText1 = document.querySelector("#_tabText1");
const tabText2 = document.querySelector("#_tabText2");
const tabText3 = document.querySelector("#_tabText3");

link1.addEventListener("click", function () {
  tabText1.classList.add("content__page_active");
  link1.classList.add("tabs__link_active");

  tabText2.classList.remove("content__page_active");
  tabText3.classList.remove("content__page_active");

  link2.classList.remove("tabs__link_active");
  link3.classList.remove("tabs__link_active");
});

link2.addEventListener("click", function () {
  tabText2.classList.add("content__page_active");
  link2.classList.add("tabs__link_active");

  tabText1.classList.remove("content__page_active");
  tabText3.classList.remove("content__page_active");

  link1.classList.remove("tabs__link_active");
  link3.classList.remove("tabs__link_active");
});

link3.addEventListener("click", function () {
  tabText3.classList.add("content__page_active");
  link3.classList.add("tabs__link_active");

  tabText1.classList.remove("content__page_active");
  tabText2.classList.remove("content__page_active");

  link1.classList.remove("tabs__link_active");
  link2.classList.remove("tabs__link_active");
});
