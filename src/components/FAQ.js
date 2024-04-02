import ShowHideButton from "../components/ShowHideButton"
import "../styles/FAQ.css"
import { useState } from "react"

function FAQ({title}){

    const [visibility, changeVisibility] = useState(false)

    return(
        <>
            <div className="FAQ-header">
                <h2>{title}</h2>
                <ShowHideButton visibility={visibility} changeVisibility={changeVisibility} ></ShowHideButton>
            </div>

            { visibility && <div className="descr">Pariatur anim cillum ea eu pariatur excepteur ipsum anim anim nulla veniam adipisicing magna aute. Labore cupidatat sit consectetur sunt ipsum deserunt mollit deserunt nulla. Nostrud do ut officia magna Lorem pariatur adipisicing ad minim tempor ex magna cupidatat.</div>}
        </>
    )
}

export default FAQ