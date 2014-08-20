$(document).ready(function(){

  $(".cart").click(function(event) {
    console.log("You clicked a button!")
  });

  $(".toggle").click(function(event) {
    console.log("Toggle!");
    if ($("div").hasClass("green")) {
      console.log("Yes, it's pink.");
      $("div").removeClass("green");
      $("div").addClass("pink");
    }
    else {
      console.log("Yes, it's green.");
      $("div").removeClass("pink");
      $("div").addClass("green");
    }
  });
});

function Human(name){
  this.name = name;
}

mack = new Human("Mack");

Human.prototype.identify = function(){
  return "Hi! My name is " + this.name + ".";
}
console.log(mack.identify());



var cities = {
  "Chicago": "Illinois",
  "New York": "New York",
  "Tampa": "Florida",
  "Seattle": "Washington",
  "Denver": "Colorado",
  "Dallas": "Texas"
}

var dogMap = {
  smallDogs: [
    "Corgie", "Pug"
  ],
  largeDogs: [
    "Dalmation", "St. Bernard"
  ]
}

var pageData = {
  sku: "6680",
  price: "129.99",
  name: "Checkthrough"
}


