const choices = document.querySelectorAll(".choices");
const status_txt = document.querySelector("#status");
const usr_scr = document.querySelector("#my_score");
const cmp_scr = document.querySelector("#comp_score");


let user_score = 0;
let comp_score = 0;

const pickrnd = () => {
  const choices = ["Rock", "Paper", "sciser"];
  const rndidx = Math.floor(Math.random() * 3);
  return choices[rndidx];
};

const game_draw = (user_choice, comp_choice) => {
  status_txt.innerText = `${user_choice} - ${comp_choice} : Game Draw !`;
  status_txt.style.backgroundColor = "#59546C";
};

const user_won1 = () => {
  status_txt.innerText = "You Won !";
  status_txt.style.backgroundColor = "green";
  ++user_score;
  usr_scr.innerText = user_score;
};

const user_lose = () => {
  status_txt.innerText = "You Lost !";
  status_txt.style.backgroundColor = "red";
  ++comp_score;
  cmp_scr.innerText = comp_score;
};

const playgame = (user_choice) => {
  const comp_choice = pickrnd();
  console.log(comp_choice);
  let user_won = null;
  if (user_choice === comp_choice) {
    game_draw(user_choice, comp_choice);
  }
  else if (user_choice === "Rock") {
    user_won = comp_choice === "sciser" ? true : false;
  }
  else if (user_choice === "Paper") {
    user_won = comp_choice === "Rock" ? true : false;
  }
  else {
    user_won = comp_choice === "Paper" ? true : false;
  }
  if (user_won === true) {
    user_won1();
  } else if (user_won === false) {
    user_lose();
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const user_choice = choice.getAttribute("id");
    playgame(user_choice);
  });
});