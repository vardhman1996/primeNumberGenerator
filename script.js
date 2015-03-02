var calculator = function() {
	var num = document.getElementById('inputNum').value;

	var output = "";

	var numbers = [];

	var count = 0;

	for (var i = 2; i < num; i++) {
		if($.inArray(i, numbers) == -1) {
			count++;
			output+= " &nbsp" + i + " &nbsp";
		} 
		for (var j = i ; j < num; j+=i) {
			var temp = i+j;	
			numbers.push(temp);
		};
	};

	var updateCount = document.getElementById('count');
	updateCount.innerHTML = "<br><h3>There are " + count + " prime numbers between 0 and " + num + "</h3>";

	var update = document.getElementById('result');
	update.innerHTML = output;
};
