import React,{useState} from 'react'

export default function TextForms(props) {
    const [text,setText]=useState("Enter Text here");

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleUpClick1=()=>{
        let newText2=text.toLowerCase();
        setText(newText2)
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const handleClear=()=>{
        let newText="";
        setText(newText)
    }

    const removeExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    return (
        <>
        <div style={{color: props.mode==='light'?'rgb(25, 27, 56)':'white'}}>
            <div> 
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'rgb(25, 27, 56)',color: props.mode==='light'?'rgb(25, 27, 56)':'white'}} rows="8"></textarea>    
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleUpClick1}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>
        
            <div className="container my-3">
            <p>{(text.split(' ').length)-1} words and {text.length} letters.</p>
            </div>
        </div>
       </>
    )
}
