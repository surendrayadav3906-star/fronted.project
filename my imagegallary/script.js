let currentImage = 0;

const images = document.querySelectorAll(".image-card img");

function openLightbox(image) {

    currentImage = Array.from(images).indexOf(image);

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src = image.src;
}

function closeLightbox() {

    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {

    currentImage += direction;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    document.getElementById("lightbox-img").src =
        images[currentImage].src;
}


/* Image Filter */

function filterImages(category) {

    const cards = document.querySelectorAll(".image-card");

    cards.forEach(card => {

        if (category === "all" ||
            card.classList.contains(category)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }

    });
}