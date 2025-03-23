/**
 * 
 * @param {The word is given as input and is expected to be guessed} originalWord 
 * @param {Letters which are guessed by the user already} guessedLetters 
 * Ex: originalWord: HUMBLE
 * guessedLetters: ['H' , 'M', 'E']
 * 
 * return "H _ M _ E"  (string)
 */

export function getMaskedString(originalWord, guessedLetters){
    //convert all letters to capital letters
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase());

    //set data structure
    const guessedLetterSet = new Set(guessedLetters);

    //split all characters
    const result = originalWord.toUpperCase().split('').map(char => {
        if(guessedLetterSet.has(char)){
            return char;
        } 
        else{
            return "_";
        }
    }); //['H', '_', 'M', '_', '_', 'E' ] 

    return result; //"H _ M _ _ E"
}

