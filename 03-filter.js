var products = [
  { name: 'celery', type: 'vegetable' },
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'orange', type: 'fruit' }
];
var filteredProducts = [];

// typical for loop
for(var i=0; i < products.length; i++) {
  if(products[i].type === 'fruit'){
    filteredProducts.push(products[i]);
  }
}

// using array filter
filteredProducts = products.filter(function(product){
  product.type === 'fruit';
});

// filter using named function
function isFruit(product){
  return product.type === 'fruit';
}
filteredProducts = products.filter(isFruit);
