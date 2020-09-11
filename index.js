const {
  addItem,
  fetchItems,
  removeItem,
  updateItem,
  clearList,
} = require("./importfunc");

addItem({ id: "id3", name: "Capitan America", job: "superHero" });
addItem({ id: "id4", name: "Spider-man", job: "Pro footballer" });
//{...lists,job:"dumbass"}
console.log(fetchItems());

removeItem("id4");
console.log(fetchItems());

updateItem("id3", { jogb: "soldier" });
console.log(fetchItems());
