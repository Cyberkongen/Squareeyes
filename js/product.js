function productIdFromQuery () {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}

function productTitleFromQuery () {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("title");
}

function productDescriptionFromQuery () {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("description");
}

function productReleasedFromQuery () {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("released");
}

function productRatingFromQuery () {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("rating");
}


function productImageFromQuery () {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("image");
}

async function fetchProductInfo () {
    

    const loadingIndicator = document.getElementById("loadingIndicator");
    loadingIndicator.style.display = "block";
    const productID = productIdFromQuery();

    try {
        const response = await fetch(`https://api.noroff.dev/api/v1/square-eyes/${productID}`);
    const productDetail = await response.json();

    const content = document.getElementById("content");
    const contentright = document.getElementById("contentright");
    const head = document.head;

    const newTitle = document.createElement(`title`);
    newTitle.textContent  = productDetail.title;
    head.removeChild(head.querySelector(`title`));
    head.appendChild(newTitle);

    contentright.getElementsByClassName("title")[0].textContent = productDetail.title;
    contentright.getElementsByClassName("description")[0].textContent = productDetail.description;
    contentright.getElementsByClassName("released")[0].textContent = `released: ${productDetail.released}`;
    content.querySelector(`img`).src = productDetail.image;
    contentright.getElementsByClassName(`rating`)[0].textContent = `rating: ${productDetail.rating}`;
    contentright.getElementsByClassName(`price`)[0].textContent = `Price: ${productDetail.price}`;
    contentright.getElementsByClassName(`genre`)[0].textContent = `genre: ${productDetail.genre}`;


    if (productDetail.onSale === true) {
        contentright.getElementsByClassName(`onSale`)[0].textContent = `This product is on sale!`
    }

    loadingIndicator.style.display = "none";
    } catch (error) {
    console.error("Error fetching product information:", error);
}

}

fetchProductInfo()