function id(el) {
	return document.getElementById(el);
}

function init() {
	id('begin-button').style.display = 'none';
	id('exercise').style.display = 'block';
	exerciseCountDown();
}

function exerciseCountDown() {
	id('exercise').style.display = 'block';
	id('rest').style.display = 'none';
	var counter =  id('exercise').getElementsByClassName('counter')[0]
	counter.innerHTML = 5;
	var counterValue = counter.innerHTML;
	console.log(counter);
	var countDown = setInterval(function() {
		counterValue--;
		counter.innerHTML = counterValue;
		console.log(counter);
		if(counterValue==0) {
			alert('seacabo');
			clearInterval(countDown);
			restCountDown();
		}
	}, 1000);
}

function restCountDown() {
	id('exercise').style.display = 'none';
	id('rest').style.display = 'block';
	var counter =  id('rest').getElementsByClassName('counter')[0]
	counter.innerHTML = 5;
	var counterValue = counter.innerHTML;
	console.log(counter);
	var countDown = setInterval(function() {
		counterValue--;
		counter.innerHTML = counterValue;
		console.log(counter);
		if(counterValue==0) {
			alert('seacabo');
			clearInterval(countDown);
			exerciseCountDown();
		}
	}, 1000);
}
