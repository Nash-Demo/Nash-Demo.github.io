// Windows scroll viewer
window.onscroll = function () {
  scrollFunction();
};

/**
 * scrollFunction - the function that is called to manage the size
 * of the navbar during scrolling.
 */
function scrollFunction() {
  let navbar = document.getElementById("navbar");
  let logo = document.getElementById("logo");
  let width = navbar.offsetWidth;

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.position = "fixed";
    navbar.classList.add("shadow-md");
    if (width >= 1024) {
      logo.style.height = "44px";
    } else if (width >= 768) {
      logo.style.height = "40px";
    } else {
      logo.style.height = "36px";
    }
  } else {
    navbar.style.position = "sticky";
    navbar.classList.remove("shadow-md");
    if (width >= 1024) {
      logo.style.height = "54px";
    } else if (width >= 768) {
      logo.style.height = "48px";
    } else {
      logo.style.height = "40px";
    }
  }
}

/**
 * dropDisplay - the function that is called when the user clicks
 * on the profile button
 */
function dropDisplay(value) {
  let content = document.getElementById(value);
  let parent = content.parentNode;
  let dropdowns = document.getElementsByClassName("dropdown-content");
  let i;

  for (i = 0; i < dropdowns.length; i++) {
    if (parent.contains(dropdowns[i])) {
      dropdowns[i].classList.toggle("show");
    } else {
      dropdowns[i].classList.remove("show");
    }
  }

  // content.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  let dropdowns = document.getElementsByClassName("dropdown-content");
  let i;

  for (i = 0; i < dropdowns.length; i++) {
    let parent = dropdowns[i].parentNode;
    if (
      !parent.contains(event.target) &&
      dropdowns[i].classList.contains("show")
    ) {
      dropdowns[i].classList.remove("show");
    }
  }
};

/**
 * closeMenu: the function that is called when the user clicks
 * on the close menu button
 */
function closeMenu() {
  const navbar = document.querySelector("#mobile-navbar");
  let navbarWidth = navbar.getBoundingClientRect().width;

  navbar.style.transition = "500ms linear";
  navbar.style.transform = `translateX(${navbarWidth}px)`;
}

/**
 * openMenu: the function that is called when the user clicks
 * on the menu button
 */
function openMenu() {
  const navbar = document.querySelector("#mobile-navbar");

  navbar.style.transition = "500ms linear";
  navbar.style.transform = `translateX(0)`;
}
