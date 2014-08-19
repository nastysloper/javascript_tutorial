$(document).ready(function(){
  function Human(name){
    this.name = name;
  }

  mack = new Human("Mack");

  Human.prototype.identify = function(){
    return "Hi! My name is " + this.name + ".";
  }
  console.log(mack.identify());


})



cities = {
  "Chicago": "Illinois",
  "New York": "New York",
  "Tampa": "Florida",
  "Seattle": "Washington",
  "Denver": "Colorado",
  "Dallas": "Texas"
}

dogMap = {
  smallDogs: [
    "Corgie", "Pug"
  ],
  largeDogs: [
    "Dalmation", "St. Bernard"
  ]
}


