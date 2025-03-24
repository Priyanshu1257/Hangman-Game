import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import { use, useState } from "react";
import LetterButtons from "../components/LetterButtons/letterButtons";
import HangMan from "../components/HangMan/HangMan";
function PlayGame(){

    // fetching data from one page to another using 
    // //query params:

    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));

    //using path params:
    // const {text, id} = useParams();

    const { state } = useLocation();

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);

    function handleLetterClick(letter){
        if(state.wordSelected.toUpperCase().includes(letter)){
            console.log('Correct');
        }
        else{
            console.log('Wrong');
            setStep(step + 1);
        }

        setGuessedLetters([...guessedLetters, letter]);
    }

    return (
        <>
            <h1>Play Game </h1>

            <MaskedText text = {state.wordSelected} guessedLetters={guessedLetters} />

            <div>
                <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
            </div>

            <div>
                <HangMan step={step} />
            </div>

            <Link to='/start' className="text-blue-400">Start Game Link</Link>

        </>
    );
}

export default PlayGame;