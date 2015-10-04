function id(el) {
	return document.getElementById(el);
}

var exercises = ['Jumping jacks', 'Wall sit', 'Push-up', 'Abdominal crunch', 
		              'Step-up onto chair', 'Squat', 'Triceps dip on chair', 'Plank', 
		              'High knees running in place', 'Lunge', 'Push-up and rotation', 'Side plank'];

var options = {
	startId : "start-button",
	exerciseId : "exercise",
	restId : "rest",
	titlesId : "titles",
	barId : "bar",
	progressBarId : "progress",
	exerciseImgId : "exercise-img",
	exerciseTitleId : "exercise-title",
	restTitleId : "rest-title",
	exerciseCounterId : "exercise-counter",
	restCounterId : "rest-counter",
	startButtonId : "start-button"
};

var SoundPlayer = function() {
	var powerUpAudio = new Audio("sounds/SFX_Powerup_01.wav");

	this.powerUp = function () {
		powerUpAudio.play();
	}
};

var BITAPP = function(options, exercises, sounds) {
	var barPortion = 100/exercises.length;
	var eCounter = 1;
	var eDuration = 30;
	var rDuration = 10;

	this.progressBar = function() {
		id(options.progressBarId).style.width = (eCounter * barPortion) + "%";
		sounds.powerUp();
	};

	this.start = function() {
		id(options.startId).style.display = 'none';
		id(options.titlesId).style.display = 'none';
		id(options.exerciseId).style.display = 'block';
		id(options.barId).style.display = 'block';
		this.exerciseCountdown();
	};

	this.exerciseCountdown = function() {
		var el = this;
		if(eCounter <= exercises.length) {
			id(options.exerciseId).style.display = 'block';
			id(options.restId).style.display = 'none';
			id(options.exerciseImgId).src = "img/" + eCounter + ".png";
			id(options.exerciseTitleId).innerHTML = exercises[eCounter - 1];
			id(options.exerciseCounterId).innerHTML = eDuration;
			var counterValue = eDuration;
			var countDown = setInterval(function() {
				counterValue--;
				id(options.exerciseCounterId).innerHTML = counterValue;
				if(counterValue==0) {
					clearInterval(countDown);
					el.progressBar();
					el.restCountDown();
				}
			}, 1000);		
		} else {
			id(options.exerciseId).style.display = 'block';
			id(options.restId).style.display = 'none';
			id(options.exerciseImgId).src = "";
			id(options.exerciseTitleId).innerHTML = "Complete!";
			id(options.exerciseCounterId).innerHTML = "";
		}
	};

	this.restCountDown = function() {
		var el = this;
		id(options.exerciseId).style.display = 'none';
		id(options.restId).style.display = 'block';
		id(options.restCounterId).innerHTML = rDuration;
		var counterValue = rDuration;
		var countDown = setInterval(function() {
			counterValue--;
			id(options.restCounterId).innerHTML = counterValue;
			if(counterValue==0) {
				clearInterval(countDown);
				eCounter++;
				el.exerciseCountdown();
			}
		}, 1000);
	};
};

function start() {
	var soundPlayer = new SoundPlayer();
	var app = new BITAPP(options, exercises, soundPlayer);
	app.start();
}
