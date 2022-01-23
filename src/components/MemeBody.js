import React from "react";
import "./style.css"

function MemeBody(props){
    const mappedArrayOptions=props.allMemeImgs.map(item=><option name={item.name} key={item.id} value={item.url}>{item.name}</option>)
    return(
        <div>
            <form className="meme-form">
                <input name="topText" value={props.topText} placeholder="Top Text" onChange={props.handleFunction}/>
                <input name="botText" value={props.botText} placeholder="Bottom Text" onChange={props.handleFunction}/>
                <button  onClick={props.handleSubmit}>Generate</button>
                <input type="radio" name="blackOrWhite" value="black" checked={props.blackOrWhite==="black"} onChange={props.handleFunction}/>Black
                <input type="radio" name="blackOrWhite" value="white" checked={props.blackOrWhite==="white"} onChange={props.handleFunction}/>White
                <select className="select" name="randomImage" value={props.randomImage} onChange={props.handleFunction}>
                    {mappedArrayOptions}
                </select>
            </form>

            <div className="meme-div" id="capture">
                    <img  className="meme-img" src={props.randomImage} alt=""/>
                    <h2 className="top" style={{color:props.blackOrWhite}}>{props.topText}</h2>
                    <h2 className="bottom" style={{color:props.blackOrWhite}}>{props.botText}</h2>
            </div>
        </div>
    )
}

export default MemeBody