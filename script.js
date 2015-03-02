var calculator = function() {
	var num = document.getElementById('inputNum').value;

	var output = "";

	var numbers = [];

	var print = [];

	for (var i = 2; i < num; i++) {
		if($.inArray(i, numbers) == -1) {
			print.push(i);
		} 
		for (var j = i ; j < num; j+=i) {
			var temp = i+j;	
			numbers.push(temp);
		};
	};
	for (var i = 0; i < print.length; i++) {
		output+='<li>' + print[i] + '</li>';
	};
	var update = document.getElementById('result');
	update.innerHTML = output;
};
