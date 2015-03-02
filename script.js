var calculator = function() {
	var num = document.getElementById('inputNum').value;

	var output = "";

	var numbers = [];

	var print = [];

	var count = 0;

	for (var i = 2; i < num; i++) {
		if($.inArray(i, numbers) == -1) {
			count++;
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

	var updateCount = document.getElementById('count');
	updateCount.innerHTML = "<br>There are " + count + " prime numbers between 0 and " + num;

	var update = document.getElementById('result');
	update.innerHTML = output;
};
