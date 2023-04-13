let totalMoney = 217000000000;
let remainingMoney = 217000000000;
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
document.getElementsByClassName("total-money")[0].innerHTML = totalMoney;
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

// Attach event listener to parent element (main)
document.getElementById("main").addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("sell")) {
    const itemId = Number(target.id);
    const itemIndex = data.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1 && data[itemId - 1].amount > 0) {
      let newArr = [...data];
      newArr[itemIndex] = {
        ...data[itemIndex],
        amount: data[itemIndex].amount - 1,
      };
      data = [...newArr];
      renderItems();
    }
  } else if (target.classList.contains("buy")) {
    // Handle buy button click
    const itemId = Number(target.id);
    const itemIndex = data.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      let newArr = [...data];
      newArr[itemIndex] = {
        ...data[itemIndex],
        amount: data[itemIndex].amount + 1,
      };
      data = [...newArr];
      renderItems();
    }
  }
});

// Function to render items
function renderItems() {
  const main = document.getElementById("main");
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
  main.innerHTML = result;
}
