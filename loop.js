let arr = [
  { cartoon: "Invader Zim" },
  { cartoon: "Avatar" },
  { cartoon: "Last Unicorn" },
  { cartoon: "Archer" },
  { cartoon: "Rick and Morty" },
];

//console.log(arr[1]);

for (let item of arr) {
  if (item.cartoon === "Avatar") {
   // console.log(item.cartoon);
  }
}

for (let i = 0; i < 2; i++) {
  let item = arr[i];
 // console.log(item.cartoon);
}






let human={
    head:true,
    toes:10,
    shoulders:2,
    height: 90,
    age: 900,
    name: 'Count Terela',
    isVampire: true,
    favoriteFoods: ['Jugular', 'Rare Steak', 'Peach Cobbler']
};

let {favoriteFoods, name,toes} = human;
let firstPart = favoriteFoods.slice(0, favoriteFoods.length-1);
let lastPart = favoriteFoods[favoriteFoods.length-1];
console.log(lastPart);
console.log(firstPart);
let humanStr = `${name} the Human enjoys ${firstPart.join(', ')} and ${lastPart}`;
console.log(humanStr);

 for (let i = 0; i < human.length; i++) {
     const element = human[i];
   //  console.log(element);
     
 }
//console.log(human.toes);
for (let key in human) {
   // console.log(human);
   // console.log(human[key]);
         //const element = object[key];
        
   
}







