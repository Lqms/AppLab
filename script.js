let slider_timer = setInterval(() => next_slide(), 2000);
let slider_x = 0;

function next_slide(){
    let slider = document.querySelector(".slider");
    if (slider_x >= 925) {
        slider_x = 0;
    }
    slider_x += 185;
    slider.style.backgroundPosition = slider_x + "px 0";
}