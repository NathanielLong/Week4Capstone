var food = ["Apples", "Oranges", "Brocoli", "Brussel Sprouts", "Fish", "Premium Steak"];
var prices = [0.99,1.99,2.99,3.99,4.99,599.99];
var userFood = [];
var userPrices = [];
var newFood;
var sum = 0;

function addFood(x) {
userFood.push(food[x]);
addPrice(x);
}

function addPrice(x) {
 var newPrice = prices[x];
 userPrices.push(newPrice);
}

function addToTotal() {
  for(var i of userPrices){
    sum =+ i;
  }
  
  console.log(sum);
  }

function getTotal() {
    for(var i of userPrices){
    sum += i;
    }
    var totes = document.getElementById("total");
  totes.textContent = "Your total is $"+sum.toFixed(2);
 
}