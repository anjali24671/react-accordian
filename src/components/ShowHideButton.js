import { useState } from "react"

function ShowHideButton({visibility, changeVisibility}){

    const [ButtonText, changeButtonText] = useState('show')

    function changeText(visibility){
        if (visibility===false){
            changeVisibility(true)
            changeButtonText('Hide')
        }
        else{
            changeVisibility(false)
            changeButtonText('Show')
        }
    }

    return (
        <button onClick={()=> changeText(visibility)}>{ButtonText}</button>
    )
}

export default ShowHideButton