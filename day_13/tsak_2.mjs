const person = {
  name: "Abhishek Jaiswal",
  age: 27,
  gender: "male",
  greet: function () {
    console.log("Welcome ", this.name);
  },
};

export { person };
