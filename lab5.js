
//utf8 is to sting and () => {})call back function
// "\n" new line, "\t" tap

const fs = require("fs");

fs.readFile("menu1.csv", "utf8", (err, data) => {
  if (err) {
    return console.log(err);
  }
  const splitList = data.split("\n");
  let itemObject = { lunch: [], dinner: [], dessert: [] };
  for (const element of splitList) {
    let values = element.split(",");
    const lunchOrDinner = values[0];
    const mealObj = { name: values[1], quantity: values[2], price: values[3] };
    itemObject[lunchOrDinner].push(mealObj);
  }

  let content = "** Lunch Items**\n";
  for (let i = 0; i < itemObject.lunch.length; i++) {
    const item = itemObject.lunch[i];
    content += item.price;
    content += "\t";
    content += item.name;
    content += ", ";
    content += item.quantity;
    content += "\n";
  }

  
  content += "** Dinner Items**\n";
  for (let i = 0; i < itemObject.dinner.length; i++) {
    const item = itemObject.dinner[i];
    content += item.price;// content = content + item.price;
    content += "\t";
    content += item.name;
    content += ", ";
    content += item.quantity;
    content += "\n";
  }

  fs.writeFile("meal.txt", content, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Finished!!");
  });
});


















