function lottieScrollAnimation() {
  //(home_hero) hide lottie scroll hint once page is scrolled
  window.addEventListener("scroll", function () {
    var element = document.querySelector(".lottie-scroll");
    if (window.scrollY > 0) {
      // Change 0 to the scroll position where you want to hide the element
      element.style.display = "none"; // Hide the element
    } else {
      element.style.display = "block"; // Show the element
    }
  });
  //end of code

  document.addEventListener("DOMContentLoaded", function () {
    // Step 1: Find the checkbox within the div that has the custom attribute 'tt-radiobutton-wrap'.
    const checkbox = document.querySelector(
      'div[tt-radiobutton-wrap] input[type="checkbox"]'
    );

    // Step 2: Add an event listener to toggle the 'combo' class.
    if (checkbox) {
      checkbox.addEventListener("change", function () {
        // Find all child elements of the parent div.
        const elements = this.closest(
          "div[tt-radiobutton-wrap]"
        ).querySelectorAll("*");

        // Step 3: Toggle the 'combo' class based on the checkbox's checked status.
        elements.forEach((element) => {
          if (this.checked) {
            element.classList.add("combo");
          } else {
            element.classList.remove("combo");
          }
        });
      });
    }
  });
}
lottieScrollAnimation();

function checkbox() {
  document.addEventListener("DOMContentLoaded", function () {
    // Select all checkboxes within divs that have the custom attribute 'tt-checkbox-wrap'.
    document
      .querySelectorAll('[tt-checkbox-wrap] input[type="checkbox"]')
      .forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
          const parentDiv = this.closest("[tt-checkbox-wrap]");

          // Toggle 'active' class based on the checkbox's checked state.
          if (this.checked) {
            // If the checkbox is checked, add 'active' class to all elements within the div.
            parentDiv.querySelectorAll("*").forEach((child) => {
              child.classList.add("active");
            });
          } else {
            // If the checkbox is unchecked, remove 'active' class from all elements within the div.
            parentDiv.querySelectorAll("*").forEach((child) => {
              child.classList.remove("active");
            });
          }
        });
      });
  });
}
checkbox();

function radiobutton() {
  document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelectorAll('[tt-radiobutton-wrap] input[type="radio"]')
      .forEach((radio) => {
        radio.addEventListener("change", function () {
          // Check if the radio button is part of a group and is checked
          if (this.checked) {
            const groupName = this.name;
            const parentDiv = this.closest("[tt-radiobutton-wrap]");

            // Clear .active class from elements in the same group
            document
              .querySelectorAll(
                `[tt-radiobutton-wrap] input[name="${groupName}"]`
              )
              .forEach((siblingRadio) => {
                const siblingParentDiv = siblingRadio.closest(
                  "[tt-radiobutton-wrap]"
                );
                if (siblingParentDiv) {
                  siblingParentDiv.querySelectorAll("*").forEach((child) => {
                    child.classList.remove("active");
                  });
                }
              });

            // Then, add 'active' class to the checked radio and its sibling elements within its 'tt-radiobutton-wrap'
            parentDiv.querySelectorAll("*").forEach((child) => {
              child.classList.add("active");
            });
          }
        });
      });
  });
}
radiobutton();

function calcButtonReveal() {
  document.addEventListener("DOMContentLoaded", function () {
    let displaySet = false; // Flag to track if the display has been set to 'inline-block'

    const checkAndUpdateButtonDisplay = function () {
      if (displaySet) return; // Exit the function if the display has already been set

      const isStageSelected =
        document.querySelector('input[name="Stage"]:checked') !== null;
      const isPagesSelected =
        document.querySelector('input[name="Pages"]:checked') !== null;

      const button = document.getElementById("calc-contact-button");
      if (button && isStageSelected && isPagesSelected) {
        button.style.display = "inline-block";
        displaySet = true; // Update the flag to prevent future changes
      }
    };

    const stageRadios = document.querySelectorAll('input[name="Stage"]');
    const pagesRadios = document.querySelectorAll('input[name="Pages"]');

    stageRadios.forEach((radio) =>
      radio.addEventListener("change", checkAndUpdateButtonDisplay)
    );
    pagesRadios.forEach((radio) =>
      radio.addEventListener("change", checkAndUpdateButtonDisplay)
    );
  });
}
calcButtonReveal();

import { testFunction } from "test.js";

// Now you can use testFunction in script.js
testFunction();
