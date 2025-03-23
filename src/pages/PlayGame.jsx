import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
function PlayGame(){

    // fetching data from one page to another using 
    // //query params:

    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"));

    //using path params:
    // const {text, id} = useParams();

    const { state } = useLocation();

    return (
        <>
            <h1>Play Game {state.wordSelected} </h1>

            <MaskedText text = {state.wordSelected} guessedLetters={[]} />

            <Link to='/start' className="text-blue-400">Start Game Link</Link>

        </>
    );
}

export default PlayGame;