const input = document.querySelector("input");
const ballImg = document.querySelector("img");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");
const answers = [
	"Tak",
	"Nie",
	"Może",
	"Nie chcesz znać odpowiedzi na to pytanie",
	"Byc może",
	"Chyba Cię po****ło",
	"Nigdy w życiu",
	"No co Ty",
	"Kto wie",
	"Jesteś pewien że chcesz usłyszeć odpowiedż",
	"Nie nie i jeszcze raz nie",
	"Oczyiście",
	"Jasne",
];

function magicBall() {
	shakeBall();
	setTimeout(() => {
		if (input.value !== "" && input.value.endsWith("?")) {
			drawAnswer();
			error.textContent = "";
		} else if (input.value !== "" && input.value.endsWith("?") === false) {
			error.textContent = "Pytanie musi kończyć się '?'";
			answer.textContent = "";
		} else {
			error.textContent = "Zadaj pytanie";
			answer.textContent = "";
		}
		ballImg.classList.remove("shake-animaton");
	}, 1000);
	setTimeout(checkInput, 1000);
}

// const checkInput = () => {
// 	if (input.value !== "" && input.value.slice(-1) === "?") {
// 		drawAnswer();
// 		error.textContent = "";
// 	} else if (input.value !== "" && input.value.slice(-1) !== "?") {
// 		error.textContent = 'Pytanie musi kończyć się "?"';
// 		answer.textContent = "";
// 	} else {
// 		error.textContent = "Zadaj pytanie";
// 		answer.textContent = "";
// 	}
// 	ballImg.classList.remove("shake-animaton");
// };
const shakeBall = () => {
	// ballImg.classList.remove("shake-animaton");
	ballImg.classList.add("shake-animaton");
	// setTimeout(ballImg.classList.remove("shake-animaton"), 21000);
};

const drawAnswer = () => {
	answer.innerHTML = `<span>Odpowiedź:</span> ${
		answers[Math.floor(Math.random() * answers.length)]
	}`;
};

ballImg.addEventListener("click", magicBall);
