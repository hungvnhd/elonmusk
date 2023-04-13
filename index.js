console.log(123123);
let data = [
  {
    id: 1,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
    amount: 0,
  },
  {
    id: 2,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
    amount: 0,
  },
  {
    id: 3,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
    amount: 0,
  },
  {
    id: 4,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
    amount: 0,
  },
  {
    id: 5,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
    amount: 0,
  },
  {
    id: 6,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
    amount: 0,
  },
  {
    id: 7,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
    amount: 0,
  },
  {
    id: 8,
    name: "airpods pro",
    price: 249,
    img: "https://www.maccenter.vn/Accessories/AirPods-Pro-A.jpg",
    amount: 0,
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
    <p id="amount">${e.amount}</p>
    <button class="btn buy" id=${e.id}>Buy</button>
  </div>
  </div>`;
});
const btnGroup = document.querySelectorAll(".sell");
console.log(btnGroup);
console.log(result);
main.innerHTML = result;

document.querySelectorAll(".sell").forEach((e) => {
  console.log(e);
  e.onclick = (e) => {
    data.forEach((e1) => {
      if (Number(e.target.id) === e1.id) {
        let newArr = [...data];
        let newData = {
          ...data[e1.id - 1],
          amount: data[e1.id - 1].amount - 1,
        };
        newArr[e1.id - 1] = newData;
        data = [...newArr];
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
    <p id="amount">${e.amount}</p>
    <button class="btn buy" id=${e.id}>Buy</button>
  </div>
  </div>`;
        });
        const btnGroup = document.querySelectorAll(".sell");

        main.innerHTML = result;
        // data[e1.id - 1] = {
        //   ...data[e.id - 1],
        //   amount: data[e1.id - 1].amount--,
        // };
      }
    });
  };
});
