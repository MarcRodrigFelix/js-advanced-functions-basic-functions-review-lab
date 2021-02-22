// Your code here

function saturdayFun(activity = 'roller-skate'){
  return  `This Saturday, I want to ${activity}!`
};


const mondayWork = function(task = 'go to the office'){
  return `This Monday, I will ${task}.`
};


function wrapAdjective(visualFlair = '*'){
  return function(param = 'special'){
    return `You are ${visualFlair}${param}${visualFlair}!` 
  }
};


const Calculator = {
  add: function(one, three){ return one + three },
  subtract: function(one, three){ return one - three },
  multiply: function(one, three){ return one * three },
  divide: function(ten, five){ return ten / five }
};



function actionApplyer(startingInt, funksArray){
  let sumOfInt = startingInt;

  if (funksArray.length === 0){
    return startingInt
  } else {
    funksArray.forEach(function(funk){
      sumOfInt = funk(sumOfInt)
    })
    return sumOfInt;
  }
}