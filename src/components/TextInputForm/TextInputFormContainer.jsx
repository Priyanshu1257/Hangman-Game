import { useState } from "react";
import TextInputForm from "./textInputForm";
import { useNavigate } from "react-router-dom";
//   Logic/container
function TextInputFormContainer(){

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");

    const navigate = useNavigate(); // useNavigate is a hook that returns a navigate function

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form Submitted", value);
        if(value){
            //if we have something in value then we want to go to the play page

            // setTimeout(() => {
            //     navigate("/play");
            // },5000)
            navigate(`/play`, { state: {wordSelected: value} });
        }
    }

    function handleTextInputChange(event){
        console.log("Text input changed");
        console.log(event.target.value);
        setValue(event.target.value);
    }

    function handleShowHideClick(){
        console.log("Show/Hide button clicked");
        if(inputType === "password"){
            setInputType("text")
        }
        else{
            setInputType("password")
        }
        console.log("Updated input type")
    }
    return (
        <TextInputForm
            inputType={inputType}
            handleFormSubmit = {handleFormSubmit}
            handleTextInputChange = {handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
        />
    );

}
export default TextInputFormContainer;