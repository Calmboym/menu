const products = {
  "hot-coffee": [
    {name:"کاپوچینو", price:"45000", img:"images/item1.jpg"},
    {name:"لاته", price:"42000", img:"images/item2.jpg"},
    {name:"موکا", price:"47000", img:"images/item3.jpg"}
  ],
  "cold-coffee":[
    {name:"آیس لاته", price:"50000", img:"images/item1.jpg"},
    {name:"آیس موکا", price:"52000", img:"images/item2.jpg"},
    {name:"فرپچینو", price:"55000", img:"images/item3.jpg"}
  ],
  "macchiato":[
    {name:"ماکیاتو کلاسیک", price:"48000", img:"images/item1.jpg"},
    {name:"کارامل ماکیاتو", price:"50000", img:"images/item2.jpg"},
    {name:"وانیل ماکیاتو", price:"52000", img:"images/item3.jpg"}
  ],
  "shakebar":[
    {name:"شیک شکلاتی", price:"45000", img:"images/item1.jpg"},
    {name:"شیک وانیلی", price:"44000", img:"images/item2.jpg"},
    {name:"شیک توت فرنگی", price:"46000", img:"images/item3.jpg"}
  ],
  "hot-drinks":[
    {name:"هات چاکلت", price:"40000", img:"images/item1.jpg"},
    {name:"چای ماسالا", price:"38000", img:"images/item2.jpg"},
    {name:"چای سبز", price:"35000", img:"images/item3.jpg"}
  ]
};

// اضافه کردن کارت‌ها
function renderProducts(sectionId){
  const container = document.getElementById(sectionId+"-items");
  if(!container) return;
  const items = products[sectionId];
  items.forEach(p=>{
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="name">${p.name}</div>
      <div class="price">${p.price} تومان</div>
    `;
    container.appendChild(div);
  });
}

// رندر همه دسته‌ها
Object.keys(products).forEach(renderProducts);

// اسکرول روان برای تب‌ها
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
