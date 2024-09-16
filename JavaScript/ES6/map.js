//crate map

let map1 = new Map();
console.log(map1);

//set item
map1.set("information", { name: "arma", city: "ahmedabad" });
console.log(map1);

//get
console.log(map1.get("information"));
//has
console.log(map1.has("information"));
//delete
console.log(map1.delete("information"));
