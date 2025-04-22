let accordian = document.querySelector("#accordian-container");

let group = accordian.querySelectorAll(".group");

group.forEach(element => {
    element.querySelectorAll(".content").forEach(content => {
        content.style.display = "none";
    })
});

group.forEach(element => {
    element.addEventListener('click', () => {
        let content = element.querySelector(".content");
        let icon = element.querySelector("i");
        console.log(icon);
        console.log(content);

        if (content.style.display === "none") {
            content.style.display = "block";
            icon.classList.add("rotate");
        } else {
            content.style.display = "none";
            icon.classList.remove("rotate");
        }
    })
});

let menu = document.querySelector(".menu");

let items = menu.querySelectorAll(".item");

items.forEach(element => {
    element.addEventListener('click', () => {
        console.log(element.innerHTML);
    });
});


