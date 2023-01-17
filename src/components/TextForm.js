import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","success");
        document.title="Textutils-Uppercase";
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!","success");
        document.title="Textutils-Lowercase";
    }
    const cleartext = () => {
        console.log("cleartext" + text);
        let newText =" ";
        setText(newText)
        document.title="Textutils-Clear";
    }
   
    const handleOnchange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");

    return (

        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">

                <textarea className="form-control" id="myBox" onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}  value={text}  rows="8"></textarea>
                <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={cleartext}>Clear</button>
                
            </div>
            <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}} >
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length}</p>
                <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}minutes per read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something to preview it here"}</p>
            </div>
        </div>

    )
}
