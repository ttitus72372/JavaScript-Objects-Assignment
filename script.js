//creating an array to hold our food objects
let foodList = [];

//creating our first food object
let food1 = {
  name:'tacos',
  price:3
};

//adding the first food object to the end of the array
foodList.push(food1);

//creating our second food object
let food2 = {
  name:'sandwich',
  price:7
};

//adding the second food object to the end of the array
foodList.push(food2);

//TODO: add 3 more food objects to the array.  You decide the name and price.

let food3 = {
  name:'salad',
  price:4
};
foodList.push(food3);

let food4 = {
  name:'pizza',
  price:10
};
foodList.push(food4);

let food5 = {
  name:'milkshake',
  price:5
};
foodList.push(food5);

//printing all food names from the array to the console
//TODO: change the loop to print out the names AND the prices to the console
for(x=0;x<foodList.length;x++){
  console.log('name: '+foodList[x].name)
  //add the price here
  console.log('price: '+foodList[x].price)
}
//TODO: create a loop that will add the names and prices of each food to the <div id='menu'> 
function menu(){
  let menuItems = [];
  let terms = ['first','second','third','fourth','fifth']
  
  let food1 = {
    name:'taco',
    price:3
  };
  menuItems.push(food1);

  let food2 = {
    name:'sandwhich',
    price:7
  };
  menuItems.push(food2);

  let food3 = {
    name:'salad',
    price:4
  };
  menuItems.push(food3);

  let food4 = {
    name:'pizza',
    price:10
  };
  menuItems.push(food4);

  let food5 = {
    name:'milkshake',
    price:5
  };
  menuItems.push(food5);
  
  for(x=0;x<menuItems.length;x++){
    document.getElementById('menu').innerHTML += "Our "+terms[x]+" item is a " +menuItems[x].name+" and it's price is "+menuItems[x].price+" dollars.<br><br>"
  }

}