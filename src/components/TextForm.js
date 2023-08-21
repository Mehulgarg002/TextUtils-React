import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Coverted To Upper Case', 'success');
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Coverted To Lower Case', 'success');
    }
    const handleClearClick = () => {
        setText('');
        props.showAlert('Text is Cleared', 'success');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const textCount = (text) => {
        if (text === ("")) {
            return text = 0;
        }
        else {
            return text.split(" ").length;
        }
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} rows="8"></textarea>
                <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{textCount(text)} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}  Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
