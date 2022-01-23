import React from "react"
import "./style.css"

function MemeHeader(){
    return(
        <header className="header">
            <img className="header-img" src="https://i.kym-cdn.com/photos/images/original/000/122/292/happyface.png" alt="problem?"/>
            <h1 className="title">MemeGenerator</h1>
        </header>
    )
}

export default MemeHeader