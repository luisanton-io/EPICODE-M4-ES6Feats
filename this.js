// https://www.youtube.com/watch?v=YOlr79NaAtQ&ab_channel=Fireship

this.test = "ciao";
// console.log(this);

let firstObject = {
  name: "first",
  value: 1,
  // test: "ciao",
  getCapitalizedName: function () {
    console.log(this.test);
    return this.name.toUpperCase();
  },
};
// console.log(firstObject.getCapitalizedName());

let secondObject = {
  name: "second",
  value: 2,
  getCapitalizedName: () => {
    return secondObject.name;
  },
};

console.log(this);
console.log(secondObject.getCapitalizedName());
