function Dog (attributes){

	if(!(this instanceof Dog)) return new Dog(attributes)
	attributes = attributes || {}
	this.name = attributes.name || 'Dog'
	this.age = attributes.age || ''

}

Dog.prototype.bark = function(times) {
    for (var i = times - 1; i >= 0; i--) {
      console.log(this.name+' barks!');
    };
    return this
};

Dog.prototype.bite = function() {
	console.log(this.name+' bites!');
	return this
};

module.exports  = Dog