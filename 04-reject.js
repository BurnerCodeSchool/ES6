
function reject2(arr, func){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(!func(arr[i])){
      newArr.push(arr[i]);
    };
  };
  return newArr;
};

function reject(array, func) {
  return array.filter(function(item){
  	if(!func(item)){ return item; };
  });
};

var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
}); 

lessThanFifteen; 
console.log(lessThanFifteen);
