console.log(123123);
const data = [
  {
    id: 1,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
  },
  {
    id: 2,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
  },
  {
    id: 3,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
  },
  {
    id: 4,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
  },
  {
    id: 5,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
  },
  {
    id: 6,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
  },
  {
    id: 7,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
  },
  {
    id: 8,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
  },
];
const main = document.getElementById("main");
console.log(main);
const result = data.map((e, i) => {
  return `<div class="imgcontent" id=${e.id}>
  <img
    class="sp"
    src=${e.img}
    alt=""
  />
  <p>${e.name}</p>
  <p>USD ${e.price}</p>
  <div class="sell-buy">
    <button class="btn sell" id=${e.id}>Sell</button>
    <p id="amount">0</p>
    <button class="btn buy" id=${e.id}>Buy</button>
  </div>
  </div>`;
});
console.log(result);
main.innerHTML = result;
