function calcCustomer() {
  document.addEventListener("DOMContentLoaded", () => {
    const stageRadios = document.querySelectorAll('input[name="Stage"]');
    const pagesRadios = document.querySelectorAll('input[name="Pages"]');
    const priceDisplay = document.getElementById("price");

    function calculatePrice() {
      let stageValue = document.querySelector(
        'input[name="Stage"]:checked'
      )?.value;
      let pagesValue = document.querySelector(
        'input[name="Pages"]:checked'
      )?.value;

      if (!stageValue || !pagesValue) {
        priceDisplay.textContent = "2000"; // Reset to default if one group is not selected
        return;
      }

      let calculatedPrice = 0;
      if (stageValue === "Site") {
        switch (pagesValue) {
          case "Single":
          case "Need Advice":
            calculatedPrice = 2000;
            break;
          case "1-10":
            calculatedPrice = 2500;
            break;
          case "From 10":
            calculatedPrice = 4000;
            break;
        }
      } else if (stageValue === "Design+Site") {
        switch (pagesValue) {
          case "Single":
          case "Need Advice":
            calculatedPrice = 3000;
            break;
          case "1-10":
            calculatedPrice = 4000;
            break;
          case "From 10":
            calculatedPrice = 5500;
            break;
        }
      } else if (stageValue === "Everything") {
        switch (pagesValue) {
          case "Single":
          case "Need Advice":
            calculatedPrice = 3500;
            break;
          case "1-10":
            calculatedPrice = 4500;
            break;
          case "From 10":
            calculatedPrice = 6000;
            break;
        }
      }

      priceDisplay.textContent = calculatedPrice.toString();
    }

    stageRadios.forEach((radio) =>
      radio.addEventListener("change", calculatePrice)
    );
    pagesRadios.forEach((radio) =>
      radio.addEventListener("change", calculatePrice)
    );
  });
}
calcCustomer();
