// symbol iterator is a tool that teaches an object how to respond to the for of loop
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead;
  	yield this.tester
  }
}
const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: ' Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
	  yield this.lead;
	  yield this.manager;
	  yield this.engineer
	  yield* this.testingTeam;
  }
}

const names = [];
for(let name of engineeringTeam) {
  names.push(name);
}
names; // ["Jill"," Alex","Dave","Amanda","Bill"]

//-------------------------------
// symbol iterator recursion
class Comment {
    constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}
const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('comment', [])
]
const tree = new Comment('Repost', children);

const comments = [];
for (let node of tree) {
  comments.push(node);
}
comments; // ["Repost","good comment","bad comment","comment"]
