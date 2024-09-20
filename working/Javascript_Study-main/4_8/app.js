const reviewList = [
    {
        id: 1,
        name: "ninja",
        type: "water",
        img: "img/개굴닌자.jpg",
        text: "이것은 물타입의 지우개굴닌자이다."
    },
    {
        id: 2,
        name: "Bulbasaur",
        type: "grass",
        img: "img/이상해씨.jpg",
        text: "이것은 풀타입의 이상해씨이다."
    },
    {
        id: 3,
        name: "majayong",
        type: "esper",
        img: "img/마자용.png",
        text: "이것은 에스퍼타입의 마자용이다."
    },
    {
        id: 4,
        name: "charizard",
        type: "fire",
        img: "img/리자몽.jpg",
        text: "이것은 불타입의 리자몽이다."
    },
    {
        id: 5,
        name: "longstone",
        type: "rock",
        img: "img/롱스톤.jpg",
        text: "이것은 바위타입의 롱스톤이다."
    },
    {
        id: 6,
        name: "pikachu",
        type: "electricity",
        img: "img/피카츄.png",
        text: "이것은 전기타입의 피카츄이다."
    }
]
const mainImg = document.querySelector("#main-img");
const foodName = document.querySelector("#food-name");
const type = document.querySelector("#type");
const info = document.querySelector("#info");

const preBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentIndex = 1;
window.addEventListener("DOMContentLoaded", function(){
    let item = reviewList[currentIndex];
    mainImg.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
})
