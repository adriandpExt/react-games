import { useState } from "react";
import Modal from "./component/Modal";

const NumberGuess = () => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const randomNumber = Math.floor(Math.random() * 10) + 1;

  const handleGuess = () => {
    const userGuess = parseInt(guess);

    if (!userGuess) {
      setMessage("Please Input Number Between 1 to 10");
      setOpen(true);
    } else if (userGuess === randomNumber) {
      setMessage(`Congrats you guess the random number ${randomNumber}!!`);
      setOpen(true);
    } else {
      setMessage(`Try again the random number is ${randomNumber}`);
      setOpen(true);
    }

    return setGuess("");
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="block space-y-3">
        <p className="font-semibold text-xl">Enter number between 1 to 10</p>
        <input
          type="number"
          name="guessInput"
          value={guess}
          placeholder="Input number 1-10"
          className="input input-bordered w-full mr-2"
          onChange={(e) => setGuess(e.target.value)}
        />

        <button className="btn w-full" onClick={handleGuess}>
          GUESS
        </button>

        <Modal message={message} open={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
};

export default NumberGuess;
