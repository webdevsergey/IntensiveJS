function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = ["Word", "Exell", "Edge"];
		for (let i = 0; i < skills.length; i++) {
			document.write("Я владею " + skills[i] + "<br>")
		}
	}

	showSkills();

	function checkAge() {

		if (age > 18) {
			alert("Я уже взрослый!")
		} else {
			alert("Я еще очень молод!")
		}
	}

	checkAge ();

	
	function caclPow(num) {
		let res = num * num;
		console.log(res);
	}

	caclPow(5);

}

myFirstApp("Сергей", 49)