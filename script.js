// Accordian
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

// Tab menu
let menu = document.querySelector(".menu");
let items = menu.querySelectorAll(".item");
let tabContent = document.querySelectorAll('.tabContent');

tabContent.forEach(element =>{
    if (element.classList.contains('active')) {
        element.style.display = "block";
    }else{
        element.style.display = "none";
    }
})

items.forEach((element, place) => {
    element.addEventListener('click', () => {

        items.forEach(item => {
            item.classList.remove('tabactive');
        });

        element.classList.add('tabactive');

        tabContent.forEach((content, index) => {
            if (place === index) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});