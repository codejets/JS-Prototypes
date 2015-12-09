var createDog = require('./dog.js')

var sub = createDog({name:'subramani',age:'12'})
var ma = createDog()
var tommy =  createDog({name:'tommy',age:'4'})
console.log(sub)
console.log(tommy)
console.log(ma)

sub.bark(2).bite().bark(1)
tommy.bite()
ma.bite()