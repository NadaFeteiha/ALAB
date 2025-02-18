import * as Carousel from "./Carousel.js";

export function setBreedsOptions(breeds) {
    breeds.forEach((breed) => {
        const option = document.createElement("option");
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
    });
}


// TODO style to be a card with beautiful style later 
export function setInfoDump(breed) {
    // remove all old children to set new ones
    infoDump.replaceChildren();

    const name = document.createElement("h2")
    name.textContent = breed.name;

    const description = document.createElement("p");
    description.textContent = breed.description;

    const origin = document.createElement("p");
    origin.textContent = `Origin: ${breed.origin}`;

    const life_span = document.createElement("p");
    life_span.textContent = `Life Span: ${breed.life_span}`;

    infoDump.appendChild(name);
    infoDump.appendChild(description);
    infoDump.appendChild(origin);
    infoDump.appendChild(life_span);
}

export function setImages(breedImages) {
    Carousel.clear();

    breedImages.forEach(image => {
        const carouselItem = Carousel.createCarouselItem(image.url, image.breeds[0].name, image.id);
        Carousel.appendCarousel(carouselItem);
    });

    Carousel.start();
}

export function setFavorites(favorites) {
    console.log(` color favorites: ${JSON.stringify(favorites)}`);

    favorites.forEach(favorite => {
        setFavoriteColor(true, favorite.imgId);
    });
}

export function setFavoriteColor(selected, id) {
    const hearts = document.querySelectorAll(`[data-img-id="${id}"]`);
    hearts.forEach(heart => {
        heart.style.color = selected ? "red" : "lightpink";
    });
}