/**
 * loop over sections to get initial data.
 * @returns array of objects
 */
const getNavData = () => {
  const sections = document.querySelectorAll("section");
  const data = [];

  sections.forEach((section) => {
    let el = {};
    el.name = section.getAttribute("data-nav");
    el.id = section.getAttribute("id");
    data.push(el);
  });

  return data;
};

/**
 * generate nav links and set it's attribute and event listener.
 * @param {Array} data array of sections data object
 */
const generateNavLinks = (data) => {
  // grab the 'ul' and create fragment.
  const nav = document.getElementById("navbar__list");
  const navContainer = document.createDocumentFragment();

  // loop through sections data
  data.forEach((el) => {
    // creat needed elements - 'li' and 'a'
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");

    // attach name, attributes and event listener to - 'a'
    navLink.textContent = el.name;
    navLink.classList.add("menu__link", el.id);
    navLink.setAttribute("data-name", el.id);
    navLink.addEventListener("click", navLinkScroll);

    // append childern to each parent
    navItem.appendChild(navLink);
    navContainer.appendChild(navItem);
  });
  // finally attach fragment to 'ul'
  nav.appendChild(navContainer);
};

/**
 * listener function used to apply smooth scroll and toggle activeness through nav links.
 * @param {Event} evt HTML event
 */
const navLinkScroll = (evt) => {
  evt.preventDefault();
  // this line to remove show class in case link clicked while mobile view
  evt.target.parentElement.parentElement.classList.remove("show");
  toggleActiveness(
    "data-name",
    evt.target.getAttribute("data-name"),
    "a",
    "menu__link__active"
  );
  // apply smooth scroll
  let target = document.getElementById(evt.target.getAttribute("data-name"));
  target.scrollIntoView({ behavior: "smooth" });
};

/**
 * loop through elements and apply active class only if clicked or appeare in viewport.
 * @param {string} attrName attribute name to validate if it is really the item to apply the class.
 * @param {string} attrValue attribute value to validate if it is really the item to apply the class.
 * @param {string} tag which tag to loop through and apply the class.
 * @param {string} classToToggle the class to apply
 */
const toggleActiveness = (attrName, attrValue, tag, classToToggle) => {
  // select all elements which match provided tag.
  const elements = document.querySelectorAll(tag);

  // loop through elements and apply class if condition is true.
  elements.forEach((element) => {
    if (element.getAttribute(attrName) === attrValue) {
      element.classList.add(classToToggle);
    } else {
      element.classList.remove(classToToggle);
    }
  });
};

/**
 * listener functions used for check whick section currently appear in viewport
 * and apply active class as well as the nav links
 */
const toggleSectionsActiveness = () => {
  const sections = document.querySelectorAll("section");

  let activeIndex = -1;
  sections.forEach((section, index) => {
    let rect = section.getBoundingClientRect();

    if (rect.top >= -300 && rect.top <= 100) {
      temp = rect.top;
      activeIndex = index;
    }
  });
  let el = sections[activeIndex];
  if (el) {
    toggleActiveness(
      "id",
      el.getAttribute("id"),
      "section",
      "your-active-class"
    );

    navLink = document.querySelector(`.${el.getAttribute("id")}`);
    toggleActiveness(
      "data-name",
      navLink.getAttribute("data-name"),
      "a",
      "menu__link__active"
    );
  }
};

/**
 * used to add functionalty for the menu icon when screen less 500
 * by toggle show class.
 */
const menuMobileToggle = () => {
  const toggleIcon = document.getElementById("navbar__icon");
  const nav = document.getElementById("navbar__list");

  toggleIcon.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
};

/**
 * used to hide the menu when scrolling.
 * but not working 100% still need to improve the animation.
 * please try it and give advice.
 */
const hideMenuWhenScrolling = () => {
  let isScrolling = false;

  window.addEventListener(
    "scroll",
    () => {
      clearTimeout(isScrolling);
      const pageHeader = document.querySelector(".page__header");

      pageHeader.style.display = "none";
      pageHeader.style.opacity = 0;

      isScrolling = setTimeout(() => {
        pageHeader.style.display = "initial";
        pageHeader.style.opacity = 1;
      }, 50);

      console.log(isScrolling);
    },
    false
  );
};

/**
 * main function
 */
const main = () => {
  const navData = getNavData();
  generateNavLinks(navData);
  document.addEventListener("scroll", toggleSectionsActiveness);

  menuMobileToggle();
  // hideMenuWhenScrolling(); 
};

main();
