Form = function Form(element) {
	this.element = element;
}

Form.prototype.scan = function() {
	var result = {};
	$(this.element).find('input[type="text"],textarea').each(function(index,value){
		var inputElement = $(value);
		var text = inputElement.val();
		if( text ) {
		    var name = inputElement.attr('name');
		    result[name] = text;
		}
	});
	return result;
}