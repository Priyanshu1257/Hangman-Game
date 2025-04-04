import Button from "../Button/Button";
import TextInput from "../Textinput/Textinput";

function TextInputForm({inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick }){
    //presentation
    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                    type={inputType}
                    label = "Enter a word or phrase"
                    placeholder="Enter a word or phrase here..."
                    onChangeHandler={handleTextInputChange}
                />
            </div>

            <div>
                <Button
                    styleType="warning"
                    text={inputType === "password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideClick}
                />
            </div>

            <div>
                <Button
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
            </div>
        </form>
    )

}

export default TextInputForm;
