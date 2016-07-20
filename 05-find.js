var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];
var user;

// typical for loop
// iterates over every item in array returning when a match is found
// will iterate entire array even if match is found early
// if multiple elements match will ultimately return last match
for(var i=0; i < users.length; i++){
	if(users[i].name === 'Alex'){
    user = users[i];
  }
}

// array find
// stops iterating when match is found
// if multiple elements match return first match
user = users.find(function(user){
  return user.name == 'Alex';
});

user;
