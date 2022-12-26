const input = document.querySelector("input");
const ballImg = document.querySelector("img");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");
const answers = [
	"odpowiedz 1",
	"odpowiedz 2",
	"odpowiedz 3",
	"odpowiedz 4",
	"odpowiedz 5",
	"odpowiedz 6",
	"odpowiedz 7",
	"odpowiedz 8",
	"odpowiedz 9",
	"odpowiedz 10",
	"odpowiedz 11",
	"odpowiedz 12",
	"odpowiedz 13",
	"odpowiedz 13",
	"odpowiedz 13",
	"odpowiedz 13",
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
