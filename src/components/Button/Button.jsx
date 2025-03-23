import getButtonStyling from "./getButtonStyling";

function Button({text, onClickHandler, styleType = "primary", type="button"}){

    console.log(text);  //object

    //{} --> evaluates the value inside it
    return (
        <button
            onClick = {onClickHandler}
            type={type}
            // style={{backgroundColor: 'blue', 'color': 'white'}}
            className = {`px-4 py-2 ${getButtonStyling(styleType)} text-white bg-blue-500`}
        >
            {text}  
        </button>
    );
}


export default Button;