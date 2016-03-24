'use strict';

let userObj = {
  name: "Bob",
  age: 27,
  calorieTarget: 2400,
  meals: [
    {
    title: "Pancakes",
    date:  "Monday",
    description: "Tasty",
    calories: 100,
  },

    {
      title: "Toast",
      date:  "On a Tuesday",
      description: "Burnt",
      calories: 100,
    },

     {
      title: "Toast",
      date:  "Monday",
      description: "Burnt",
      calories: 100,
    },



  ],

  caloriesEatOn: function(date) {
    let total = 0;

    for(let i = 0; i < this.meals.length; i++) {

      if(this.meals[i].date === date) {
        return total += this.meals[i].calories;
      }

    }
  },

  avgDailyCalories: function() {
    let total = 0;
    let totalCals = 0;
    let noDays = [];
    let uniqueDaysasKeys = {};

    for(let i = 0; i < this.meals.length; i++) {
      totalCals += this.meals[i].calories;

    }

    for(let i = 0; i < this.meals.length; i++) {
    	noDays.push(this.meals[i].date);

    	}

    	console.log(noDays);
    	for(let i = 0; i < noDays.length; i++) {
    		let uniqueDays = noDays[i];
    		uniqueDaysasKeys[uniqueDays] = true;

    	console.log(uniqueDaysasKeys);
    }

	let uniqueOne = Object.keys(uniqueDaysasKeys);
	console.log(uniqueOne);

	return totalCals / uniqueOne.length;

  }


};
