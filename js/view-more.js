const view = document.querySelector(".project_view");
const view_more = document.querySelectorAll(".view-more");
const img_close_btn = document.querySelector(".view_close_btn > span");
const project_img = document.querySelector(".project_img");
const more_img = document.querySelector(".more_img")

view_more.forEach((el)=> {
    el.addEventListener("click", () => {
        const child = el.firstChild;
        const img = child.nextSibling;
        console.log(img);
        more_img.src = img.src;
        view.style.display= "block";
    });
})


img_close_btn.addEventListener("click", () => {
    view.style.display= "none";
})


view.addEventListener("click", () => {
    view.style.display= "none";
})

