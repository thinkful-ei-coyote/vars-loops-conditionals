let arr = [
  { cartoon: "Invader Zim" },
  { cartoon: "Avatar" },
  { cartoon: "Last Unicorn" },
  { cartoon: "Archer" },
  { cartoon: "Rick and Morty" },
];

console.log(arr[1]);

//Linear Search
for (let item of arr) {
  if (item.cartoon === "Avatar") {
    console.log(item.cartoon);
  }
}

for (let i = 0; i < 2; i++) {
  let item = arr[i];
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

//Destructuring
let {favoriteFoods, name,toes} = human;

//Splice example
let firstPart = favoriteFoods.slice(0, favoriteFoods.length-1);
let lastPart = favoriteFoods[favoriteFoods.length-1];
console.log(lastPart);
console.log(firstPart);
let humanStr = `${name} the Human enjoys ${firstPart.join(', ')} and ${lastPart}`;
console.log(humanStr);


console.log(human.toes);
for (let key in human) {
    console.log(key);
    console.log(human[key]);
}







