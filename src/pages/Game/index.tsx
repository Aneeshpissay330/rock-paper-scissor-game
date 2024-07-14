import { useState } from "react";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";

const Game = () => {
  const data = ["rock", "paper", "scissors"];
  const [userChoice, setUserChoice] = useState(data[0]);
  const [computerChoice, setComputerChoice] = useState(data[0]);
  const [turn, setTurn] = useState("user");
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const playGame = (type: "rock" | "paper" | "scissors") => {
    setTurn("computer");
    setUserChoice(type);
    const randomIndex = Math.floor(Math.random() * data.length);
    setComputerChoice(data[randomIndex]);
    const result = determineWinner(type, data[randomIndex]);
    setResult(result);
    updateScore(result);
  }
  const resetGame = () => {
    setTurn("user");
    setUserChoice(data[0]);
    setComputerChoice(data[0]);
  }
  const resetScore = () => {
    setTurn("user");
    setUserChoice(data[0]);
    setComputerChoice(data[0]);
    setScore(0);
  }
  const determineWinner = (user: string, computer: string) => {
    if (user === computer) {
      return 'Draw';
    }
    if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'scissors' && computer === 'paper') ||
      (user === 'paper' && computer === 'rock')
    ) {
      return 'You won';
    } else {
      return 'You lose';
    }
  };
  const updateScore = (result: string) => {
    if (result === 'You won') {
      setScore(score + 1);
    } else if (result === 'You lose') {
      setScore(score - 1);
    }
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mt-5 flex flex-col">
        <div className="text-3xl font-semibold">
          Rock Paper Scissors
        </div>
        <div className="rounded-md text-[#FFA500] font-semibold text-center mt-5 bg-white py-3">
          Score: {score}
        </div>
        <button onClick={resetScore} className="px-5 py-2 mt-5 bg-white text-[#FFA500] font-semibold rounded-md">Reset</button>
      </div>
      {turn === "computer" ?
        <div className="flex justify-center items-center h-96">
          {userChoice === "rock" ?
            <div className="p-10 border-[#FFA500] border-[12px] rounded-full mx-20 bg-white inner-shadow">
              <FaHandRock className="w-12 h-12 fill-[url(#blue-gradient)]" />
            </div> : userChoice === "paper" ?
              <div className="p-10 border-[#FFA500] border-[12px] rounded-full mx-20 bg-white inner-shadow">
                <FaHandPaper className="w-12 h-12 fill-[url(#blue-gradient)]" />
              </div> : userChoice === "scissors" &&
              <div className="p-10 border-[#FFA500] border-[12px] rounded-full mx-20 bg-white inner-shadow">
                <FaHandScissors className="w-12 h-12 fill-[url(#blue-gradient)]" />
              </div>
          }
          <div className="flex items-center flex-col">
            <div className="text-4xl">{result}</div>
            <button onClick={resetGame} className="px-5 py-2 mt-5 bg-white text-[#FFA500] font-semibold rounded-md">Play Again</button>
          </div>
          {computerChoice === "rock" ?
            <div className="p-10 border-[#FFA500] border-[12px] rounded-full mx-20 bg-white inner-shadow">
              <FaHandRock className="w-12 h-12 fill-[url(#blue-gradient)]" />
            </div> : computerChoice === "paper" ?
              <div className="p-10 border-[#FFA500] border-[12px] rounded-full mx-20 bg-white inner-shadow">
                <FaHandPaper className="w-12 h-12 fill-[url(#blue-gradient)]" />
              </div> : computerChoice === "scissors" &&
              <div className="p-10 border-[#FFA500] border-[12px] rounded-full mx-20 bg-white inner-shadow">
                <FaHandScissors className="w-12 h-12 fill-[url(#blue-gradient)]" />
              </div>
          }
        </div>
        :
        <div className="text-center">
          <div className="flex justify-center items-center h-52">
            <div title="Rock" onClick={() => playGame("rock")} className="transition ease-in-out delay-150 p-3 hover:scale-110 border-[#FFA500] border-[12px] rounded-full mx-10 bg-white inner-shadow cursor-pointer">
              <FaHandRock className="w-12 h-12 fill-[url(#blue-gradient)]" />
            </div>
            <div title="Paper" onClick={() => playGame("paper")} className="transition ease-in-out delay-150 p-3 hover:scale-110 border-[#FFA500] border-[12px] rounded-full mx-10 bg-white inner-shadow cursor-pointer">
              <FaHandPaper className="w-12 h-12 fill-[url(#blue-gradient)]" />
            </div>
            <div title="Scissors" onClick={() => playGame("scissors")} className="transition ease-in-out delay-150 p-3 hover:scale-110 border-[#FFA500] border-[12px] rounded-full mx-10 bg-white inner-shadow cursor-pointer">
              <FaHandScissors className="w-12 h-12 fill-[url(#blue-gradient)]" />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Game;