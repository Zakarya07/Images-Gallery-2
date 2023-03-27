"use strict";

const big_image = document.querySelector(".big-image-container img");

const images_thumb_container = document.querySelector(".images-thumbnail-container");


images_thumb_container.addEventListener("click", (event) => {

    let target = event.target;

    if(target.tagName === "IMG"){
        console.log(true);
        console.log(target.getAttribute('src'));
        big_image.setAttribute("src", target.getAttribute("src"));
    }else{
        return false;
    }

})
