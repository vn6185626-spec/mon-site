const boutonsFiltre = document.querySelectorAll(".filter");
const cartesCatalogue = document.querySelectorAll(".catalog .product");

for (let i = 0; i < boutonsFiltre.length; i++) {
  boutonsFiltre[i].addEventListener("click", function () {
    const categorie = boutonsFiltre[i].dataset.categorie;

    // On enleve le surlignage de tous les boutons, puis on le met sur celui-ci.
    for (let j = 0; j < boutonsFiltre.length; j++) {
      boutonsFiltre[j].classList.remove("is-on");
    }
    boutonsFiltre[i].classList.add("is-on");

    // On montre ou on cache chaque produit du catalogue.
    for (let j = 0; j < cartesCatalogue.length; j++) {
      if (categorie === "tout" || cartesCatalogue[j].dataset.categorie === categorie) {
        cartesCatalogue[j].style.display = "block";
      } else {
        cartesCatalogue[j].style.display = "none";
      }
    }
  });
}